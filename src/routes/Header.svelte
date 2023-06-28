<script>
</script>

<header>
	<nav>
		<div class="logo">
			<a href="/">
				<img src="/assets/images/logos/logo-blue.png" alt="Logo cia do fusca" />
				<span class="logo">Cia do Fusca</span>
			</a>
		</div>
		<ul class="menu">
			<li><a href="/">Home</a></li>
			<li><a href="/carros">Carros</a></li>
			<li><a href="/servicos">Serviços</a></li>
			<li><a href="/sobre">Sobre</a></li>
			<li><a href="/localizacao">Localização</a></li>
			<li><a href="/contato">Contato</a></li>
		</ul>
	</nav>
</header>

<style>
	ul.menu {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		gap: 1.5ch;
	}
	header {
		padding-block: 0.5rem;
		width: 100%;
		padding-inline: var(--spacing-inline);
		background-color: var(--clr-neutral-100);
		color: var(--clr-neutral-800);
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: var(--spacing-max-w);
		margin: 0 auto;
		font-size: 0.7rem;
	}
	div.logo {
		width: 90px;
		min-width: 80px;
	}
	span.logo {
		display: none;
	}

	li a {
		text-transform: uppercase;
		color: var(--clr-neutral-800);
	}

	/* @media (max-width: 720px) {
		ul.menu {
			display: none;
		}
		nav {
			justify-content: center;
		}
	}
	@media (max-width: 475px) {
		header {
			display: none;
		}
	} */
</style>
