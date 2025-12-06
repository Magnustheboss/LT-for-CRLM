// CRLM LT Clinical Resource - Search Functionality

// Initialize search on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    
    // If on search results page, get query from URL and perform search
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query) {
        document.getElementById('mainSearchInput').value = decodeURIComponent(query);
        performSearch(query);
    }
});

// Initialize search functionality
function initializeSearch() {
    // Add search form to navigation on all pages
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && !document.querySelector('.nav-search-container')) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'nav-search-container';
        searchContainer.innerHTML = `
            <form class="search-form" onsubmit="handleNavSearchSubmit(event)">
                <input type="text" class="search-input" placeholder="Search..." autocomplete="off">
                <button type="submit" class="search-button">Go</button>
            </form>
        `;
        navMenu.parentNode.insertBefore(searchContainer, navMenu);
    }

    // Add keyboard shortcut (Ctrl+K or Cmd+K) to focus search
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
}

// Handle navigation search form submission
function handleNavSearchSubmit(event) {
    event.preventDefault();
    const query = event.target.querySelector('.search-input').value;
    if (query.trim()) {
        window.location.href = '../pages/search-results.html?q=' + encodeURIComponent(query);
    }
}

// Handle main search form submission
function performSearchSubmit(event) {
    event.preventDefault();
    const searchInput = document.getElementById('mainSearchInput') || document.getElementById('searchInput');
    const query = searchInput.value;
    
    if (query.trim()) {
        // If on search results page, update results
        if (window.location.pathname.includes('search-results.html')) {
            performSearch(query);
            window.history.pushState({}, '', '?q=' + encodeURIComponent(query));
        } else {
            // Otherwise, redirect to search results page
            window.location.href = 'search-results.html?q=' + encodeURIComponent(query);
        }
    }
}

// Perform search and display results
function performSearch(query) {
    const results = performSearch(query);
    const resultsContainer = document.getElementById('searchResults');
    
    if (!resultsContainer) {
        return;
    }

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results-message">
                <h2>No results found</h2>
                <p>We couldn't find any results for "<strong>${escapeHtml(query)}</strong>"</p>
                <p>Try:</p>
                <ul>
                    <li>Using different keywords</li>
                    <li>Checking the spelling</li>
                    <li>Using shorter search terms</li>
                    <li>Browsing the <a href="glossary.html">Glossary</a> for medical terms</li>
                </ul>
            </div>
        `;
        return;
    }

    // Display search summary
    const summary = document.createElement('div');
    summary.className = 'search-summary';
    summary.innerHTML = `<p>Found <strong>${results.length}</strong> result${results.length !== 1 ? 's' : ''} for "<strong>${escapeHtml(query)}</strong>"</p>`;
    resultsContainer.appendChild(summary);

    // Group results by category
    const resultsByCategory = {};
    results.forEach(result => {
        if (!resultsByCategory[result.category]) {
            resultsByCategory[result.category] = [];
        }
        resultsByCategory[result.category].push(result);
    });

    // Display results grouped by category
    Object.keys(resultsByCategory).sort().forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'search-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        resultsByCategory[category].forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            
            const resultTitle = document.createElement('h4');
            resultTitle.className = 'result-title';
            const link = document.createElement('a');
            link.href = result.page;
            link.textContent = result.title;
            resultTitle.appendChild(link);
            resultItem.appendChild(resultTitle);

            const resultContent = document.createElement('p');
            resultContent.className = 'result-content';
            resultContent.textContent = result.content.substring(0, 150) + '...';
            resultItem.appendChild(resultContent);

            const resultMeta = document.createElement('p');
            resultMeta.className = 'result-meta';
            resultMeta.innerHTML = `<a href="${result.page}">View page →</a>`;
            resultItem.appendChild(resultMeta);

            categoryDiv.appendChild(resultItem);
        });

        resultsContainer.appendChild(categoryDiv);
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Highlight search terms in results
function highlightSearchTerms(text, query) {
    const terms = query.toLowerCase().split(/\s+/);
    let highlightedText = text;

    terms.forEach(term => {
        const regex = new RegExp(`(${term})`, 'gi');
        highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
    });

    return highlightedText;
}
