console.log("Carregamos o script.js");

function mudarTema() {
  console.log("chamamos mudar tema");

  // variável body recebe o elemento body do html
  var body = document.body;
  // se body contém a classe dark faça isso
  if (body.classList.contains("dark")) {
    // remova a classe dark
    body.classList.remove("dark");
  } else {
    // senão!
    // adicione a classe dark
    body.classList.add("dark");
  }
}