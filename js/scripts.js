document.addEventListener('DOMContentLoaded', function() {
    
    // Script para o carrossel de depoimentos
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const prevButton = document.getElementById('prevTestimonial');
    const nextButton = document.getElementById('nextTestimonial');

    // Verifica se os elementos do carrossel existem na página atual
    if (testimonialsContainer && prevButton && nextButton) {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        
        if (testimonialCards.length > 0) {
            // Calcula a largura do card + gap (margem)
            const cardStyle = window.getComputedStyle(testimonialCards[0]);
            const cardMarginRight = parseFloat(cardStyle.marginRight) || 30; // 30 é o valor do 'gap'
            const cardWidth = testimonialCards[0].offsetWidth + cardMarginRight;

            let currentScrollPosition = 0;
            let autoScrollInterval;

            const updateScroll = () => {
                testimonialsContainer.scrollTo({
                    left: currentScrollPosition,
                    behavior: 'smooth'
                });
            };

            const moveToNext = () => {
                const maxScroll = testimonialsContainer.scrollWidth - testimonialsContainer.clientWidth;
                if (currentScrollPosition >= maxScroll - 1) { // -1 para evitar problemas de arredondamento
                    currentScrollPosition = 0; // Volta para o início
                } else {
                    currentScrollPosition += cardWidth;
                }
                updateScroll();
            };

            const moveToPrev = () => {
                const maxScroll = testimonialsContainer.scrollWidth - testimonialsContainer.clientWidth;
                if (currentScrollPosition <= 0) {
                    currentScrollPosition = maxScroll; // Vai para o final
                } else {
                    currentScrollPosition -= cardWidth;
                }
                updateScroll();
            };

            const startAutoScroll = () => {
                stopAutoScroll(); // Garante que não haja múltiplos intervalos rodando
                autoScrollInterval = setInterval(moveToNext, 5000); // Rola a cada 5 segundos
            };

            const stopAutoScroll = () => {
                clearInterval(autoScrollInterval);
            };

            nextButton.addEventListener('click', () => {
                moveToNext();
                stopAutoScroll(); // Para a rolagem automática quando o usuário interage
            });

            prevButton.addEventListener('click', () => {
                moveToPrev();
                stopAutoScroll(); // Para a rolagem automática quando o usuário interage
            });

            // Inicia a rolagem automática
            startAutoScroll();
        }
    }

    // Script para o formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio real do formulário
            
            // Aqui você pode adicionar uma lógica de envio de formulário no futuro
            // Por enquanto, apenas mostra um alerta e limpa os campos.
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
});