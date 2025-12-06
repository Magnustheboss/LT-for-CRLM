// CRLM LT Clinical Resource - Main JavaScript

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTableEnhancements();
    initializeScrollBehavior();
    initializeAccessibility();
});

// Navigation Enhancement
function initializeNavigation() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page
        if (link.getAttribute('href') === currentPage || 
            (currentPage.includes(link.getAttribute('href')) && link.getAttribute('href') !== '../index.html')) {
            link.classList.add('active');
        }
    });
}

// Table Enhancement - Add sorting capability
function initializeTableEnhancements() {
    const tables = document.querySelectorAll('.data-table');
    
    tables.forEach(table => {
        // Add hover effects (already in CSS, but can add JS interactions here)
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f5f5f5';
            });
            row.addEventListener('mouseleave', function() {
                // Reset to original color (handled by CSS)
                this.style.backgroundColor = '';
            });
        });
    });
}

// Smooth Scroll Behavior
function initializeScrollBehavior() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Accessibility Enhancements
function initializeAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ARIA labels to key sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        if (!section.id) {
            section.id = `section-${index}`;
        }
    });
    
    // Keyboard navigation for cards
    const cards = document.querySelectorAll('.nav-card, .stat-card');
    cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const link = this.getAttribute('href');
                if (link) {
                    window.location.href = link;
                }
            }
        });
    });
}

// Print Functionality
function printPage() {
    window.print();
}

// Copy to Clipboard Utility
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Search Functionality (for future enhancement)
function searchContent(query) {
    const sections = document.querySelectorAll('.section');
    let results = [];
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            results.push(section);
        }
    });
    
    return results;
}

// Calculate Oslo Score (Interactive Tool)
function calculateOsloScore() {
    const score = {
        tumorSize: document.getElementById('tumor-size')?.checked ? 1 : 0,
        progressiveDisease: document.getElementById('progressive-disease')?.checked ? 1 : 0,
        ceaLevel: document.getElementById('cea-level')?.checked ? 1 : 0,
        timeInterval: document.getElementById('time-interval')?.checked ? 1 : 0
    };
    
    const totalScore = score.tumorSize + score.progressiveDisease + score.ceaLevel + score.timeInterval;
    
    let riskCategory = '';
    if (totalScore <= 2) {
        riskCategory = 'Favorable';
    } else if (totalScore === 3) {
        riskCategory = 'Intermediate';
    } else {
        riskCategory = 'Unfavorable';
    }
    
    return { totalScore, riskCategory, details: score };
}

// Dark Mode Toggle (Optional Feature)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load Dark Mode Preference
function loadDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Table of Contents Generator
function generateTableOfContents() {
    const headings = document.querySelectorAll('h2, h3');
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>Contents</h3><ul>';
    
    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
        
        const level = heading.tagName === 'H2' ? 'toc-h2' : 'toc-h3';
        const li = document.createElement('li');
        li.className = level;
        li.innerHTML = `<a href="#${heading.id}">${heading.textContent}</a>`;
        toc.appendChild(li);
    });
    
    toc.innerHTML += '</ul>';
    return toc;
}

// Export Page as PDF (requires external library)
function exportAsPDF() {
    alert('PDF export feature coming soon. Please use your browser\'s print function (Ctrl+P or Cmd+P) and select "Save as PDF".');
}

// Utility: Get URL Parameters
function getURLParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Analytics Placeholder
function trackPageView(pageName) {
    // Placeholder for analytics tracking
    console.log(`Page viewed: ${pageName}`);
}

// Initialize Dark Mode on Load
window.addEventListener('load', loadDarkModePreference);

// Log page load for debugging
console.log('CRLM LT Clinical Resource loaded successfully');
