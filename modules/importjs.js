import { returnReport } from "../internal/returnreport.js";

export function importJS(options) {
    if (typeof options === "string") {
        options = JSON.parse(options);
    }

    const importFile = (src, defer, type, async,placement) => {
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

        script.defer = defer ? true : false;
        script.type = type ?? "text/javascript"
        script.async = async ?? false

        const target = placement === "head"
            ? document.head
            : document.body;

        target.appendChild(script);
    }

    if (Array.isArray(options)) {
        options.forEach(option => {
            importFile(option.src, option.defer, option.type, option.async, option.placement)
        });
    } else {
        importFile(options.src, options.defer, options.type, options.async, options.placement)
    }
}