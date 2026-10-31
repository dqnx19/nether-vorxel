export function setText(options = {}) {
    const selector = options.selector;
    const content = options.content;

    if (!selector) {
        console.error(`Selector ${selector} not found on page. (vorxel.js - setText)`);
        return;
    }
    
    typeof selector === "string"
        ? document.querySelector(selector).textContent = content
        : selector.textContent = content
}