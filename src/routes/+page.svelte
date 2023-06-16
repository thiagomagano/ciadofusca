<script>
	import Carro from './Carro.svelte';
	export let data;
</script>

<h1>Destaques (+)</h1>

<ul class="grid-of-cards">
	{#each data.items as car}
		<Carro {car} />
	{/each}
</ul>
