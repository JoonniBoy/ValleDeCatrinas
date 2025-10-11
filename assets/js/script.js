document.addEventListener('DOMContentLoaded', () => {

    // 1. Animaciones al hacer scroll (Intersection Observer)
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar el elemento una vez que es visible
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // El elemento se considera visible cuando el 10% está en pantalla
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 2. Añadir sombra a la cabecera al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) { // Añade la clase si se ha desplazado más de 10px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===== CÓDIGO PARA LOS BOTONES DE MAPA =====
    const locationButtons = document.querySelectorAll('.card-button');

    locationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const coords = button.dataset.coords; // Obtiene las coordenadas
            if (coords) {
                // CONSTRUYE LA URL CORRECTA DE GOOGLE MAPS 🗺️
                const mapUrl = `https://www.google.com/maps/search/?api=1&query=${coords}`;
                
                // Abre la URL en una nueva pestaña
                window.open(mapUrl, '_blank');
            } else {
                console.error('No se encontraron coordenadas en el botón.');
            }
        });
    });
});
