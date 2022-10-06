let listaUsuarios = [
    {
      id: 1,
      nome: "Thiago Pereira",
      sexo: "Masculino",
      idade: 20,
      email: "fulanodetal@termail.com",
    },
    {
      id: 2,
      nome: "Thaís Lins",
      sexo: "Feminino",
      idade: 19,
      email: "thaisdetal@gtemail.com",
    },
    {
      id: 3,
      nome: "Mariana Ferreira",
      sexo: "Feminino",
      idade: 25,
      email: "marianaferreira@tailme.com",
    },
    {
      id: 4,
      nome: "Pedro Ivo Silva",
      sexo: "Feminino",
      idade: 28,
      email: "manuelatrait@gteprmail.com",
    },
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
  
    if (pesquisa.value.toLowerCase() !== "" ) {
      filtrados = listaUsuarios.filter(usuario => usuario.nome.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1);
    } 
    else if(pesquisa.value.toLowerCase() == "masculino" || pesquisa.value.toLowerCase() =="feminino"){
     filtrados = listaUsuarios.filter(usuario => usuario.sexo.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1);
    }
    else if(pesquisa.value.toLowerCase() == "mail.com"){
        filtrados = listaUsuarios.filter(usuario => usuario.email.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1);
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