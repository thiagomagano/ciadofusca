<script>
	export let data;
	import Carro from '$lib/components/CardCarro.svelte';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';

	import { InputChip } from '@skeletonlabs/skeleton';

	//@TODO: Refatorar este código utilizando Svelte Stores;
	let carros = data.carros;

	const carrosPesquisa = carros.map((car) => ({
		...car,
		searchTerms: `
        ${car.titulo} ${car.marca} ${car.modelo} ${car.ano} ${car.descricao} 
        ${car.cor} ${car.vendido ? 'vendido' : ''}
      `
	}));

	const searchStore = createSearchStore(carrosPesquisa);

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});

	let searchValue = '';

	// let pesquisa = '';
	// let marca = '';
	// let decada = '';

	// $: pesquisaConvertida = new RegExp(pesquisa, 'i');
	// $: decadaConvertida = new RegExp(decada, 'i');

	// $: carrosFiltrados = carrosPesquisa.filter((car) => car.palavrasChave.match(pesquisaConvertida));
	// $: carrosFiltradosMarca = carrosFiltrados.filter((car) =>
	// 	marca ? car.marca.includes(marca) : car
	// );

	// $: carrosFiltradosDecada = carrosFiltradosMarca.filter((car) =>
	// 	car.modelo.match(decadaConvertida)
	// );

	// let todasMarcas = carros.map((car) => car.marca);
	// let marcasUnicas = [...new Set(todasMarcas)];

	function addFilter(filter) {
		if (filter) {
			$searchStore.search = filter;
			termoPesquisado = filter;
			searchValue = '';
		}
	}

	$: termoPesquisado = $searchStore.search;
	$: results = $searchStore.filtered.length;
</script>

<svelte:head>
	<title>Veículos | Cia do Fusca</title>
</svelte:head>

<section class="wrapper py-12">
	<h1 class="pb-12 text-center">Veículos</h1>

	<div class="flex flex-col gap-4">
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
			<div class="input-group-shim"><iconify-icon icon="fa:search" /></div>
			<input
				type="search"
				placeholder="Pesquisar... ex: 'Fusca' 'Azul' 'Placa Preta' '1300' 'Vendido' '1970'"
				bind:value={searchValue}
				on:keypress={(e) => {
					if (e.key === 'Enter') {
						addFilter(searchValue);
					}
				}}
			/>
			<button class="variant-filled-primary" on:click={() => addFilter(searchValue)}
				>Pesquisar</button
			>
		</div>
		{#if termoPesquisado !== ''}
			<div class="flex justify-between items-center gap-8">
				<p class="text-center">
					Pesquisando por: <span class="font-bold italic"> "{termoPesquisado.toUpperCase()}"</span>
				</p>
				<p>
					<span class="font-bold"> {results === 0 ? 'nenhum' : results}</span>
					{results > 1 ? 'carros encontrados' : 'carro encontrado'}
				</p>
				<button class="btn variant-filled-warning" on:click={() => ($searchStore.search = '')}
					>Limpar pesquisa</button
				>
			</div>
		{/if}

		<ul class="grid-of-cards">
			{#each $searchStore.filtered as car}
				<Carro {car} />
			{/each}
		</ul>
	</div>
</section>
