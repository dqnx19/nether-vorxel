import { returnReport } from "../internal/returnreport.js";

export function importCSS(options = {}) {
    const href = options.href;

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
};