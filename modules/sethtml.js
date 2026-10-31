export function setHTML(options = {}) {
    const selector = options.selector;
    const content = options.content;

    typeof selector === "string"
        ? document.querySelector(selector).innerHTML = content
        : selector.innerHTML = content
}