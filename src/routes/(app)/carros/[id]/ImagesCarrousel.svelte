<script>
	import { Carousel } from 'flowbite-svelte';

	const URL_API_FILES = 'https://ciadofusca.fly.dev/api/files/carros';

	export let data;

	const imagensData = [];

	if (data.imagens.length > 0) {
		data.imagens.forEach((image, index) => {
			const carrouselImage = {
				id: index,
				imgurl: `${URL_API_FILES}/${data.id}/${image}`,
				attribution: 'ciadofusca.com.br'
			};
			imagensData.push(carrouselImage);
		});
	}
</script>

<div class="max-w-4xl">
	<Carousel images={imagensData} showCaptions={false} showThumbs={true} divClass="h-auto" />
</div>
