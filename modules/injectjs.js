export function injectJS(options) {
    const content = options.content;
    const placement = options.placement;

    const script = document.createElement('script');
    script.textContent = content;

    const target = placement === "head"
        ? document.head
        : document.body;

    target.appendChild(script);
}