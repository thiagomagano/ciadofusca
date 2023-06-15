<script> 

import "./globals.css";

</script>

<header>
    <div class="logo">
      <img src="assets/images/logos/logo-white.png" alt="Logo cia do fusca">
      <span class="logo">Cia do Fusca</span>
    </div>
    <ul class="servicos">
<li><a href="/">Home</a></li>
<li><a href="/carros">Carros</a></li>
<li><a href="/carros">Serviços</a></li>
<li><a href="/carros">Quem somos</a></li>
<li><a href="/carros">Como Chegar</a></li>
<li><a href="/carros">Contato</a></li>
    </ul>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-block: 1rem;
    padding-inline: var(--spacing-inline);
    background-color: var(--clr-VW-blue);
  }
</style>