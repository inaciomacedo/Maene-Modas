const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuButton && menu) {
    const closeMenu = () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
        menu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
    };

    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
        menu.classList.toggle('is-open', !isOpen);
        document.body.classList.toggle('menu-open', !isOpen);
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = new FormData(contactForm);
        const message = [
            `Olá, Maene Modas! Meu nome é ${data.get('nome')}.`,
            `Tenho interesse em: ${data.get('servico')}.`,
            `Detalhes: ${data.get('mensagem')}`
        ].join('\n\n');

        window.open(`https://wa.me/5585985779174?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    });
}

const lightbox = document.querySelector('.lightbox');

if (lightbox) {
    const lightboxImage = lightbox.querySelector('img');
    const closeButton = lightbox.querySelector('.lightbox-close');

    document.querySelectorAll('[data-lightbox]').forEach((item) => {
        item.addEventListener('click', () => {
            lightboxImage.src = item.dataset.lightbox;
            lightboxImage.alt = item.dataset.alt || '';
            lightbox.showModal();
        });
    });

    closeButton.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) lightbox.close();
    });
}
