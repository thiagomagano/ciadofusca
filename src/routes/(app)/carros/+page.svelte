<script>
	export let data;
	import Carro from '$lib/components/Carro.svelte';

	let pesquisa = ''


	$: pesquisaConvertida = new RegExp(pesquisa, "i")
	$: carrosFiltrados = data.items.filter((car) => car.titulo.match(pesquisaConvertida))
	
</script>

<svelte:head>
	<title>Veículos | Cia do Fusca</title>
</svelte:head>

<section class="wrapper">
	<h1>Veículos</h1>
	<hr />

	<div class="pesquisa">
		<span>Filtra pelo nome do carro desejado:</span>
		<input type="text" placeholder="Pesquise Aqui..." bind:value= {pesquisa}>
	</div>
	<ul class="grid-of-cards">
		{#each carrosFiltrados as car}
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
