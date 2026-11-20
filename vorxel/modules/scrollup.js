export function scrollUp(options = {}) {
    const smooth = options.smooth;

    window.scrollTo({
        top: 0,
        behavior: smooth ? "smooth" : "instant"
    });
}