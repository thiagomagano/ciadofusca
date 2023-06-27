<script>
	import Carro from './Carro.svelte';
	import scrollIntoView from '$lib/utils/scrollIntoView';
	import sortArray from '$lib/utils/sortArrays';
	import Destaques from './Destaques.svelte';

	export let data;

	const carros = sortArray(data.items);
	const ICONE_SIZING = '40';
</script>

<section class="banner">
	<div class="hero-img">
		<img src="/assets/images/banner/cf_fachada.png" alt="Fachada Cia do Fusca" />
	</div>
	<div class="hero-txt">
		<div class="txt-wrapper">
			<h1>BEM-VINDO A CIA DO FUSCA</h1>
			<p>Somos uma loja física especializada em carros clássicos.</p>
			<div class="button-group">
				<a class="button btn-fill" on:click|preventDefault={scrollIntoView} href="#destaques"
					>Confira nossos modelos
				</a>
				<a class="button btn-outline" href="/localizacao">Conheça nossa loja </a>
			</div>
		</div>
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
</section>

<Destaques {carros} />

<style>
	section.banner {
		display: flex;
		flex-direction: column;
		gap: 1ch;
		padding-top: 1rem;
	}

	div.hero-img {
		width: 100%;
		height: 430px;
	}

	div.hero-img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}

	div.hero-txt {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 5ch;
		padding-block: 1rem;
	}

	div.txt-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 2ch;
	}

	div.hero-txt h1 {
		font-size: 3rem;
		line-height: 1.3;
		letter-spacing: 0.1ch;
		font-family: 'Georgia', serif;
		text-align: center;
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
		background-color: var(--clr-neutral-100);
		color: var(--clr-VW-light);
		border: 1px solid var(--clr-VW-light);
	}

	ul.diferenciais {
		display: grid;
		grid-template-columns: repeat(3, 175px);
		gap: 2ch;
		color: var(--clr-primary);
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

		ul.diferenciais {
			grid-template-columns: repeat(3, 125px);
		}
	}
</style>
