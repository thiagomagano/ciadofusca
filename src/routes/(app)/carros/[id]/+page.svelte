<script>
	export let data;

	import { valueToBRL as toBRL } from '$lib/utils/formatMoney';
	import { Toast } from 'flowbite-svelte';

	import ImagesCarrousel from './ImagesCarrousel.svelte';

	import DialogForm from './DialogForm.svelte';

	import { slide } from 'svelte/transition';

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

<section class="wrapper">
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
			<button class="zap" on:click={redirecionaClienteProZap} target="_blank"
				><iconify-icon icon="ic:outline-whatsapp" /> Fale com o vendedor
			</button>
			{#if !form?.success}
				<button on:click={() => (isOpen = true)} class="interesse"
					><iconify-icon icon="game-icons:car-key" /> Registre seu Interesse
				</button>
			{/if}
			{#if form?.success}
				<Toast color="green" transition={slide}
					>Interesse registrado com sucesso!
					<svelte:fragment slot="icon">
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="sr-only">Check icon</span>
					</svelte:fragment>
				</Toast>
			{/if}

			{#if form?.incorrect}
				<Toast color="orange" transition={slide}>
					<svelte:fragment slot="icon">
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="sr-only">Warning icon</span>
					</svelte:fragment>
					{form?.msg}
				</Toast>
			{/if}
		</div>
	</div>

	<DialogForm bind:isOpen carro={data} />
</section>

<style>
	section {
		display: grid;
		grid-template-columns: minmax(350px, 2fr) minmax(200px, 1fr);
		gap: 2rem;
		padding-block: 2rem;
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
</style>
