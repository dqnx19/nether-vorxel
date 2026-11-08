import { returnReport } from "../internal/returnreport.js";

export function importCSS(options) {
    if (typeof options === "string") {
        options = JSON.parse(options);
    }

    const importFile = (href) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onerror = () => {
            returnReport({
                func: "importCSS",
                errors: [
                    `CSS Stylesheet "${href}" failed to load`
                ]
            })
        };
        document.head.appendChild(link);
    }

    if (Array.isArray(options)) {
        options.forEach(option => {
            importFile(option.href)
        })
    } else {
        importFile(options.href)
    }
};