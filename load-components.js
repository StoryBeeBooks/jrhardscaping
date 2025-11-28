// Shared script for loading navigation and footer components
// Used by service pages to avoid code duplication

// Load navigation
fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const header = doc.querySelector('header');
        const script = doc.querySelector('script');
        
        document.getElementById('nav-placeholder').appendChild(header);
        
        // Execute the navigation script
        if (script) {
            eval(script.textContent);
        }
    });

// Load footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const footer = doc.querySelector('footer');
        
        document.getElementById('footer-placeholder').appendChild(footer);
    });
