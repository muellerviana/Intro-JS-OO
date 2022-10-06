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
        qty: 1.896,
        price: 40,
    },
    {
        product: "Alcatra-Fribov",
        measure: "kg",
        qty: 1.896,
        price: 40,
    },
    {
        product: "Alcatra-Fribov",
        measure: "kg",
        qty: 1.896,
        price: 40,
    }
    
  ];
  
  const pesquisa = document.getElementById("pesquisa");
  const btnPesquisar = document.getElementById("btnPesquisar");
  const btnLimpar = document.getElementById("btnLimpar");
  
  function listarUsuariosNaTabela(filtrados = undefined) {
    let trTds = "";
    let lista = [];
    let resultado = document.getElementById("resultado");
  
    lista = filtrados === undefined ? listaUsuarios : filtrados;
  
    lista.forEach((usuario) => {
      trTds += `<tr><td>${usuario.id}</td>`;
      trTds += `<td>${usuario.nome}</td>`;
      trTds += `<td>${usuario.sexo}</td>`;
      trTds += `<td>${usuario.idade}</td>`;
      trTds += `<td>${usuario.email}</td></tr>`;
    });
    resultado.innerHTML = trTds;
  
    if (lista.length === 0) {
      resultado.innerHTML = `<tr><td colspan="5">Nenhum nome encontrado</td></tr>`;
    }
  }
  
  function filtrarDadosPorNome() {
    let filtrados = [];
  
    if (pesquisa.value.toLowerCase() !== "") {
      filtrados = listaUsuarios.filter(usuario => usuario.nome.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1);
    } 
    else {
      filtrados = listaUsuarios;
    }
    listarUsuariosNaTabela(filtrados);
  }
  
  function limparDadosDaTelaForm() {
    pesquisa.value = "";
    listarUsuariosNaTabela(listaUsuarios);
  }
  
  addEventListener("load", () => listarUsuariosNaTabela());
  btnPesquisar.addEventListener("click", () => filtrarDadosPorNome());
  btnLimpar.addEventListener("click", () => limparDadosDaTelaForm());