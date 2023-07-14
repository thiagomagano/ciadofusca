<script>
	import getUrlImagesFromPB from '$lib/utils/getUrlImagesFromPB';

	export let data;

	const dataImages = [];

	if (data.imagens.length > 0) {
		data.imagens.forEach((image, index) => {
			const carrouselImage = {
				id: index,
				url: getUrlImagesFromPB('carros', data.id, image, true),
				attribution: `Imagem ${index + 1} de ${data.imagens.length} do ${data.titulo}`
			};
			dataImages.push(carrouselImage);
		});
	}

	let elemCarousel;

	function carouselLeft() {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight() {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
</script>

<div class="flex gap-4 flex-col">
	<div class="grid grid-cols-1fr items-center relative">
		<!-- Button: Left -->
		<button
			type="button"
			class="btn-icon variant-filled absolute left-4 w-1 bg-transparent md:w-8 md:variant-filled"
			on:click={carouselLeft}
		>
			<iconify-icon icon="fa:arrow-left" />
		</button>
		<!-- Full Images -->
		<div
			bind:this={elemCarousel}
			class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto scroll no-scrollbar"
		>
			{#each dataImages as image}
				<img
					class="snap-center w-[1024px] rounded-container-token"
					src={image.url}
					alt={image.attribution}
					loading="lazy"
				/>
			{/each}
		</div>
		<!-- Button: Right -->
		<button
			type="button"
			class="btn-icon variant-filled absolute right-4 w-1 bg-transparent md:w-8 md:variant-filled"
			on:click={carouselRight}
		>
			<iconify-icon icon="fa:arrow-right" />
		</button>
	</div>

	<div class="gap-4 pb-2 hidden sm:flex">
		{#each dataImages as image, i}
			<button type="button" on:click={() => carouselThumbnail(i)}>
				<img
					class="rounded-container-token max-w-[250px]"
					src={image.url}
					alt={image.attribution}
					loading="lazy"
				/>
			</button>
		{/each}
	</div>
</div>

<style>
</style>
