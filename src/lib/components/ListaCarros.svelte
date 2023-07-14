<script>
	import Carro from '$lib/components/CardCarro.svelte';

	export let carros;
	export let titulo;
</script>

<section class="wrapper">
	<h2>{titulo}</h2>
	<hr />

	<ul class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto py-4">
		{#each carros as car}
			<Carro {car} />
		{/each}
	</ul>
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
