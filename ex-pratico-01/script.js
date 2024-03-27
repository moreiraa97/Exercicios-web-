// Função para gerar um número aleatório entre 0 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 101);
}

// Variável para armazenar o número aleatório gerado
var numeroRandomico = gerarNumeroAleatorio();

// Função para verificar se o número digitado pelo usuário está correto
function verificarNumero() {
    // Obtém o valor digitado pelo usuário
    var numeroUsuario = parseInt(document.getElementById("inputNumero").value);

    // Obtém o elemento de feedback
    var feedbackBox = document.querySelector(".feedback-box");

    // Se o número digitado for igual ao número aleatório
    if (numeroUsuario === numeroRandomico) {
        // Exibe mensagem de acerto
        feedbackBox.textContent = "Você acertou! Parabéns!";
        feedbackBox.classList.remove("wrong");
        feedbackBox.classList.add("correct");
    } else {
        // Exibe mensagem de erro e dá uma dica
        if (numeroUsuario < numeroRandomico) {
            feedbackBox.textContent = "Erro! O número é maior.";
        } else {
            feedbackBox.textContent = "Erro! O número é menor.";
        }
        feedbackBox.classList.remove("correct");
        feedbackBox.classList.add("wrong");
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Gera um novo número aleatório
    numeroRandomico = gerarNumeroAleatorio();
    // Limpa o campo de entrada
    document.getElementById("inputNumero").value = "";
    // Limpa o feedback e remove classes de cor
    var feedbackBox = document.querySelector(".feedback-box");
    feedbackBox.textContent = "";
    feedbackBox.classList.remove("correct", "wrong");
}

// Adiciona um listener de evento para o botão de jogar
document.getElementById("botaoJogar").addEventListener("click", verificarNumero);

// Adiciona um listener de evento para o botão de reiniciar
document.getElementById("botaoReiniciar").addEventListener("click", reiniciarJogo);
