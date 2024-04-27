// Selecciona el botón de hamburguesa
const hamburger = document.querySelector('.hamburger');
// Selecciona el contenedor de las opciones de navegación
const navLinks = document.querySelector('.nav-links');

// Agrega un evento de clic al botón de hamburguesa
hamburger.addEventListener('click', () => {
    // Cuando se hace clic en el botón de hamburguesa, alternamos la clase 'open' en el contenedor de las opciones de navegación
    navLinks.classList.toggle('open');
});


// Modo oscuro

// Función para cambiar el tema
function switchTheme(theme) {
    document.body.dataset.theme = theme; // Establecer el tema en el body
    localStorage.setItem('theme', theme); // Guardar el tema en localStorage
}

// Función para inicializar el tema
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        switchTheme(savedTheme); // Aplicar el tema guardado en localStorage
    } else {
        // Si no hay tema guardado, aplicar el tema por defecto (claro o oscuro)
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        switchTheme(prefersDarkMode ? 'dark' : 'light');
    }
}

// Escuchar el evento DOMContentLoaded para inicializar el tema cuando la página se cargue completamente
document.addEventListener('DOMContentLoaded', initTheme);

// Escuchar el evento de clic en el botón de cambio de tema y cambiar el tema correspondientemente
const darkModeSwitch = document.querySelector('.darkModeSwitch');
darkModeSwitch.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    switchTheme(newTheme);
});


// Botón de volver arriba
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cambio de idioma
const languageSwitch = document.querySelector('.language-switch');

languageSwitch.addEventListener('click', () => {
    toggleLanguage(); // Función para cambiar de idioma
});

function toggleLanguage() {
    const englishTexts = document.querySelectorAll('.english');
    const spanishTexts = document.querySelectorAll('.spanish');

    englishTexts.forEach(text => text.style.display = text.style.display === 'none' ? 'block' : 'none');
    spanishTexts.forEach(text => text.style.display = text.style.display === 'none' ? 'block' : 'none');
}
