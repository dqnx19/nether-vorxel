import { returnReport } from "../internal/returnreport";

export function importJS(options = {}) {
    const src = options.src;
    const defer = options.defer;
    const placement = options.placement;

    const script = document.createElement('script');
    script.src = src
    script.onerror = () => {
        returnReport({
            func: "importJS",
            errors: [
                `JS Script "${src}" failed to load`
            ]
        })
    };

    script.defer = defer ? false : true;

    const target = placement === "head"
        ? document.head
        : document.body;

    target.appendChild(script);
}