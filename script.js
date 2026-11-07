document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // Abre e fecha o menu no celular
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('ativo');
    });

    // Fecha o menu ao clicar em qualquer link (para navegação em âncoras na mesma página)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('ativo');
        });
    });

    // Adiciona sombra na navbar ao rolar a página
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.8)';
        } else {
            nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
        }
    });
});