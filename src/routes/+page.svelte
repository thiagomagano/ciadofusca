<script>
	import Carro from './Carro.svelte';
	import scrollIntoView from '$lib/utils/scrollIntoView';
	import sortArray from '$lib/utils/sortArrays';

	export let data;

	const carros = sortArray(data.items);
	const ICONE_SIZING = '40';
</script>

<section class="banner">
	<div class="hero-txt">
		<h1>BEM-VINDO A CIA DO FUSCA</h1>
		<h3>AQUI TE AJUDAMOS A REALIZAR TEU SONHO</h3>
		<p>Somos uma revenda especializada em carros antigos.</p>

		<a class="button" on:click|preventDefault={scrollIntoView} href="#destaques"
			>Confira nossos modelos
		</a>
		<ul class="diferenciais">
			<li class="item">
				<iconify-icon icon="bi:credit-card" width={ICONE_SIZING} heigth={ICONE_SIZING} /> Parcelamos
				em até 18x
			</li>
			<li class="item">
				<iconify-icon icon="bi:bookmark-star" width={ICONE_SIZING} heigth={ICONE_SIZING} /> Modelos únicos
				e Exclusivos
			</li>
			<li class="item">
				<iconify-icon icon="bi:card-checklist" width={ICONE_SIZING} heigth={ICONE_SIZING} />Seu
				Carro Revisado e pronto pra usar
			</li>
		</ul>
	</div>

	<div class="hero-img">
		<img src="/assets/images/banner/banner3.jpg" alt="Fusca" />
	</div>
</section>

<section id="destaques" class="destaques">
	<h2>Destaques (+)</h2>
	<hr />

	<ul class="grid-of-cards">
		{#each carros as car}
			<Carro {car} />
		{/each}
	</ul>
</section>

<style>
	section.banner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: -2rem;
		gap: 1ch;
	}

	div.hero-txt {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 3ch;
	}

	div.hero-txt h1 {
		font-size: 4rem;
		line-height: 1.3;
		letter-spacing: 0.1ch;
		font-family: 'Georgia', serif;
	}
	div.hero-txt h3 {
		font-size: 1.3rem;
		font-family: 'Georgia', serif;
		letter-spacing: 0.05ch;
		color: var(--clr-primary-200);
	}

	div.hero-img {
		max-height: 700px;
		/* min-height: 650px; */
	}

	div.hero-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.button {
		background-color: var(--clr-VW-light);
		color: #fff;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		text-transform: uppercase;
		font-weight: 600;
	}

	hr {
		width: 100%;
		border: 1px solid var(--clr-primary-400);
		margin-top: 0.5rem;
	}

	ul.diferenciais {
		display: grid;
		grid-template-columns: repeat(3, 150px);
		gap: 1ch;
		color: var(--clr-primary);
		/* margin-top: 3rem; */
	}
	li.item {
		border: 1px solid var(--clr-primary-900);
		font-size: 0.85rem;
		padding: 1rem;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1ch;
		text-align: center;
		text-transform: uppercase;
	}

	@media (max-width: 800px) {
		section.banner {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-top: 0;
		}
		div.hero-txt {
			align-items: center;
			padding-bottom: 1rem;
		}

		div.hero-img {
			display: none;
		}
		ul.diferenciais {
			grid-template-columns: repeat(3, 125px);
		}
	}
</style>
