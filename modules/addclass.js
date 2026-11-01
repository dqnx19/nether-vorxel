import { returnReport } from "../internal/returnreport"

export function addClass(options = {}) {
    const classname = options.class;
    const target = options.target;

    returnReport({
        func: "addClass",
        errors: [
            !classname ? "Class is missing" : null,
            !target ? "Target is missing" : null,
            !document.querySelector(target) || target ? "Target not found in DOM" : null
        ]
    })

    if (!target || !classname) {
        return;
    }

    typeof target === "string"
        ? document.querySelector(target).classList.add(classname)
        : target.classList.add(classname);
}