var inputWord = document.getElementById('inputWord');
var wordBtn = document.getElementById('wordBtn');
var saidaPalindromo = document.getElementById('saida1');

function createDiv() {
    let body = document.getElementById("saida");
    let saidaDiv = document.createElement("div");
    let saidaP = document.createElement("p");
    saidaP = document.createTextNode(mensagem + mensagem2);
    saidaDiv.appendChild(saidaP);
    body.appendChild(saidaDiv);
}

wordBtn.addEventListener('click', verificarPalavra = () => {
    
});