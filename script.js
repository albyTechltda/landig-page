document.addEventListener('DOMContentLoaded', () => {
    // Função para rolagem suave até a seção "cards" quando o botão "conhecaMais" for clicado
    const button = document.getElementById("conhecaMais");

    button.addEventListener("click", function() {
        const cardsSection = document.getElementById("cards");
        cardsSection.scrollIntoView({
            behavior: "smooth", 
            block: "center"    
        });
    });

    // Modal de Acompanhantes - Exibição ao clicar no botão de "conhecer mais"
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

    // Fecha o modal ao clicar no botão de fechar
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; // Fecha o modal
    });

    // Fecha o modal se clicar fora dele
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'; // Fecha o modal se clicar fora dele
        }
    });

    // Rolagem suave até a seção de Cards ao clicar no link "conhecaMais"
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

    // Controle do menu hambúrguer em telas pequenas
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');
    const logo = document.querySelector('.logo');

    // Abrir/Fechar o menu ao clicar no ícone de hambúrguer
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');  // Ativa/Desativa o menu
        logo.classList.toggle('active');    // Ativa/Desativa a logo
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            logo.classList.remove('active'); // Garante que a logo apareça novamente
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalNome = document.getElementById("modal-nome");
    const modalInfo = document.getElementById("modal-info");
    const closeModal = document.querySelector(".close");

    // Ocultar os botões "Contratar" inicialmente
    document.querySelectorAll(".contratar-btn").forEach(button => {
        button.classList.add("hidden");
    });

    // Evento para os botões "Conhecer"
    document.querySelectorAll(".conhecer-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const nome = button.dataset.nome;
            const info = button.dataset.info;

            // Exibir o botão "Contratar" correspondente
            const card = e.target.closest(".card");
            const contratarBtn = card.querySelector(".contratar-btn");
            contratarBtn.classList.remove("hidden");

            // Exibir informações no modal
            modalNome.textContent = nome;
            modalInfo.textContent = info || "Gostaria de contratar esta acompanhante?";
            modal.style.display = "flex";
        });
    });

    // Evento para os botões "Contratar"
    document.querySelectorAll(".contratar-btn").forEach(button => {
        button.addEventListener("click", () => {
            const nome = button.dataset.nome;

            // Exibir confirmação no modal
            modalNome.textContent = "Obrigado!";
            modalInfo.textContent = `Você contratou ${nome}. Entraremos em contato em breve.`;
            modal.style.display = "flex";
        });
    });

    // Fechar modal ao clicar no botão de fechar
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
