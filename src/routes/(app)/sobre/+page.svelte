<section class="wrapper">
	<h1>Quem Somos</h1>
	<hr />

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
		<div class="img-wrapper">
			<img src="/assets/images/ciadofusca-quemsomos.jpg" alt="Donos da loja cia do fusca" />
		</div>
	</div>
</section>

<style>
	hr {
		margin-bottom: 1rem;
		border-top: 1px solid var(--clr-primary-600);
	}
	h1 {
		text-align: center;
	}

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
