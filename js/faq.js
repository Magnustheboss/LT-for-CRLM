// CRLM LT Clinical Resource - FAQ JavaScript

// Toggle FAQ items
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const toggle = element.querySelector('.faq-toggle');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.style.display = 'none';
            item.previousElementSibling.querySelector('.faq-toggle').textContent = '+';
        }
    });
    
    // Toggle current FAQ
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        toggle.textContent = '−';
    } else {
        answer.style.display = 'none';
        toggle.textContent = '+';
    }
}

// Initialize FAQ on page load
document.addEventListener('DOMContentLoaded', function() {
    // Hide all answers by default
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });
});
