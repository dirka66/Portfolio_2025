document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) menuToggle.classList.remove('active');
            if (mainNav) mainNav.classList.remove('active');
        });
    });

    // Scroll header
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Scroll Reveal
            const reveals = document.querySelectorAll('.reveal');
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const revealTop = reveals[i].getBoundingClientRect().top;
                const revealPoint = 150;

                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        });

        // Déclencher l'animation au chargement
        window.addEventListener('load', function() {
            window.dispatchEvent(new Event('scroll'));
        });
    }
}); 