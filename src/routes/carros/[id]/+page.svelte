<script>
	export let data;
	const URL_API_FILES = 'http://ciadofusca.fly.dev/api/files/carros';
	import { valueToBRL as toBRL } from '$lib/utils/formatMoney';
	import { Carousel, CarouselTransition } from 'flowbite-svelte';
	//import Icon from '@iconify/svelte';
	// ./imageData/+server.js has the following
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

	function redirecionaCarroProZap() {
		const BASEURL = `https://api.whatsapp.com/send?`;
		const PHONE = `5551993438767`;
		const BODYMSG = `Olá, gostaria de saber mais sobre este veículo que está no site: ${data.titulo} ${data.ano} ${window.location.href}`;
		const wppApiRedirectUrl = `${BASEURL}phone=${PHONE}&text=${BODYMSG}`;
		//window.location.href = whtasappMsg;

		const link = document.createElement('a');
		link.href = wppApiRedirectUrl;
		link.target = '_blank';
		link.click();
	}
</script>

<section>
	<div class="max-w-4xl">
		<Carousel {images} showCaptions={false} showThumbs={false} />
	</div>

	<div class="infos">
		<ul>
			<li><h2>{data.titulo}</h2></li>
			<li><strong>Ano/Modelo: </strong> {data.ano} / {data.modelo}</li>
			<li><strong>Descrição: </strong> {@html data.descricao}</li>
			<li><strong>Preço: </strong> {toBRL(data.preco)}</li>
		</ul>
		<div class="button-group">
			<button class="zap" on:click={redirecionaCarroProZap}
				><iconify-icon icon="ic:outline-whatsapp" /> Fale com o vendedor
			</button>
			<button class="interesse"><iconify-icon icon="game-icons:car-key" /> Tenho Interesse </button>
		</div>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2rem;
	}
	div.infos {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1ch;
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
</style>
