// Fonction pour définir la langue
function setLanguage(lang) {
    // Vérifier si la langue existe, sinon fallback sur 'en'
    if (!translations[lang]) lang = 'en';

    // Sauvegarder la préférence
    localStorage.setItem('kerit_lang', lang);

    // Récupérer tous les éléments à traduire
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // C'est ici le changement : innerHTML au lieu de innerText
            element.innerHTML = translations[lang][key];
        }
    });

    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang;
}

// Au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const userLang = localStorage.getItem('kerit_lang') || navigator.language.slice(0, 2);
    setLanguage(userLang === 'fr' ? 'fr' : 'en');
});