<script>
  const capa_path = "assets/images/carros/capas"
  
  const destaques = [
  {
    title: "Fusca 1300L",
    ano: "1976/1976",
    preco: "R$ 29.000,00" ,
    url_capa: `${capa_path}/fusca1.jpeg`
  },
  {
    title: "Fusca 1961",
    ano: "1961/1961",
    preco: "R$ 48.800,00" ,
    url_capa: `${capa_path}/fusca2.jpeg`
  },
  {
    title: "Voyage CL 1.6 CHT",
    ano: "1990/1991",
    preco: "R$ 27.800,00" ,
    url_capa: `${capa_path}/fusca3.jpeg`
  },
  {
    title: "Ford Escort",
    ano: "1987/1987",
    preco: "R$ 26.800,00" ,
    url_capa: `${capa_path}/fusca4.jpeg`
  },
  {
    title: "Fusca 1300L",
    ano: "1976/1976",
    preco: "R$ 29.000,00" ,
    url_capa: `${capa_path}/fusca1.jpeg`
  },
  {
    title: "Fusca 1961",
    ano: "1961/1961",
    preco: "R$ 48.800,00" ,
    url_capa: `${capa_path}/fusca2.jpeg`
  },
  {
    title: "Voyage CL 1.6 CHT",
    ano: "1990/1991",
    preco: "R$ 27.800,00" ,
    url_capa: `${capa_path}/fusca3.jpeg`
  },
  {
    title: "Ford Escort",
    ano: "1987/1987",
    preco: "R$ 26.800,00" ,
    url_capa: `${capa_path}/fusca4.jpeg`
  },
  {
    title: "Fusca 1300L",
    ano: "1976/1976",
    preco: "R$ 29.000,00" ,
    url_capa: `${capa_path}/fusca1.jpeg`
  },
  {
    title: "Fusca 1961",
    ano: "1961/1961",
    preco: "R$ 48.800,00" ,
    url_capa: `${capa_path}/fusca2.jpeg`
  },
  {
    title: "Voyage CL 1.6 CHT",
    ano: "1990/1991",
    preco: "R$ 27.800,00" ,
    url_capa: `${capa_path}/fusca3.jpeg`
  },
  {
    title: "Ford Escort",
    ano: "1987/1987",
    preco: "R$ 26.800,00" ,
    url_capa: `${capa_path}/fusca4.jpeg`
  },
  ]
</script>


<h1>Destaques (+)</h1>


<ul>
  {#each destaques as car }
  <li class="card">
    <div class="capa">
      <img src={car.url_capa} alt={car.title}>
    </div>
    <h2>{car.title}</h2>
    <p>{car.ano}</p>
    <h3>{car.preco}</h3>
     <div class="button-wrapper"> 
      <button class="btn outline">DETALHES</button>
      <button class="btn fill">COMPRE JÁ</button>
    </div>
  </li>  
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
   
   h3 {
    color: var(--clr-primary);
  }
  h2 {
    color: var(--clr-neutral-600)
  }
  p {
    color: var(--clr-neutral-400)
  }
  li.card {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1ch;
    align-items: center;
    justify-content: center;
  }
  li.card {
  backdrop-filter: blur(16px) saturate(180%);
  background-color: var(--clr-neutral-200);
  border-radius: 12px;
  border: 1px solid var(--clr-neutral-300); 
  padding: 38px;  
  filter: drop-shadow(0 30px 10px rgba(0,0,0,0.04));
  text-align: center;
  }

  div.capa img {
    border-radius: 10px;
  }
  div.button-wrapper {
    display: flex;
    gap: 1ch;
  }
.btn {
  border: none;
  padding: 6px 10px;
  border-radius: 24px;
  font-size: 12px; 
  cursor: pointer;
}


.outline {
  background: transparent;
  color: var(--clr-primary);
  border: 1px solid var(--clr-primary);
  transition: all .3s ease;
}

.outline:hover{
  transform: scale(1.05);
  color: var(--clr-primary);
  border-color: var(--clr-primary);
  transition: all .2s ease;  
}

.fill {
  background: var(--clr-primary);
  color: rgba(255,255,255,0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all .3s ease; 
}

.fill:hover{
  transform: scale(1.125);  
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0,0,0,0.04));
  transition: all .2s ease;    
}

  
</style>

