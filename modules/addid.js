export function addId(options) {
    const id = options.id;
    const target = options.target;

    const message = [];
    const err = [];

    message.push("vorxel.js - addId");

    if (!id) {
        err.push("id is missing")
    }

    if (!target) {
        err.push("target is missing");
    }

    message.push("Found" + "" + err.length.toString() + "" + "Errors")

    err.forEach(error => {
        message.push(error)
    })

    console.error(message.join("\n"));

    if (!target || !id) {
        return;
    }

    typeof target === "string"
        ? document.querySelector(target).id = id
        : target.id = id;
}