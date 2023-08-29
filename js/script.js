// Função para ler o texto selecionado
function lerTextoSelecionado() {
    // Obtém o texto selecionado na página
    const textoSelecionado = window.getSelection().toString();

    // Verifica se algum texto foi selecionado
    if (textoSelecionado) {
        // Saudação inicial
        const saudacao = new SpeechSynthesisUtterance("Ola, sou o JP, seu assistente virtual para leitura, vamos começar.");
        speechSynthesis.speak(saudacao);
        // Cria um objeto de "utterance" para a síntese de fala
        const utterance = new SpeechSynthesisUtterance(textoSelecionado);
        // Inicia a síntese de fala para ler o texto selecionado
        speechSynthesis.speak(utterance);
    } else {
        // Exibe um alerta se nenhum texto foi selecionado
        // alert("Selecione um texto para ouvir.");
        const todoTexto = document.body.innerText;
        const selecao = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(document.body);
        selecao.removeAllRanges();
        selecao.addRange(range);
        // Saudação inicial
        const saudacao = new SpeechSynthesisUtterance("Ola, sou o JP, seu assistente virtual para leitura, vamos começar.");
        speechSynthesis.speak(saudacao);
        // Cria um objeto de "utterance" para a síntese de fala
        const utterance = new SpeechSynthesisUtterance(todoTexto);
        // Inicia a síntese de fala para ler o texto selecionado
        speechSynthesis.speak(utterance);
        //alert('Texto selecionado:\n' + todoTexto);
    }
}

// Obtém a referência ao botão "Ler Texto Selecionado"
const botaoLerTexto = document.getElementById('lerTexto');

// Adiciona um ouvinte de eventos ao botão para chamar a função lerTextoSelecionado() quando clicado
botaoLerTexto.addEventListener('click', lerTextoSelecionado);

// Função a ser executada pelo atalho de teclado
function executarAtalho() {
    alert('Atalho de teclado pressionado!'); // Substitua por seu código JavaScript
}

// Adiciona um evento de escuta ao documento para detectar a combinação de teclas (Ctrl + Shift + F)
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'F') {
        executarAtalho(); // Chama a função quando a combinação de teclas é detectada
        // start nas falas
        lerTextoSelecionado()
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  
  // Força a reprodução do áudio automaticamente
  audioPlayer.play().then(() => {
    // Áudio reproduzido com sucesso
  }).catch(error => {
    console.error('Erro ao reproduzir áudio:', error);
  });
});
