<script>
	import Carro from '$lib/components/CardCarro.svelte';

	export let carros;
	export let titulo;

	let elemCarousel;
	let icon = true;

	function carouselRight() {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);

		icon = !icon;
	}
</script>

<section class="wrapper relative pt-8">
	<h2 class="h2 pb-4 text-center border-b-2 border-surface-800">{titulo}</h2>
	<div
		bind:this={elemCarousel}
		class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto py-4 justify-baseline items-center"
	>
		{#each carros as car}
			<Carro {car} />
		{/each}

		{#if icon}
			<button type="button" class="btn absolute -right-10 w-0 lg:w-8" on:click={carouselRight}>
				<iconify-icon icon="material-symbols:arrow-right-alt-rounded" width="32" />
			</button>
		{:else}
			<button type="button" class="btn absolute -left-10 w-0 lg:w-8" on:click={carouselRight}>
				<iconify-icon icon="material-symbols:arrow-left-alt-rounded" width="32" />
			</button>
		{/if}
	</div>
</section>
