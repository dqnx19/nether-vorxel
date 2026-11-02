import { returnReport } from "../internal/returnreport.js";

export function addId(options) {
    const id = options.id;
    const target = options.target;

    returnReport({
        func: "addId",
        errors: [
            !id ? "ID is missing" : null,
            !target ? "Target is missing" : null
        ]
    })

    if (!target || !id) {
        return;
    }

    typeof target === "string"
        ? document.querySelector(target).id = id
        : target.id = id;
}