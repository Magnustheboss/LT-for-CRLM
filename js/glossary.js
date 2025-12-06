// CRLM LT Clinical Resource - Glossary JavaScript

// Initialize glossary on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeGlossarySearch();
});

// Glossary search functionality
function initializeGlossarySearch() {
    // Add search box dynamically
    const glossaryContainer = document.querySelector('.glossary-container');
    if (glossaryContainer) {
        const searchBox = document.createElement('div');
        searchBox.className = 'glossary-search';
        searchBox.innerHTML = `
            <input type="text" id="glossary-search" placeholder="Search glossary..." class="search-input">
            <p class="search-help">Type to filter terms</p>
        `;
        glossaryContainer.parentNode.insertBefore(searchBox, glossaryContainer);
        
        // Add search event listener
        document.getElementById('glossary-search').addEventListener('keyup', filterGlossary);
    }
}

// Filter glossary terms based on search input
function filterGlossary() {
    const searchTerm = document.getElementById('glossary-search').value.toLowerCase();
    const glossaryTerms = document.querySelectorAll('.glossary-term');
    let visibleCount = 0;
    
    glossaryTerms.forEach(term => {
        const title = term.querySelector('h3').textContent.toLowerCase();
        const content = term.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            term.style.display = 'block';
            visibleCount++;
        } else {
            term.style.display = 'none';
        }
    });
    
    // Show message if no results
    const noResults = document.querySelector('.no-results');
    if (visibleCount === 0 && searchTerm !== '') {
        if (!noResults) {
            const message = document.createElement('p');
            message.className = 'no-results';
            message.textContent = 'No terms found matching your search.';
            document.querySelector('.glossary-container').appendChild(message);
        }
    } else if (noResults) {
        noResults.remove();
    }
}
