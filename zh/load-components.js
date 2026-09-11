// Shared script for loading navigation and footer components (Chinese version)
// Used by Chinese pages to avoid code duplication

function renderEmailLinks(container = document) {
    container.querySelectorAll('[data-email-user][data-email-domain]').forEach(link => {
        const address = `${link.dataset.emailUser}@${link.dataset.emailDomain}`;
        link.href = `mailto:${address}`;
        link.textContent = address;
    });
}

renderEmailLinks();

// Load Chinese navigation
fetch('navigation-zh.html')
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

// Load Chinese footer
fetch('footer-zh.html')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const footer = doc.querySelector('footer');
        
        document.getElementById('footer-placeholder').appendChild(footer);
        renderEmailLinks(footer);
    });
