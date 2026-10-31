export function removeClass(options = {}) {
    const target = options.target;
    const classname = options.classname;

    const message = [];
    const err = [];

    message.push("vorxel.js - removeClass");

    if (!classname) {
        err.push("class is missing")
    }

    if (!target) {
        err.push("target is missing");
    }

    message.push("Found" + "" + err.length.toString() + "" + "Errors")

    err.forEach(error => {
        message.push(error)
    })

    console.error(message.join("\n"));

    if (!target || !classname) return;

    const elements = typeof target === "string"
        ? document.querySelectorAll(target)
        : target instanceof Element
            ? [target]
            : target;

    elements.forEach(element => {
        element.classList.remove(classname);
    });
}