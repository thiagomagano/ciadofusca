<header>
	<nav>
		<div class="logo">
			<a href="/">
				<img src="/assets/images/logos/logo-blue.png" alt="Logo cia do fusca" />
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
	header {
		position: sticky;
		top: 0;
		z-index: 45645;
	}

	ul.menu {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		gap: 1.5ch;
	}
	header {
		background-color: var(--clr-neutral-100);
		border-bottom: 1px solid var(--clr-primary-900);
		padding-block: 1rem;
		width: 100%;
		padding-inline: var(--spacing-inline);
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: var(--spacing-max-w);
		margin: 0 auto;
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
		color: var(--clr-primary);
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
