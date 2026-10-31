export function removeId(options = {}) {
    const target = options.target;

    typeof target === "string"
        ? document.querySelector(target).removeAttribute("id")
        : target.removeAttribute("id")
}