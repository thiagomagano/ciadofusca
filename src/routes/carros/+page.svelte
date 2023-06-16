<script>
	export let data;
	import Carro from '../Carro.svelte';
</script>

<h1>Confira nossos Veículos disponiveis</h1>
<ul class="grid-of-cards">
	{#each data.items as car}
		<Carro {car} />
	{/each}
</ul>
