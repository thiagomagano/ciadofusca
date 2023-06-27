<script>
	import Carro from './Carro.svelte';

	export let carros;
</script>

<section id="destaques" class="destaques">
	<h2>Destaques (+)</h2>
	<hr />

	<ul class="grid-of-cards">
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
</style>
