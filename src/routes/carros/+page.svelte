<script>
	export let data;
	import Carro from '../Carro.svelte';
</script>

<section class="wrapper">
	<h2>Confira nossos Veículos</h2>
	<ul class="grid-of-cards">
		{#each data.items as car}
			<Carro {car} />
		{/each}
	</ul>
</section>
