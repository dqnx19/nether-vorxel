export function createElement(options = {}) {
    const element = options.element;
    const parent = options.parent;

    const message = [];
    const err = [];

    message.push("vorxel.js - createElement");

    if (!element) {
        err.push("element name is missing")
    }

    if (!parent) {
        err.push("parent is missing");
    }

    message.push("Found" + "" + err.length.toString() + "" + "Errors")

    err.forEach(error => {
        message.push(error)
    })

    console.error(message.join("\n"));

    if (!parent || !element) {
        return;
    }

    const createdElement = document.createElement(element);

    return typeof parent === "string"
        ? document.querySelector(parent).appendChild(createdElement)
        : parent.appendChild(createdElement);
}