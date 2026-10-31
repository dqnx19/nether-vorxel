export function importCSS(options = {}) {
    const href = options.href;

    return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = () => {
            console.log(`Stylesheet (CSS) loaded: ${href} (vorxel.js - importCSS)`);
            resolve();
        };
        link.onerror = () => {
            console.error(`Stylesheet (CSS) Failed to load: ${href} (vorxel.js - importCSS)`);
            resolve();
        };
        document.head.appendChild(link);
    });
}