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

// Animation d'intro
window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro-animation');
  if (intro) {
    setTimeout(() => {
      intro.classList.add('hide');
      setTimeout(() => { intro.style.display = 'none'; }, 1200);
    }, 2200);
  }
});
// Mode sombre
const darkToggle = document.getElementById('dark-mode-toggle');
if (darkToggle) {
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkToggle.classList.toggle('active');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
  });
  // Initial state
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    darkToggle.classList.add('active');
  }
}
// Scroll to top
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Fond animé avec tsparticles
window.addEventListener('load', () => {
  if (window.tsParticles && document.getElementById('animated-bg')) {
    tsParticles.load('animated-bg', {
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        number: { value: 60 },
        color: { value: ['#007bff', '#28a745', '#f8f9fa'] },
        shape: { type: 'circle' },
        opacity: { value: 0.25 },
        size: { value: { min: 2, max: 5 } },
        move: { enable: true, speed: 1.2, direction: 'none', outModes: { default: 'out' } }
      },
      detectRetina: true
    });
  }
});
// Fun Facts
const funFacts = [
  "J'ai codé mon premier site à 16 ans !",
  "Je peux réparer une voiture et un bug informatique dans la même journée.",
  "Fan de café ☕ et de code tard le soir.",
  "J'ai déjà animé un événement de 500 personnes.",
  "J'adore les challenges et apprendre de nouvelles technos !",
  "Je suis implanté à l'oreille droite, mais j'entends très bien les bonnes idées !",
  "J'ai un faible pour les sites web ultra rapides et bien animés.",
  "Je rêve de bosser sur un projet open source mondial."
];
window.addEventListener('DOMContentLoaded', () => {
  const factsList = document.getElementById('fun-facts-list');
  if (factsList) {
    // Affiche 3 facts aléatoires
    const shuffled = funFacts.sort(() => 0.5 - Math.random());
    shuffled.slice(0, 3).forEach(fact => {
      const li = document.createElement('li');
      li.textContent = fact;
      factsList.appendChild(li);
    });
  }
});
// Effet 3D sur les projets (optionnel, déjà géré par CSS hover)
// Feedback formulaire contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    setTimeout(() => {
      const btn = contactForm.querySelector('button[type="submit"]');
      if (btn) btn.textContent = 'Merci pour votre message !';
      btn && (btn.disabled = true);
    }, 500);
  });
} 