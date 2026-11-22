export function isNodeJS() {
    return typeof process !== "undefined" && process.versions?.node !== undefined
}