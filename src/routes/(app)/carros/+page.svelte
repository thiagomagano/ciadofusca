<script>
	export let data;
	import Carro from '$lib/components/CardCarro.svelte';

	//TODO: Refatorar este código utilizando Svelte Stores;
	let carros = data.carros;

	const carrosPesquisa = carros.map((car) => ({
		...car,
		palavrasChave: `${car.titulo} ${car.marca} ${car.modelo} ${car.ano} ${car.descricao} ${
			car.cor
		} ${car.vendido ? 'vendido' : ''}`
	}));

	let pesquisa = '';
	let marca = '';
	let decada = '';

	$: pesquisaConvertida = new RegExp(pesquisa, 'i');
	$: decadaConvertida = new RegExp(decada, 'i');

	$: carrosFiltrados = carrosPesquisa.filter((car) => car.palavrasChave.match(pesquisaConvertida));
	$: carrosFiltradosMarca = carrosFiltrados.filter((car) =>
		marca ? car.marca.includes(marca) : car
	);

	$: carrosFiltradosDecada = carrosFiltradosMarca.filter((car) =>
		car.modelo.match(decadaConvertida)
	);

	let todasMarcas = carros.map((car) => car.marca);
	let marcasUnicas = [...new Set(todasMarcas)];
</script>

<svelte:head>
	<title>Veículos | Cia do Fusca</title>
</svelte:head>

<section class="wrapper">
	<h1>Veículos</h1>
	<hr />

	<div class="pesquisa">
		<div class="input-group-wrapper">
			<div class="input-group">
				<span>Pesquise por Palavras-chave:</span>
				<input
					type="text"
					placeholder="EX: 'Fusca' 'Azul' 'Placa Preta' '1300' 'Vendido' '1970'"
					bind:value={pesquisa}
				/>
			</div>
			<div class="input-group">
				<span>Marca</span>
				<select name="marcas" id="marcas" bind:value={marca}>
					<option value="" selected>Todas</option>
					{#each marcasUnicas as marca}
						<option value={marca}>{marca}</option>
					{/each}
				</select>
			</div>
			<div class="input-group">
				<span>Década</span>
				<select name="ano" id="ano" bind:value={decada}>
					<option value="" selected>Todos</option>
					<option value="195">50's</option>
					<option value="196">60's</option>
					<option value="197">70's</option>
					<option value="198">80's</option>
					<option value="199">90's</option>
					<option value="200">00's</option>
				</select>
			</div>
		</div>
		<hr />
	</div>

	{#if carrosFiltradosDecada.length === 0}
		<h2 class="text-center mt-8">Nenhum carro encontrado</h2>
	{/if}
	<ul class="grid-of-cards">
		{#each carrosFiltradosDecada as car}
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

	div.pesquisa {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 1rem;
	}

	div.input-group-wrapper {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 2rem;
	}

	div.input-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	div.input-group span {
		font-weight: bold;
	}

	div.input-group input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid var(--clr-primary-600);
		border-radius: 0.25rem;
	}

	@media screen and (max-width: 600px) {
		div.input-group-wrapper {
			grid-template-columns: 1fr;
		}
	}
</style>
