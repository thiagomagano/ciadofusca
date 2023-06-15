<script>
  
  export let data;
</script>

<h2>Lista de carros</h2>

{#each data.items as car }
<div>
  <h3>{car.titulo}</h3>
  <p>Marca: {car.marca}</p>
  <p>Preço: {car.preco}</p>
  <p>Descrição: {@html car.descricao}</p>
</div>
{/each}
