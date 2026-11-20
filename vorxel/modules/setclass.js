export function setClass(options = {}) {
    const target = options.target;
    const classname = options.classname;

    typeof target === "string"
        ? document.querySelector(target).className = classname
        : target.className = classname
}