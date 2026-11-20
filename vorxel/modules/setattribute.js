export function setAttribute(options = {}) {
    const selector = options.selector;
    const attribute = options.attribute;
    const value = options.value;

    const element = typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

    if (!element) {
        console.error(`Selector ${selector} not found on page. (vorxel.js - setAttribute)`);
        return;
    }

    element.setAttribute(attribute, value);
}