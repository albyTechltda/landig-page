const button = document.getElementById("conhecaMais");

button.addEventListener("click", function() {
    const cardsSection = document.getElementById("cards");
    cardsSection.scrollIntoView({
        behavior: "smooth", 
        block: "center"    
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.conhecer-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const modalNome = document.getElementById('modal-nome');
    const modalInfo = document.getElementById('modal-info');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtém o nome e a informação do botão clicado
            const nome = button.getAttribute('data-nome');
            const info = button.getAttribute('data-info');

            // Preenche o modal com as informações
            modalNome.textContent = nome;
            modalInfo.textContent = info;

            // Exibe o modal
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; // Fecha o modal
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'; // Fecha o modal se clicar fora dele
        }
    });
});

document.querySelector('a[href="#cards"]').addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    // Obtém a seção #cards
    const cardsSection = document.getElementById('cards');

    // Rola até a seção #cards, centralizando na tela
    cardsSection.scrollIntoView({
        behavior: 'smooth',  // Rolagem suave
        block: 'center'      // Centraliza a seção na tela
    });
});