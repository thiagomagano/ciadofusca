<script>
	export let data;
	import Carro from '/src/routes/components/Carro.svelte';
</script>

<section class="wrapper">
	<h1>Veículos</h1>
	<hr />
	<ul class="grid-of-cards">
		{#each data.items as car}
			<Carro {car} />
		{/each}
	</ul>
</section>

<style>
	hr {
		margin-bottom: 1rem;
		border-top: 1px solid var(--clr-primary-600);
	}
	h1 {
		text-align: center;
	}
</style>
