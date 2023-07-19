<script>
	export let car;
	import getUrlImagesFromPB from '$lib/utils/getUrlImagesFromPB';
	import toBRL from '$lib/utils/toBRL';
</script>

<a
	data-sveltekit-reload
	href="/carros/{car.id}"
	class="card transition-all ease-in-out delay-250 duration-300 snap-start flex gap-2 pb-4 flex-col items-center text-center w-full text-balance min-w-[330px] relative hover:scale-101"
>
	<div class="w-full">
		{#if car.capa}
			<img src={getUrlImagesFromPB('carros', car.id, car.capa, true)} alt={car.titulo} class="" />
		{/if}
		{#if car.vendido}
			<div class="vendido absolute top-0">
				<span class="invisible">VENDIDO</span>
				<img src="/assets/images/utils/selo_vendido.png" alt="Selo de vendido" />
			</div>
		{/if}
	</div>
	<div>
		<h2 class="text-2xl">{car.titulo}</h2>
		<p class="text-sm text-slate-400">{car.ano}/{car.modelo}</p>
	</div>

	<p class="text-3xl text-primary-500 money">
		{toBRL(car.preco)}
	</p>
	<div class="button-wrapper">
		<button class="btn variant-outline-primary text-sm">VER + DETALHES</button>
	</div>
</a>

<style>
	@media (max-width: 768px) {
		div.capa img {
			min-width: 250px;
			border-radius: 0;
		}
	}
</style>
