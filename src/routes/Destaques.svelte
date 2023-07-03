<script>
	import Carro from '$lib/components/Carro.svelte';
	import sortArray from '$lib/utils/sortArrays';

	export let carros;

	carros = sortArray(carros);

	
	
	let carrosEmDestaque = carros.slice(0, 6)

	
</script>

<section id="destaques" class="destaques wrapper">
	<h2>Destaques (+)</h2>
	<hr />

	<ul class="grid-of-cards">
		{#each carrosEmDestaque as car}
			<Carro {car} />
		{/each}
	</ul>

	<button class="btn btn-primary bg-primary-400 text-center"><a data-sveltekit-reload href="/carros">Ver todos modelos </a></button>
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
