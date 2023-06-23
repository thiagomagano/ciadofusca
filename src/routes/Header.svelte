<header>
	<nav>
		<div class="logo">
			<a href="/">
				<img src="/assets/images/logos/logo-white.png" alt="Logo cia do fusca" />
				<span class="logo">Cia do Fusca</span>
			</a>
		</div>
		<ul class="menu">
			<!-- <li><a href="/">Home</a></li> -->
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
		background-color: var(--clr-primary);
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
	div.logo {
		width: 130px;
		min-width: 100px;
	}
	span.logo {
		display: none;
	}

	li a {
		text-transform: uppercase;
	}

	@media (max-width: 720px) {
		ul.menu {
			display: none;
		}
		nav {
			justify-content: center;
		}
	}
</style>
