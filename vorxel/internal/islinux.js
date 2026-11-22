import { isNodeJS } from "./isnodejs.js";

export function isLinux() {
    if (!isNodeJS()) {
        return false;
    }

    return process.platform === "linux";
}