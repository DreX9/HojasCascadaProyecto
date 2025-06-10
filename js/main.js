// Agregar este script antes de cerrar </body> en tus archivos HTML

document.addEventListener('DOMContentLoaded', function() {
    // Crear botón hamburger si no existe
    const header = document.querySelector('header .container .header-content');
    const nav = document.querySelector('nav');
    const menu = document.querySelector('.menu');
    
    if (!document.querySelector('.menu-toggle')) {
        const menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        header.appendChild(menuToggle);
        
        // Funcionalidad del menú móvil
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }
    
    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Aplicar observador a elementos que deben aparecer
    const fadeElements = document.querySelectorAll('.producto-card, .categoria-card, .faq-item, .section-title');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Remover clase de carga después de que la página cargue completamente
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');
    });
    
    // Agregar clase de carga inicial
    document.body.classList.add('loading');
});