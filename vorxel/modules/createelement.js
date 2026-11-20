import { returnReport } from "../internal/returnreport.js";

export function createElement(options = {}) {
    if (typeof options === "string") {
        options = JSON.parse(options);
    }

    const newElement = (element, parent) => {
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

        typeof parent === "string"
            ? document.querySelector(parent).appendChild(createdElement)
            : parent.appendChild(createdElement);

        return createdElement;
    }

    if (Array.isArray(options)) {
        return options.map(option =>
            newElement(option.element, option.parent)
        );
    } else {
        return newElement(options.element, options.parent);
    }
}
