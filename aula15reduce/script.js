let shoppingCart= [
    {
      product: "Leite-Barnabé",
      measure: "Litro",
      qty: 5,
      price: 7.8,
      
    },
    {
        product: "Alcatra-Fribov",
        measure: "kg",
        qty: 1.896,
        price: 40,
    },
    {
        product: "Refrigerante-Toca Polar",
        measure: "Pet- 2 Litros",
        qty: 3,
        price: 8.99,
    },
    {
        product: "Arroz-Tio Chicão",
        measure: "Pacote- 1kg",
        qty: 4,
        price: 5.99,
    },
    {
        product: "Peito de Frango - Hot Chicken",
        measure: "kg",
        qty: 5,
        price: 16.99,
    }
    
  ];
  
  const pesquisa = document.getElementById("pesquisa");
  const btnPesquisar = document.getElementById("btnPesquisar");
  const btnLimpar = document.getElementById("btnLimpar");
  
  function listarTabelaProdutos(filtrados = undefined) {
    console.log('Entrou na função');
    let trTds = "";
    let lista = [];
    let resultado = document.getElementById("resultado");
  
    lista = filtrados === undefined ? shoppingCart : filtrados;
  
    lista.forEach((produtos) => {
      trTds += `<tr><td>${produtos.product}</td>`;
      trTds += `<td>${produtos.measure}</td>`;
      trTds += `<td>${produtos.qty}</td>`;
      trTds += `<td>${produtos.price}</td>`;
    });
    resultado.innerHTML = trTds;
  
    if (lista.length === 0) {
      resultado.innerHTML = `<tr><td colspan="5">Nenhum nome encontrado</td></tr>`;
    }
  }
  
  function filtrarDadosPorNome() {
    let filtrados = [];
  
    if (pesquisa.value.toLowerCase() !== "") {
      
        filtrados =  shoppingCart.filter(produtos => produtos.product.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1);
        
    } 
    else {
      filtrados =  shoppingCart;
    }
    listarTabelaProdutos(filtrados);
  }
  
  function limparDadosDaTelaForm() {
    pesquisa.value = "";
    listarTabelaProdutos(listaUsuarios);
  }
  
  addEventListener("load", () => listarTabelaProdutos());
  btnPesquisar.addEventListener("click", () => filtrarDadosPorNome());
  btnLimpar.addEventListener("click", () => limparDadosDaTelaForm());