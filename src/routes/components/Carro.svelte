<script>
	export let car;
	import getImagesFromPB from '$lib/utils/getImagesFromPB';
	import { valueToBRL as toBRL } from '$lib/utils/formatMoney';
</script>

<a data-sveltekit-reload href={`/carros/${car.id}`}>
	<li class="card">
		<div class="capa">
			{#if car.capa}
				<img src={getImagesFromPB('carros', car.id, car.capa, true)} alt={car.titulo} />
			{/if}
			{#if car.vendido}
				<div class="vendido">
					<span>VENDIDO</span>
					<img src="/assets/images/utils/selo_vendido.png" alt="Selo de vendido" />
				</div>
			{/if}
		</div>
		<h2>{car.titulo}</h2>
		<p>{car.ano}/{car.modelo}</p>
		<h2 class="preco">
			{toBRL(car.preco)}
		</h2>
		<div class="button-wrapper">
			<button class="btn btn-outline">VER + DETALHES</button>
		</div>
	</li>
</a>

<style>
	h2 {
		color: var(--clr-primary);
		white-space: nowrap;
	}

	h2.preco {
		color: var(--clr-VW-green);
		font-size: 1.8rem;
	}

	p {
		color: var(--clr-neutral-400);
	}
	li.card {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1ch;
		align-items: center;
		justify-content: center;
	}
	li.card {
		border: 1px solid var(--clr-neutral-200);
		border-bottom: 2px solid var(--clr-neutral-500);
		padding-bottom: 2ch;
		filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.04));
		text-align: center;
	}

	li.card:hover {
		filter: opacity(0.7);
	}

	div.capa {
		position: relative;
	}

	div.capa img {
		min-width: 350px;
	}

	.btn {
		border: none;
		padding: 6px 10px;
		border-radius: 24px;
		font-size: 12px;
		cursor: pointer;
	}

	.btn-outline {
		background: var(--clr-neutral-100);
		color: var(--clr-primary-400);
		border: 1px solid var(--clr-primary-400);
		transition: all 0.3s ease;
	}

	.btn-outline:hover {
		transform: scale(1.05);
		transition: all 0.4s ease;
	}

	.vendido {
		position: absolute;
		top: 10%;
		right: 15%;
		width: 70%;
		opacity: 0.9;
		border-radius: 4px;
	}

	.vendido span {
		display: none;
	}
	.vendido img {
		width: 100%;
		height: 100%;
	}

	@media (max-width: 768px) {
		li.card {
			padding-inline: 0;
			padding-bottom: 2ch;
			padding-top: 0;
			border-radius: 0;
		}
		div.capa img {
			min-width: 250px;
			border-radius: 0;
		}
	}
</style>
