<script>
	function redirecionaClienteProZap() {
		const BASEURL = `https://api.whatsapp.com/send?`;
		const PHONE = `555133448970`;
		const BODYMSG = `Olá, navegando pelo seu site me interessei pelos seus serviços. Gostaria de saber mais sobre eles.`;
		const wppApiRedirectUrl = `${BASEURL}phone=${PHONE}&text=${BODYMSG}`;
		//window.location.href = wppApiRedirectUrl;

		const link = document.createElement('a');
		link.href = wppApiRedirectUrl;
		link.target = '_blank';
		link.click();
	}
</script>

<section class="wrapper">
	<div class="title">
		<h1>Serviços</h1>
		<hr />
	</div>

	<div class="servicos">
		<ul>
			<li>
				<a href="/carros">
					<img
						src="/assets/images/servicos/servicos-carros.png"
						alt="Serviço de venda Carros Clássicos"
					/>
				</a>
			</li>
			<li>
				<button on:click={redirecionaClienteProZap}>
					<img src="/assets/images/servicos/servicos-pecas.png" alt="Serviço de venda Peças" />
				</button>
			</li>

			<li>
				<button on:click={redirecionaClienteProZap}>
					<img
						src="/assets/images/servicos/servicos-acessorios.png"
						alt="Serviço de venda Acessórios"
					/>
				</button>
			</li>
		</ul>

		<button class="btn-cta" on:click={redirecionaClienteProZap}
			><iconify-icon icon="mdi:mechanic" width="26" heigth="26" /> Faça Já seu orçamento!</button
		>
	</div>
</section>

<style>
	section {
		--gap: 2.5rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--gap);
	}

	.servicos {
		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}

	.servicos ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--gap);
	}

	.servicos ul li:hover {
		cursor: pointer;
	}

	hr {
		margin-bottom: 1rem;
		border-top: 1px solid var(--clr-primary-600);
	}
	h1 {
		text-align: center;
	}
	button.btn-cta {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0.5rem;
		border-radius: 1ch;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1ch;
		line-height: 1.5;
		background-color: #294b96;
		color: var(--clr-neutral-100);
	}

	@media screen and (max-width: 720px) {
		section {
			--gap: 1rem;
		}
	}
</style>
