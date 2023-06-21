<script>
	export let car;
	const URL_API_FILES = 'http://ciadofusca.fly.dev/api/files/carros';
	import { valueToBRL as toBRL } from '$lib/utils/formatMoney';
</script>

<a href={`/carros/${car.id}`}>
	<li class="card">
		<div class="capa">
			{#if car.capa}
				<img src={`${URL_API_FILES}/${car.id}/${car.capa}`} alt={car.titulo} />
			{/if}
		</div>
		<h2>{car.titulo}</h2>
		<p>{car.ano}/{car.modelo}</p>
		<h2 class="preco">
			{toBRL(car.preco)}
		</h2>
		<div class="button-wrapper">
			<button class="btn btn-outline">VER DETALHES</button>
			<!-- <button class="btn fill">COMPRE JÁ</button> -->
		</div>
	</li>
</a>

<style>
	h2 {
		color: var(--clr-neutral-900);
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
		backdrop-filter: blur(16px) saturate(180%);
		background-color: var(--clr-neutral-100);
		border-radius: 12px;
		border: 1px solid var(--clr-neutral-200);
		padding: 38px;
		filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.04));
		text-align: center;
	}

	div.capa img {
		border-radius: 10px;
		min-width: 350px;
	}
	div.button-wrapper {
		display: flex;
		gap: 1ch;
	}
	.btn {
		border: none;
		padding: 6px 10px;
		border-radius: 24px;
		font-size: 12px;
		cursor: pointer;
	}

	.btn-outline {
		background: var(--clr-primary);
		color: var(--clr-neutral-100);

		transition: all 0.3s ease;
	}

	.btn-outline:hover {
		transform: scale(1.05);
		transition: all 0.4s ease;
	}
</style>
