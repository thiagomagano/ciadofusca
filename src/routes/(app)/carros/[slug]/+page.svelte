<script>
	export let data;

	import getUrlImagesFromPB from '$lib/utils/getUrlImagesFromPB';

	import toBRL from '$lib/utils/toBRL';

	import ImagesCarrousel from './ImagesCarrousel.svelte';

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

<section class="wrapper">
	{#if data.vendido}
		<div class="vendido">
			<span>Vendido</span>
			<img src="/assets/images/utils/selo_vendido.png" alt="Selo de vendido" />
		</div>
	{/if}
	<ImagesCarrousel {data} />

	<div class="infos">
		<h2>{data.titulo}</h2>
		<ul>
			<li><strong>Ano/Modelo: </strong> {data.ano} / {data.modelo}</li>
			<li><strong>Descrição: </strong> {@html data.descricao}</li>
			<li><strong>Cor: </strong> {data.cor}</li>
			<li><strong>Marca: </strong> {data.marca}</li>
			<li class="preco">{toBRL(data.preco)}</li>
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
				<button on:click={() => (isOpen = true)} class="interesse" disabled={data.vendido}
					><iconify-icon icon="game-icons:car-key" /> Registre seu Interesse
				</button>
			{/if}
		</div>
	</div>

	<!-- <DialogForm bind:isOpen carro={data} bind:form /> -->
</section>

<style>
	section {
		display: grid;
		grid-template-columns: minmax(350px, 2fr) minmax(200px, 1fr);
		gap: 2rem;
		padding-block: 2rem;
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
	}

	ul li {
		border-bottom: 1px solid var(--clr-neutral-300);
		padding-bottom: 0.2rem;
		line-height: 2;
	}

	ul li.preco {
		font-size: 2rem;
		color: var(--clr-VW-green);
		font-weight: bold;
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
	button.interesse {
		background-color: var(--clr-primary);
		color: var(--clr-neutral-100);
	}

	@media (max-width: 720px) {
		section {
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
