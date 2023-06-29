<script>
	export let open = false;
</script>

<aside class="absolute w-full h-full bg-primary-50 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a class="block" data-sveltekit-reload href="/">Home</a>
		<a class="block" data-sveltekit-reload href="/carros">Veículos</a>
		<a class="block" data-sveltekit-reload href="/sobre">Sobre</a>
		<a class="block" data-sveltekit-reload href="/servicos">Serviços</a>
		<a class="block" data-sveltekit-reload href="/localizacao">Localização</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 4000;
		border: 0;
	}

	.open {
		left: 0;
	}
</style>
