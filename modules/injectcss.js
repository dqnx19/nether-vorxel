export function injectCSS(options = {}) {
    const content = options.content;

    const style = document.createElement('style');
    style.textContent = content;
    document.head.appendChild(style);
}