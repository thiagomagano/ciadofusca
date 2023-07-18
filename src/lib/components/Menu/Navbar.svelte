<script>
	import Hamburger from './Hamburger.svelte';
	// import { LightSwitch } from '@skeletonlabs/skeleton';
	export let styles;
	export let sidebar = false;
</script>

<nav class="pt-6">
	<div class="logo">
		<a href="/">
			<img src="/assets/images/logos/logo-white.png" alt="Logo cia do fusca" />
			<span class="logo">Cia do Fusca</span>
		</a>
	</div>
	<ul class="menu">
		<li><a class={styles?.fontColor} data-sveltekit-reload href="/carros">Veículos</a></li>
		<li><a class={styles?.fontColor} data-sveltekit-reload href="/servicos">Serviços</a></li>
		<li><a class={styles?.fontColor} data-sveltekit-reload href="/sobre">Sobre</a></li>
		<li>
			<a class={styles?.fontColor} data-sveltekit-reload href="/localizacao">Localização</a>
		</li>
		<!-- <LightSwitch /> -->
	</ul>
	<Hamburger bind:open={sidebar} />
</nav>

<style>
	ul.menu {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		gap: 1.5ch;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: var(--spacing-max-w);
		margin: 0 auto;
	}
	div.logo {
		width: 120px;
		min-width: 80px;
	}
	span.logo {
		display: none;
	}

	li a {
		text-transform: uppercase;
		/* color: var(--clr-neutral-100); */
	}

	@media screen and (width <= 475px) {
		ul.menu {
			display: none;
		}
		nav {
			justify-content: space-between;
		}
	}
</style>
