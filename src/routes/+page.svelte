<script>
  import Carro from "./Carro.svelte";
  import destaques from "./fakeCarsData"
</script>


<h1>Destaques (+)</h1>


<ul>
  {#each destaques as car }
    <Carro {car}/>
  {/each}
</ul>

<style>
   ul{
    display: grid;
    grid-template-columns: repeat(3, minmax(350px, 1fr));
    gap: 1rem;
    padding-block: 2rem;
    padding-left: 0;
  }

  @media (max-width: 1248px) {
    ul {
      grid-template-columns: repeat(2, minmax(350px, 1fr));
    }
  }
  @media (max-width: 720px) {

    ul {
      grid-template-columns: minmax(350px, 1fr);
    }
  }
</style>

