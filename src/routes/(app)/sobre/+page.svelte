<svelte:head>
	<title>Cia do Fusca | Sobre</title>
</svelte:head>

<section class="wrapper py-8">
	<h1 class="pb-12 text-center">Quem Somos</h1>

	<div class="txt-wrapper">
		<p>
			A Cia do Fusca é a realização de um sonho, de pessoas apaixonadas por Fuscas, assim como nós,
			que buscam resgatar neste ícone da indústria automotiva mundial, a simplicidade de um veículo
			feito para superar obstáculos, despojado de luxo e feito para durar, mas com um encanto que
			chama a atenção por onde passa. Nascemos de uma junção de paixão pelos Fuscas com uma
			necessidade de um espaço dedicado a eles e seus derivados, onde você encontra além de belos
			exemplares de Fuscas à venda, peças e acessórios. Venham nos visitar, conhecer ou relembrar
			este pedacinho do passado recente.
		</p>
		<div class="img-wrapper md:mt-4">
			<img src="/assets/images/ciadofusca-quemsomos.jpg" alt="Donos da loja cia do fusca" />
		</div>
	</div>
</section>

<style>
	div.txt-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	div.txt-wrapper p {
		font-size: clamp(1rem, 2vw, 1.6rem);
		line-height: 1.8;
		text-align: justify;
	}

	@media screen and (max-width: 670px) {
		.img-wrapper {
			order: -1;
		}
	}
</style>
