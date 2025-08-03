// script/flags.js
document.addEventListener('DOMContentLoaded', function() {
    const usaFlag = document.getElementById('usa-flag');
    const brazilFlag = document.getElementById('brazil-flag');
    const langElements = document.querySelectorAll('.lang');
    const flagContainer = document.querySelector('.flag-container');
    
    // Textos em inglês
    const translations = {
        'title': 'Matheus Felix',
        'about': 'About',
        'skills': 'Skills',
        'projects': 'Projects',
        'contact': 'Contact',
        'occupation': 'Front-End Developer',
        'welcome': 'Welcome to My Portfolio',
        'summary': 'I am a front-end developer focused on creating modern, responsive interfaces that provide a satisfying user experience.',
        'journey1': 'My journey in technology began at age 10, when I developed small games on platforms like Scratch.',
        'journey2': 'Later, recommended by a colleague, I started studying HTML and CSS - the moment I discovered my passion for the field.',
        'journey3': 'Currently, I constantly seek to improve my technical and creative skills, aiming to become a complete full stack developer in the future.',
        'languages': 'Languages I work with',
        'tools': 'Tools and environments I use',
        'view-projects': 'Check Out My Projects',
        'project1-desc': 'Website developed for the school student council',
        'project2-desc': 'Buffet website with digital menu',
        'project3-desc': 'Time management and productivity app',
        'project4-desc': "I'm still working on more projects, and who knows, your project could be here.",
        'contact-me': 'Contact me',
        'email': 'Email:',
        'instagram': 'Instagram:',
        'whatsapp': 'WhatsApp:',
        'footer-about': 'About',
        'footer-about-text': 'Front-End Developer creating modern and responsive interfaces.',
        'footer-links': 'Quick Links',
        'footer-contact': 'Contact',
        'footer-copyright': '© 2023 Matheus Felix. All rights reserved.'
    };

    // Armazena os textos originais em português
    const defaultTexts = {};
    langElements.forEach(el => {
        const key = el.getAttribute('key');
        if (key) {
            // Para elementos que contêm links, preservamos a estrutura
            if (el.querySelector('a')) {
                const linkContent = el.querySelector('a').outerHTML;
                const textBeforeLink = el.textContent.split(':')[0].trim();
                defaultTexts[key] = textBeforeLink + ': ' + linkContent;
            } else {
                defaultTexts[key] = el.textContent;
            }
        }
    });

    // Função para trocar idioma
    function setLanguage(lang) {
        const isEnglish = lang === 'en';
        
        // Atualiza os textos
        langElements.forEach(el => {
            const key = el.getAttribute('key');
            if (key) {
                // Para elementos com links, preservamos a estrutura
                if (el.querySelector('a')) {
                    const linkContent = el.querySelector('a').outerHTML;
                    const newText = (isEnglish ? translations[key] : defaultTexts[key].split(':')[0]) + ': ' + linkContent;
                    el.innerHTML = newText;
                } else {
                    // Para outros elementos, troca o texto normalmente
                    el.textContent = isEnglish ? 
                        (translations[key] || defaultTexts[key]) : 
                        defaultTexts[key];
                }
            }
        });

        // Atualiza as bandeiras
        if (isEnglish) {
            usaFlag.classList.add('active');
            brazilFlag.classList.remove('active');
        } else {
            usaFlag.classList.remove('active');
            brazilFlag.classList.add('active');
        }
        
        // Muda o idioma da página
        document.documentElement.lang = isEnglish ? 'en' : 'pt-br';
        
        // Salva a preferência
        localStorage.setItem('language', lang);
    }

    // Alterna o idioma ao clicar no container
    flagContainer.addEventListener('click', function() {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'en' ? 'pt' : 'en';
        setLanguage(newLang);
    });

    // Verifica se há um idioma salvo no localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        // Define o português como padrão
        setLanguage('pt');
    }
});