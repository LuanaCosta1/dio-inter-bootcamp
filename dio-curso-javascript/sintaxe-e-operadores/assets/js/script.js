let mensagem = "";
let mensagem2 = "";

let n1 = document.getElementById("num1").value;
let n2 = document.getElementById("num2").value;
let verificar = document.getElementById("verificar");

function createDiv() {
  let body = document.getElementById("saida");
  let saidaDiv = document.createElement("div");
  let saidaP = document.createElement("p");
  saidaP = document.createTextNode(mensagem + mensagem2);
  saidaDiv.appendChild(saidaP);
  body.appendChild(saidaDiv);
}

verificar.addEventListener("click", function comparaNumeros(n1, n2) {
  const saoIguais =
    n1 === n2
      ? (mensagem = "Os números são iguais!")
      : (mensagem = "Os números não são iguais! ");
  var soma = n1 + n2;
  const somaNumeros =
    soma > 10 && soma < 20
      ? (mensagem2 = "A soma é maior que 10 e menor que 20.")
      : (mensagem2 = "A soma não é maior que 10 e menor que 20.");
  createDiv();
});
