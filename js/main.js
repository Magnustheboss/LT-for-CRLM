// CRLM LT Clinical Resource - Main JavaScript
// Simplified and robust version

// Initialize when DOM is ready
function initApp() {
    console.log('Initializing app...');
    setupHamburgerMenu();
    setupNavigation();
}

// Hamburger menu - simple and robust
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (!hamburger || !navMenu) {
        console.warn('Hamburger menu elements not found');
        return;
    }
    
    // Toggle menu on click
    hamburger.onclick = function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    };
    
    // Close menu when clicking a link
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
        link.onclick = function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        };
    });
    
    // Close menu when clicking outside
    document.onclick = function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.hamburger')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    };
}

// Navigation highlighting
function setupNavigation() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-menu a');
    
    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (currentPath.includes(href)) {
            link.classList.add('active');
        }
    });
}

// Run when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
