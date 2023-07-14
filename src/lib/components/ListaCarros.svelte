<script>
	import Carro from '$lib/components/CardCarro.svelte';

	export let carros;
	export let titulo;

	let elemCarousel;

	function carouselRight() {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}
</script>

<section class="wrapper relative">
	<h2>{titulo}</h2>
	<div
		bind:this={elemCarousel}
		class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto py-4 justify-baseline items-center"
	>
		<!-- //TODO - aicionar o botão de scroll -->
		{#each carros as car}
			<Carro {car} />
		{/each}
		<button
			type="button"
			class="btn-icon variant-filled absolute -right-12 w-1 bg-transparent md:w-8 md:variant-filled"
			on:click={carouselRight}
		/>
	</div>
</section>

<style>
	hr {
		width: 100%;
		border: 1px solid var(--clr-primary-400);
		margin-top: 0.5rem;
	}
	section {
		padding-top: 1rem;
	}
</style>
