<script>
	export let car;
	const URL_API_FILES = 'http://ciadofusca.fly.dev/api/files/carros';
</script>

<li class="card">
	<div class="capa">
		{#if car.capa}
			<img src={`${URL_API_FILES}/${car.id}/${car.capa}`} alt={car.titulo} />
		{/if}
	</div>
	<h2>{car.titulo}</h2>
	<p>{car.ano}</p>
	<h3>
		{car.preco.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		})}
	</h3>
	<div class="button-wrapper">
		<button class="btn outline">DETALHES</button>
		<button class="btn fill">COMPRE JÁ</button>
	</div>
</li>

<style>
	h3 {
		color: var(--clr-primary);
	}
	h2 {
		color: var(--clr-neutral-600);
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
		background-color: var(--clr-neutral-200);
		border-radius: 12px;
		border: 1px solid var(--clr-neutral-300);
		padding: 38px;
		filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.04));
		text-align: center;
	}

	div.capa img {
		border-radius: 10px;
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

	.outline {
		background: transparent;
		color: var(--clr-primary);
		border: 1px solid var(--clr-primary);
		transition: all 0.3s ease;
	}

	.outline:hover {
		transform: scale(1.05);
		color: var(--clr-primary);
		border-color: var(--clr-primary);
		transition: all 0.2s ease;
	}

	.fill {
		background: var(--clr-primary);
		color: rgba(255, 255, 255, 0.95);
		filter: drop-shadow(0);
		font-weight: bold;
		transition: all 0.3s ease;
	}

	.fill:hover {
		transform: scale(1.125);
		border-color: rgba(255, 255, 255, 0.9);
		filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.04));
		transition: all 0.2s ease;
	}
</style>
