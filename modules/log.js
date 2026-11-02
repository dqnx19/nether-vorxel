import { returnReport } from "../internal/returnreport.js"

export function log(options = {}) {
    const type = options.type;
    const message = options.message;

    const types = ["log", "warning", "error", "info"]

    returnReport({
        func: "log",
        errors: [
            !type ? "Log type is missing" : null,
            !types.includes(type) ? "Log type is not an available log type" : null,
            !message ? "Message is missing" : null
        ]
    })

    if (!type || !types.includes(type) || !message) {
        return
    }

    switch (type) {
        case "log":
            console.log(message);
            break;

        case "warning":
            console.log(message);
            break;

        case "error":
            console.error(message);
            break;

        case "info":
            console.info(message);
            break;
    }
}