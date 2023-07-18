<script>
	export let data;

	import getUrlImagesFromPB from '$lib/utils/getUrlImagesFromPB';

	import toBRL from '$lib/utils/toBRL';

	import ImagesCarrousel from '$lib/components/ImagesCarrousel.svelte';

	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	import { enhance } from '$app/forms';

	// import DialogForm from './DialogForm.svelte';

	function redirecionaClienteProZap() {
		const BASEURL = `https://api.whatsapp.com/send?`;
		const PHONE = `5551984167909`;
		const BODYMSG = `Olá, gostaria de saber mais sobre este veículo que está no site: ${data.titulo} ${data.ano} ${window.location.href}`;
		const wppApiRedirectUrl = `${BASEURL}phone=${PHONE}&text=${BODYMSG}`;
		//window.location.href = wppApiRedirectUrl;

		const link = document.createElement('a');
		link.href = wppApiRedirectUrl;
		link.target = '_blank';
		link.click();
	}

	let isOpen = false;
	export let form;
</script>

<svelte:head>
	<title>Cia do Fusca | {data?.titulo}</title>

	<meta property="og:title" content={data.titulo} />
	<meta
		property="og:description"
		content={`Venha conhecer esse maravilho ${data.titulo}, ela está a venda só aqui na Cia do Fusca. `}
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content={'http://ciadofusca.com.br/carros/' + data.id} />
	<meta property="og:image" content={getUrlImagesFromPB('carros', data.id, data.capa, true)} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="ciadofusca.com.br" />
	<meta name="twitter:title" content={data.titulo} />
	<meta
		name="twitter:description"
		content={`Venha conhecer esse maravilho ${data.titulo}, a venda só aqui na Cia do Fusca. `}
	/>

	<meta name="twitter:url" content={'http://ciadofusca.com.br/carros/' + data.id} />
	<meta name="twitter:image" content={getUrlImagesFromPB('carros', data.id, data.capa, true)} />
</svelte:head>

<section class="wrapper py-4">
	{#if data.vendido}
		<div class="vendido">
			<span>Vendido</span>
			<img src="/assets/images/utils/selo_vendido.png" alt="Selo de vendido" />
		</div>
	{/if}
	<h1 class="h1 text-center md:pb-4">{data.titulo}</h1>
	<div class="car">
		<ImagesCarrousel {data} />

		<div class="infos">
			<ul>
				<li><strong>Versão: </strong> <span>{data.titulo}</span></li>
				<li><strong>Marca: </strong> <span>{data.marca}</span></li>
				<li><strong>Ano/Modelo: </strong> <span>{data.ano} / {data.modelo}</span></li>
				<li><strong>Descrição: </strong> <span>{@html data.descricao}</span></li>
				<li><strong>Cor: </strong> <span>{data.cor}</span></li>
				<li class="money text-primary-500 h2">{toBRL(data.preco)}</li>
			</ul>
			<div class="button-group">
				<button
					class="zap"
					on:click={redirecionaClienteProZap}
					target="_blank"
					disabled={data.vendido}
					><iconify-icon icon="ic:outline-whatsapp" /> Fale com o vendedor
				</button>
				{#if !form?.success}
					<Accordion>
						<AccordionItem>
							<svelte:fragment slot="lead"
								><iconify-icon icon="game-icons:car-key" /></svelte:fragment
							>
							<svelte:fragment slot="summary">Faça uma proposta</svelte:fragment>
							<svelte:fragment slot="content">
								<form class="flex flex-col space-y-6" method="POST" use:enhance>
									<p class="text-sm">
										Que bom que você tem interesse na nossa relíquia! Para realizar a sua proposta,
										preencha os campos abaixo e clique no botão "enviar"!
									</p>

									<label class="label"
										><span> Nome: </span>
										<input class="input" type="text" name="nome" placeholder="Fulano da silva" />
										{#if form?.missingName}
											<p class="text-red-500">{form?.msg}</p>
										{/if}
									</label>
									<label class="label">
										<span>Whatsapp: </span>
										<input type="text" class="input" name="whatsapp" placeholder="5199999999" />
										{#if form?.missingWpp}
											<p class="text-red-500">{form?.msg}</p>
										{/if}
									</label>
									<label class="label">
										<span> Email (opcional): </span>
										<input class="input" type="email" name="email" placeholder="fulano@email.com" />
									</label>
									<label class="label flex align-center">
										<span>Veículo na troca? </span>
										<input class="checkbox ml-4" type="checkbox" name="troca" />
									</label>
									<label class="label"
										><span>Qual é a sua proposta? </span>
										<textarea
											class="textarea"
											type="textarea"
											name="proposta"
											placeholder="Tenho tal carro na troca no valor R$ mil, mais o resto em 12x"
											rows="4"
										/>
										{#if form?.missingProposta}
											<p class="text-red-500">{form?.msg}</p>
										{/if}
									</label>

									<button type="submit" class="w-full1 bg-primary-500 hover:bg-primary-700"
										>Enviar</button
									>
								</form>
							</svelte:fragment>
						</AccordionItem>
					</Accordion>
				{:else}
					<aside class="alert variant-outline-success">
						<!-- Icon -->
						<div><iconify-icon icon="clarity:success-standard-line" width="24" /></div>
						<!-- Message -->
						<div class="alert-message">
							<h3 class="h3">sucesso!</h3>
							<p>{form?.msg}</p>
						</div>
						<!-- Actions -->
					</aside>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	div.car {
		display: grid;
		grid-template-columns: minmax(350px, 2fr) minmax(200px, 1fr);
		gap: 2rem;
		position: relative;
	}

	div.infos {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1ch;
		justify-content: space-between;
	}

	div.button-group {
		display: flex;
		flex-direction: column;
		gap: 1ch;
	}

	button {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0.5rem;
		border-radius: 1ch;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1ch;
		line-height: 1.5;
	}

	button.zap {
		background-color: var(--clr-VW-green);
		color: var(--clr-neutral-100);
	}

	@media (max-width: 720px) {
		div.car {
			grid-template-columns: minmax(320px, 2fr);
			gap: 1ch;
		}
		div.infos {
			padding-inline: 0.5rem;
		}
	}

	.vendido {
		position: absolute;
		top: 10%;
		left: 120px;
		/* background-color: red; */
		color: #fff;
		font-weight: 700;
		display: block;
		width: 50%;
		text-align: center;
		opacity: 0.8;
		z-index: 4564564;
	}
	.vendido span {
		display: none;
	}
	.vendido img {
		width: 100%;
		height: 100%;
	}
	.infos {
		position: relative;
	}
</style>
