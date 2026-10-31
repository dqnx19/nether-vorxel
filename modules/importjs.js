export function importJS(options = {}) {
    const src = options.src;
    const defer = options.defer;
    const placement = options.placement;

    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = options.src;
        script.onload = () => {
            console.log(`Script (JS) loaded: ${src} (vorxel.js - importJS)`);
            resolve();
        };
        script.onerror = () => {
            console.error(`Script (JS) Failed to load: ${src} (vorxel.js - importJS)`);
            resolve();
        };

        script.defer = defer ? false : true;

        const target = placement === "head"
            ? document.head
            : document.body;

        target.appendChild(script);
    });
}