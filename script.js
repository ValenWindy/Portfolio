
// Dinamismo

$(document).ready(function(){
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

// Idioma
function changeLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.getAttribute('data-' + lang);
    });
}

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.navbar, .card, .progress-bar, #home').forEach(element => {
        element.classList.toggle('dark-mode');
    });

    // Guardar la preferencia en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Cargar la preferencia de tema del usuario al cargar la página
window.onload = function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelectorAll('.navbar, .card, .progress-bar, #home').forEach(element => {
            element.classList.add('dark-mode');
        });
    }
}


const userLang = navigator.language || navigator.userLanguage;
const initialLang = userLang.startsWith('es') ? 'es' : 'en';
changeLanguage(initialLang);
