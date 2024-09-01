async function buscarCEP() {
  var cep = document.getElementById("cep");

  if (cep.value == "") {
    alert("CEP vazio!");
  } else {
    try {
      var resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
      var dados = await resposta.json();
    } catch (e) {
      alert("CEP Inválido");
    }

    var logradouro = document.getElementById("logradouro");
    var bairro = document.getElementById("bairro");
    var localidade = document.getElementById("localidade");
    var estado = document.getElementById("estado");

    logradouro.innerHTML = dados.logradouro;
    bairro.innerHTML = dados.bairro;
    localidade.innerHTML = dados.localidade;
    estado.innerHTML = dados.estado;

    var info = document.getElementById("info");
    info.style = "opacity: 100%";
  }
}

function limpar() {
  var cep = document.getElementById("cep");
  var logradouro = document.getElementById("logradouro");
  var bairro = document.getElementById("bairro");
  var localidade = document.getElementById("localidade");
  var estado = document.getElementById("estado");

  cep.value = "";
  logradouro.innerHTML = "";
  bairro.innerHTML = "";
  localidade.innerHTML = "";
  estado.innerHTML = "";

  var info = document.getElementById("info");
  info.style = "opacity: 50%";
}
