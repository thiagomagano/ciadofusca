<script>
	import scrollIntoView from '$lib/utils/scrollIntoView';
	import Destaques from './Destaques.svelte';
	import Header from './Header.svelte';

	export let data;

	const ICONE_SIZING = '40';
</script>

<section class="banner">
	<div class="hero-txt">
		<h1>BEM-VINDO A CIA DO FUSCA</h1>
		<p>Somos uma loja física especializada em carros clássicos.</p>
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
		<div class="button-group">
			<a class="button btn-fill" on:click|preventDefault={scrollIntoView} href="#destaques"
				>Confira nossos modelos
			</a>
			<a class="button btn-outline" href="/localizacao">Conheça nossa loja </a>
		</div>
	</div>
</section>

<Header />

<Destaques carros={data.items} />

<style>
	section.banner {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1ch;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 700px;
		color: var(--clr-primary-900);
		background-image: url('/assets/images/banner/cf_fachada.png');
		background-size: cover;
		background-color: var(--clr-neutral-700);
		background-blend-mode: overlay;
		background-position: center center;
	}

	div.hero-txt {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3ch;
		padding-inline: var(--spacing-inline);
	}

	div.hero-txt h1 {
		font-size: 3rem;
		line-height: 1.3;
		letter-spacing: 0.1ch;
		text-align: center;
		color: var(--clr-primary-900);
		padding: 0.5rem;
		background-color: rgba(0, 0, 0, 0.25);
	}

	.button-group {
		display: flex;
		gap: 1ch;
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
		display: block;
	}
	.btn-outline {
		background-color: transparent;
		color: var(--clr-VW-light);
		border: 1px solid var(--clr-VW-light);
	}

	ul.diferenciais {
		display: grid;
		grid-template-columns: repeat(3, 175px);
		gap: 2ch;
		color: var(--clr-primary-900);
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
		background-color: rgba(0, 0, 0, 0.25);
	}

	@media (max-width: 800px) {
		section.banner {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			margin-top: 0;
			height: 650px;
			background-position: 39% center;
		}
		div.hero-txt {
			flex-direction: column;
			gap: 2ch;
		}
		div.hero-txt h1 {
			font-size: 2rem;
			line-height: 1.2;
			letter-spacing: 0.1ch;
		}
		ul.diferenciais {
			grid-template-columns: repeat(3, minmax(110px, 150px));
		}
	}
</style>
