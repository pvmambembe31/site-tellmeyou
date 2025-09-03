document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os cards de depoimento da página
    const testimonialCards = document.querySelectorAll('.testimonial-card-material');

    // Verifica se existem cards na página para evitar erros
    if (testimonialCards.length > 0) {
        
        // Opções para o IntersectionObserver:
        // rootMargin: '0px 0px -100px 0px' -> a animação começa 100px antes do elemento aparecer na tela
        // threshold: 0 -> a animação começa assim que qualquer parte do elemento se torna visível
        const options = {
            rootMargin: '0px 0px -100px 0px',
            threshold: 0
        };

        // O IntersectionObserver é uma API moderna do navegador que nos permite
        // observar quando um elemento entra ou sai da tela (viewport).
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Se o card está visível na tela...
                if (entry.isIntersecting) {
                    // ...adiciona a classe 'is-visible', que ativa a nossa animação CSS.
                    entry.target.classList.add('is-visible');
                    
                    // Depois que a animação acontece uma vez, paramos de "observar" este card
                    // para economizar recursos do navegador.
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Pede ao observer para observar cada um dos cards de depoimento.
        testimonialCards.forEach(card => {
            observer.observe(card);
        });
    }
});