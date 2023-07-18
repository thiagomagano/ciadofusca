<script>
	import { PUBLIC_GOOGLE_MAPS_API } from '$env/static/public';
</script>

<svelte:head>
	<title>Cia do Fusca | Localização</title>
</svelte:head>

<section class="wrapper py-12">
	<h1 class="pb-16">Localização</h1>

	<div class="localizacao">
		<div class="fachada">
			<h3>Venha nos visitar!</h3>
			<img
				src="/assets/images/banner/cf_fachada_localizacao.webp"
				alt="Fachada da loja cia do fusca"
			/>
		</div>
		<div class="map">
			<h3>Estamos localizados na zona norte de Porto Alegre</h3>
			<iframe
				style="border:0"
				loading="lazy"
				allowfullscreen
				src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ-e1MUQN3GZUR8QooHbvmEzs&key=${PUBLIC_GOOGLE_MAPS_API}`}
				title="Mapa da localização da Cia do Fusca"
			/>
		</div>
	</div>
</section>

<style>
	h1,
	h3 {
		text-align: center;
	}

	.localizacao {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}
	iframe {
		width: 100%;
		height: 100%;
		min-height: 400px;
	}

	.fachada,
	.map {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.map {
		height: 100%;
		min-height: 400px;
	}

	@media screen and (max-width: 1228px) {
		.localizacao {
			grid-template-columns: 1fr;
		}

		.map {
			order: -1;
		}
	}
</style>
