import { isNodeJS } from "./isnodejs.js";

export function isMacOS() {
    if (!isNodeJS()) {
        return false;
    }

    return process.platform === "darwin";
}