export function redirect(options = {}) {
    const url = options.url;
    const delay = options.delay;

    setTimeout(() => {
        window.location.href = url;
    }, delay);
}