export function setId(options = {}) {
    const target = options.target;
    const id = options.id;
    
    typeof target === "string"
        ? document.querySelector(target).id = id
        : target.id = id;
}