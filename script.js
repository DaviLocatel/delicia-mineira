// Aguarda o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão do menu e a lista de links
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // Quando clicar no hambúrguer, o menu abre/fecha
    mobileMenu.addEventListener('click', () => {
        // A classe 'ativo' no CSS lida com a expansão da lista no celular
        navMenu.classList.toggle('ativo');
    });

    // Fecha o menu automaticamente quando o usuário clica em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('ativo')) {
                navMenu.classList.remove('ativo');
            }
        });
    });
});