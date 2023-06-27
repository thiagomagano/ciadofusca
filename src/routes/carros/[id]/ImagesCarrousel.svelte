<script>
	import { CarouselTransition } from 'flowbite-svelte';

	const URL_API_FILES = 'http://ciadofusca.fly.dev/api/files/carros';

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
	<CarouselTransition
		images={imagensData}
		transitionType="slide"
		transitionParams={{ duration: 700, delay: 250 }}
		showCaptions={false}
		showThumbs={true}
		divClass="h-auto"
	/>
</div>
