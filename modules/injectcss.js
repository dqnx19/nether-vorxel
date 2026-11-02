import { returnReport } from "../internal/returnreport.js";

export function injectCSS(options = {}) {
    const content = options.content;

    returnReport({
        func: "injectCSS",
        errors: [
            !content ? "CSS Styles content is missing" : null
        ]
    })

    if (!content) {
        return
    }

    const style = document.createElement('style');
    style.textContent = content;
    document.head.appendChild(style);
}