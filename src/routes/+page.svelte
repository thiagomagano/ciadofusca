<script>
	import Header from '$lib/components/Header.svelte';
	import ListaCarros from '$lib/components/ListaCarros.svelte';

	import sortArray from '$lib/utils/sortArrays';
	import sortByData from '$lib/utils/sortByData';

	export let data;

	let cars = data.cars;

	let destaques = sortArray(cars).slice(0, 5);
	let novidades = sortByData(cars, 'created').reverse().slice(0, 5);

	const ICONE_SIZING = '40';
</script>

<svelte:head>
	<title>Cia do Fusca | Inicio</title>
	<meta
		name="description"
		content="Quer comprar um Fusca? Aqui é o lugar certo. A Cia do Fusca é uma loja de carros clássicos de Porto Alegre. Venha nos visitar para conhecer nossos modelos lindos e nostalgicos."
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://www.ciadofusca.com.br/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Cia do Fusca | Inicio" />
	<meta property="og:description" content="Quer comprar um Fusca? Aqui é o lugar certo." />
	<meta property="og:image" content="/assets/images/banner/cf_fachada.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:domain" content="ciadofusca.com.br" />
	<meta name="twitter:url" content="https://www.ciadofusca.com.br/" />
	<meta name="twitter:title" content="Cia do Fusca | Inicio" />
	<meta
		name="twitter:description"
		content="Quer comprar um Fusca? Aqui é o lugar certo. A Cia do Fusca é uma loja de carros clássicos de Porto Alegre. Venha nos visitar para conhecer nossos modelos lindos e nostalgicos."
	/>
	<meta
		name="twitter:image"
		content="https://www.ciadofusca.com.br/assets/images/banner/cf_fachada_localizacao.webp"
	/>
</svelte:head>

<section class="banner mb-4">
	<Header styles={{ fontColor: 'text-white', bgColor: 'bg-transparent' }} />
	<div class="hero-txt">
		<h1>BEM-VINDO A CIA DO FUSCA</h1>
		<p>Somos uma loja física especializada em carros clássicos.</p>
		<ul class="diferenciais">
			<li class="item">
				<iconify-icon icon="bi:credit-card" width={ICONE_SIZING} heigth={ICONE_SIZING} /> Parcelamos
				em até 12x
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
			<a
				class="btn-sm md:btn-lg variant-filled-primary hover:scale-105 transition-all"
				href="/carros"
				>Confira nossos modelos
			</a>
			<a
				class="btn-sm md:btn-lg variant-outline-primary hover:scale-105 transition-all"
				href="/localizacao"
				>Conheça nossa loja
			</a>
		</div>
	</div>
</section>

<ListaCarros carros={novidades} titulo="Novidades" />
<ListaCarros carros={destaques} titulo="Destaques" />

<div class="flex items-center justify-center">
	<a href="/carros" class="py-8">
		<button class="btn variant-filled-primary flex gap-2">
			Confira todos modelos <iconify-icon
				icon="material-symbols:arrow-circle-right-outline"
				width="24"
				height="24"
			/>
		</button>
	</a>
</div>

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
		padding: 0.5rem;
	}

	ul.diferenciais {
		display: grid;
		grid-template-columns: repeat(3, 175px);
		gap: 2ch;
	}
	li.item {
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
		background-color: rgba(0, 0, 0, 0.35);
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

	@media (max-width: 475px) {
		section.banner {
			height: 550px;
			background-position: 39% center;
		}
		div.hero-txt h1 {
			font-size: 1.5rem;
			line-height: 1.2;
			letter-spacing: 0.1ch;
		}
		ul.diferenciais {
			grid-template-columns: repeat(3, minmax(90px, 150px));
		}

		li.item {
			font-size: 0.65rem;
			padding: 1ch;
		}
	}
</style>
