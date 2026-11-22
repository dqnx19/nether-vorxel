import { isNodeJS } from "../internal/isnodejs.js"
import { returnReport } from "../internal/returnreport.js"
import { isLinux } from "../internal/islinux.js"

export async function reboot(options = {}) {
    const delay = options.delay ?? 0;

    if (!isNodeJS()) {
        returnReport({
            func: "reboot",
            errors: [
                "Not running in Node.js"
            ]
        })

        return;
    }

    const { exec } = await import("node:child_process");

    if (isLinux()) {
        const time = delay === 0
            ? "now"
            : `+${Math.ceil(delay / 60)}`;

        exec(`shutdown -r ${time}`);
    }
}