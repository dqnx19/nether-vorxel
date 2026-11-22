import { isNodeJS } from "./isnodejs.js";

export function isWindows() {
    if (!isNodeJS()) {
        return false;
    }

    return process.platform === "win32";
}