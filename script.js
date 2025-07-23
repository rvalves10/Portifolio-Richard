document.addEventListener('DOMContentLoaded', () => {

    // Inicializa os ícones do Lucide
    lucide.createIcons();

    // Lógica para o cabeçalho transparente ao rolar a página
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-slate-900/80', 'backdrop-blur-sm', 'shadow-md');
            } else {
                header.classList.remove('bg-slate-900/80', 'backdrop-blur-sm', 'shadow-md');
            }
        });
    }

    // Lógica para o menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    if (mobileLinks.length > 0 && mobileMenu) {
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Lógica para animação de fade-in das seções ao rolar
    const sections = document.querySelectorAll('.section-hidden');
    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    entry.target.classList.remove('section-hidden');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% da seção está visível
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }
});


     // função mudar de endioma
     function mudarIdioma(lang) {
    document.getElementById('pt').textContent = textos[pt].titulo;
    document.getElementById('en').textContent = textos[en].descricao;
  }