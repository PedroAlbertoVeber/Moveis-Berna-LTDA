let botaoMenu = window.document.querySelector('.botao-menu');

botaoMenu.addEventListener('click', apareceEDesapareceMenu());

function apareceEDesapareceMenu() {
    let menuNavegacao = document.querySelector('#menuNavegacao');
    menuNavegacao.classList.toggle('menu-navegacao-aparecer');
};

