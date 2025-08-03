// script/flags.js
document.addEventListener('DOMContentLoaded', function() {
    const usaFlag = document.getElementById('usa-flag');
    const brazilFlag = document.getElementById('brazil-flag');
    const langElements = document.querySelectorAll('.lang');
    const flagContainer = document.querySelector('.flag-container');
    
    // Textos em inglês (apenas a parte antes dos links)
    const translations = {
        'title': 'Matheus Felix',
        'about': 'About',
        'skills': 'Skills',
        'projects': 'Projects',
        'contact': 'Contact',
        'occupation': 'Front-End Developer',
        'welcome': 'Welcome',
        'summary': 'I am a front-end developer focused on creating modern, responsive interfaces that provide a satisfying user experience.',
        'journey1': 'Minha trajetória na tecnologia começou aos 10 anos, quando desenvolvia pequenos jogos em plataformas como o Scratch.',
        'journey2': 'Posteriormente, por indicação de um colega, iniciei meus estudos em HTML e CSS — momento em que descobri minha paixão pela área.',
        'journey3': 'Atualmente, busco constantemente aprimorar minhas habilidades técnicas e criativas, com o objetivo de me tornar, futuramente, um desenvolvedor full stack completo.',
        'languages': 'Languages I work with',
        'tools': 'Tools and environments I use',
        'contact-me': 'Contact me',
        'email': 'Email:',
        'instagram': 'Instagram:',
        'whatsapp': 'WhatsApp:'
    };

    // Armazena os textos originais em português (apenas a parte antes dos links)
    const defaultTexts = {};
    langElements.forEach(el => {
        const key = el.getAttribute('key');
        if (key) {
            // Pega apenas o texto antes do link
            const textContent = el.textContent.split(':')[0] + '';
            defaultTexts[key] = textContent;
        }
    });

    // Função para trocar idioma
    function setLanguage(lang) {
        const isEnglish = lang === 'en';
        
        // Atualiza os textos
        langElements.forEach(el => {
            const key = el.getAttribute('key');
            if (key) {
                // Para os campos com links, preservamos a estrutura HTML
                if (key === 'email' || key === 'instagram' || key === 'whatsapp') {
                    const linkContent = el.querySelector('a').outerHTML;
                    const newText = (isEnglish ? translations[key] : defaultTexts[key]) + ' ' + linkContent;
                    el.innerHTML = newText;
                } else {
                    // Para outros campos, troca o texto normalmente
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