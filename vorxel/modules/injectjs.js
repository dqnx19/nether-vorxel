import { returnReport } from "../internal/returnreport.js"

export function injectJS(options) {
    const content = options.content;
    const placement = options.placement;

    returnReport({
        func: "injectJS",
        errors: [
            !content ? "JS Script content is missing" : null
        ]
    })

    if (!content) {
        return;
    }

    const script = document.createElement('script');
    script.textContent = content;

    const target = placement === "head"
        ? document.head
        : document.body;

    target.appendChild(script);
}