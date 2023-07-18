<script>
</script>

<footer>
	<div class="info-rodape">
		<section>
			<h5 class="icone-wrapper"><iconify-icon icon="ic:baseline-plus" /> Mais informações</h5>
			<ul>
				<li>
					<a data-sveltekit-reload href="/"> Home </a>
				</li>
				<li>
					<a data-sveltekit-reload href="/carros"> Carros </a>
				</li>
				<li>
					<a data-sveltekit-reload href="/servicos">Serviços </a>
				</li>
				<li>
					<a data-sveltekit-reload href="/sobre">Sobre </a>
				</li>
				<li>
					<a data-sveltekit-reload href="/localizacao">Localização </a>
				</li>
			</ul>
		</section>
		<section>
			<h5 class="icone-wrapper">
				<iconify-icon icon="material-symbols:chat-outline" width="26" heigth="26" /> Atendimento
			</h5>
			<ul class="atendimento">
				<li class="icone-wrapper">
					<iconify-icon icon="icon-park-outline:local-two" />
					Rua Joaquim Silveira, 924 São Sebastião, Porto Alegre RS
				</li>
				<li class="icone-wrapper"><iconify-icon icon="ic:outline-phone" />(51) 33448970</li>
				<li class="icone-wrapper">
					<iconify-icon icon="material-symbols:mail-outline" />ciadofuscapoa@gmail.com
				</li>
			</ul>
		</section>
		<section>
			<h5 class="icone-wrapper">
				<iconify-icon icon="icon-park-outline:time" width="26" heigth="26" /> Horário de Atendimento
			</h5>
			<ul>
				<li class="font-bold">Segunda à Sexta:</li>
				<li>09:00h às 12:30h</li>
				<li>13:30h às 18:30h</li>
			</ul>
			<ul>
				<li class="font-bold">Sábado:</li>
				<li>09:00h às 12:30h</li>
			</ul>
		</section>
		<section>
			<h5 class="icone-wrapper">
				<iconify-icon icon="material-symbols:share-outline" width="26" heigth="26" /> Fique por dentro
				das novidades
			</h5>
			<ul class="redes">
				<li>
					<a href="https://www.facebook.com/CiadofuscaRS">
						<iconify-icon icon="ic:outline-facebook" width="64" heigth="64" /></a
					>
				</li>
				<li>
					<a href="https://www.instagram.com/ciadofuscaoficial"
						><iconify-icon icon="mdi:instagram" width="64" heigth="64" />
					</a>
				</li>
			</ul>
		</section>
	</div>
</footer>
<div class="dev-rodape">
	<p>
		Desenvolvido por <a
			class=" text-sucess hover:underline"
			href="http://www.thiagomagano.com.br"
			target="_blank"
			>Thiago Magano
		</a> © 2023 Cia Do Fusca. Todos os Direitos Reservados.
	</p>
</div>

<style>
	footer {
		padding: 1rem;
	}

	h5 {
		font-size: 1.2rem;
		font-weight: bold;
	}

	div.info-rodape {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		justify-content: baseline;
		gap: 1rem;
		max-width: var(--spacing-max-w);
		margin: 0 auto;
		padding-inline: var(--spacing-inline);
		min-height: 200px;
		align-items: base;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	div.dev-rodape {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		text-align: center;
	}

	.icone-wrapper {
		display: flex;
		justify-items: center;
		align-items: center;
		gap: 1ch;
	}

	ul.redes {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 1ch;
	}

	ul.atendimento {
		display: flex;
		flex-direction: column;
		gap: 1ch;
	}

	ul li a:hover {
		text-decoration: underline;
	}

	@media (max-width: 720px) {
		div.info-rodape {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
		}
	}
	@media (max-width: 480px) {
		div.info-rodape {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>
