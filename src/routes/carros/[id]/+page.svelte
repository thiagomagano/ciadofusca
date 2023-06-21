<script>
	export let data;
	const URL_API_FILES = 'http://ciadofusca.fly.dev/api/files/carros';
	import { valueToBRL as toBRL } from '$lib/utils/formatMoney';
	import { Carousel } from 'flowbite-svelte';

	import Dialog from './Dialog.svelte';

	export const images = [];

	if (data.imagens.length > 0) {
		data.imagens.forEach((image, index) => {
			const carrouselImage = {
				id: index,
				imgurl: `${URL_API_FILES}/${data.id}/${image}`,
				attribution: 'ciadofusca.com.br'
			};
			images.push(carrouselImage);
		});
	}

	function redirecionaClienteProZap() {
		const BASEURL = `https://api.whatsapp.com/send?`;
		const PHONE = `5551993438767`;
		const BODYMSG = `Olá, gostaria de saber mais sobre este veículo que está no site: ${data.titulo} ${data.ano} ${window.location.href}`;
		const wppApiRedirectUrl = `${BASEURL}phone=${PHONE}&text=${BODYMSG}`;
		//window.location.href = wppApiRedirectUrl;

		const link = document.createElement('a');
		link.href = wppApiRedirectUrl;
		link.target = '_blank';
		link.click();
	}

	let isOpen = false;
</script>

<section>
	<div class="max-w-4xl">
		<Carousel {images} showCaptions={false} showThumbs={false} divClass="h-auto" />
	</div>

	<div class="infos">
		<h2>{data.titulo}</h2>
		<ul>
			<li><strong>Ano/Modelo: </strong> {data.ano} / {data.modelo}</li>
			<li><strong>Descrição: </strong> {@html data.descricao}</li>
			<li class="preco">{toBRL(data.preco)}</li>
		</ul>
		<div class="button-group">
			<button class="zap" on:click={redirecionaClienteProZap} target="_blank"
				><iconify-icon icon="ic:outline-whatsapp" /> Fale com o vendedor
			</button>
			<button on:click={() => (isOpen = true)} class="interesse"
				><iconify-icon icon="game-icons:car-key" /> Registre seu Interesse
			</button>
		</div>
	</div>
	<Dialog bind:isOpen carro={data} />
</section>

<style>
	section {
		display: grid;
		grid-template-columns: minmax(350px, 2fr) minmax(200px, 1fr);
		gap: 2rem;
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
