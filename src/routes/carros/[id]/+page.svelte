<script>
	export let data;
	const URL_API_FILES = 'http://ciadofusca.fly.dev/api/files/carros';
	import { stringToBRL } from '$lib/utils/formatMoney';
	import { Carousel, CarouselTransition } from 'flowbite-svelte';
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
</script>

<section>
	<div class="max-w-4xl h-98">
		<Carousel {images} showCaptions={false} showThumbs={false} />
	</div>

	<div class="infos">
		<h1>{data.titulo}</h1>
		<li><strong>Ano/Modelo: </strong> {data.ano} / {data.modelo}</li>
		<li><strong>Descrição: </strong> {@html data.descricao}</li>
		<li><strong>Preço: </strong> {stringToBRL(data.preco)}</li>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 600px 1fr;
		gap: 2rem;
	}
	div.infos {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
