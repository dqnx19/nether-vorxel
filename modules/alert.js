import { returnReport } from "../internal/returnreport.js";

export function alert(options = {}) {
    const message = options.message;

    returnReport({
        func: "alert",
        errors: [
            !message ? "Message is missing" : null
        ]
    })

    if (!message) {
        return
    }

    window.alert(options.message);
}