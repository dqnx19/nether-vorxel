export function setFavicon(options = {}) {
    const url = options.url;

    if (!url) {
        console.error("URL is missing. (vorxel.js - setFavicon)");
        return;
    }

    const setIcon = (rel) => {
        let icon = document.querySelector(`link[rel='${rel}']`);

        if (!icon) {
            icon = document.createElement("link");
            icon.rel = rel;
            document.head.appendChild(icon);
        }

        icon.href = url;
    };

    setIcon("icon");
    setIcon("apple-touch-icon");
}