import { returnReport } from "../internal/returnreport.js";

export function createElement(options = {}) {
    const element = options.element;
    const parent = options.parent;

    returnReport({
        func: "createElement",
        errors: [
            !element ? "Element name is missing" : null,
            !parent ? "Parent is missing" : null
        ]

    })

    if (!parent || !element) {
        return;
    }

    const createdElement = document.createElement(element);

    return typeof parent === "string"
        ? document.querySelector(parent).appendChild(createdElement)
        : parent.appendChild(createdElement);
}