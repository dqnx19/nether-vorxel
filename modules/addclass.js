export function addClass(options = {}) {
    const classname = options.class;
    const target = options.target;

    const message = [];
    const err = [];

    message.push("vorxel.js - addClass");

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

    if (!target || !classname) {
        return;
    }

    typeof target === "string"
        ? document.querySelector(target).classList.add(classname)
        : target.classList.add(classname);
}