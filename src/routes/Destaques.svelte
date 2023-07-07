<script>
	import Carro from '$lib/components/Carro.svelte';
	import sortArray from '$lib/utils/sortArrays';
	import sortByData from '$lib/utils/sortByData';

	export let carros;

	carros = sortArray(carros);

	let carrosEmDestaque = [...carros.slice(0, 3)];

	let ultimosCarros = sortByData(carros, 'created');
</script>

<section id="destaques" class="destaques wrapper">
	<h2>Novidades (+)</h2>
	<hr />
	<ul class="grid-of-cards">
		{#each ultimosCarros as car}
			<Carro {car} />
		{/each}
	</ul>

	<h2>Destaques (+)</h2>
	<hr />

	<ul class="grid-of-cards">
		{#each carrosEmDestaque as car}
			<Carro {car} />
		{/each}
	</ul>

	<div class="button-wrap">
		<a data-sveltekit-reload href="/carros">
			<button class="button btn-fill">
				Confira todos modelos <iconify-icon
					icon="material-symbols:arrow-circle-right-outline"
					width="24"
					height="24"
				/>
			</button>
		</a>
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

	.button-wrap {
		text-align: center;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		padding-top: 1rem;
	}

	.button-wrap a {
		width: 100%;
	}
	.button-wrap button {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5ch;
	}
</style>
