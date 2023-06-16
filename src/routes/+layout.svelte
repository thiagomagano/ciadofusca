<script>
	import '../app.postcss';
	import './globals.css';
</script>

<header>
	<nav>
		<div class="logo">
			<img src="./assets/images/logos/logo-white.png" alt="Logo cia do fusca" />
			<span class="logo">Cia do Fusca</span>
		</div>
		<ul class="servicos">
			<li><a href="/">Home</a></li>
			<li><a href="/carros">Carros</a></li>
			<li><a href="/servicos">Servi&#xe7;os</a></li>
			<li><a href="/quemsomos">Quem somos</a></li>
			<li><a href="/comochegar">Como Chegar</a></li>
			<li><a href="/contato">Contato</a></li>
		</ul>
	</nav>
</header>
<main>
	<slot />
</main>

<style>
	div.logo {
		width: 130px;
		min-width: 100px;
	}
	span.logo {
		display: none;
	}

	ul.servicos {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		gap: 1.5ch;
	}
	header {
		background-color: var(--clr-VW-blue);
		padding-block: 1rem;
		width: 100%;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: var(--spacing-max-w);
		margin: 0 auto;
		padding-inline: var(--spacing-inline);
	}

	@media (max-width: 720px) {
		ul.servicos {
			display: none;
		}
		nav {
			justify-content: center;
		}
	}
</style>
