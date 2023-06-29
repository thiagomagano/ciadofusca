<script>
	import { Carousel } from 'flowbite-svelte';
	import getImagesFromPB from '$lib/utils/getImagesFromPB';

	export let data;

	const imagensData = [];

	if (data.imagens.length > 0) {
		data.imagens.forEach((image, index) => {
			const carrouselImage = {
				id: index,
				imgurl: getImagesFromPB('carros', data.id, image, true),
				attribution: `Imagem ${index + 1} de ${data.imagens.length} do ${data.titulo}`
			};
			imagensData.push(carrouselImage);
		});
	}
</script>

<div class="max-w-4xl">
	<Carousel images={imagensData} showCaptions={false} showThumbs={true} divClass="h-auto" />
</div>
