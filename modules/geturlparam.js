export function getURLParam(options = {}) {
    const name = options.name;

    const param = new URLSearchParams(location.search).get(name);
    if (param === null) {
        console.error(`URL Param "${name}" not found in search bar. (vorxel.js - getURLParam)"`);
        return;
    } else {
        return param;
    }
}