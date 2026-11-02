import { returnReport } from "../internal/returnreport.js";

export function redirect(options = {}) {
    const url = options.url;
    const delay = options.delay ?? 0;

    returnReport({
        func: "redirect",
        errors: [
            !url ? "URL is missing" : null,
            !Number.isFinite(delay) ? "Delay must be a valid number" : null,
            delay < 0 ? "Delay cannot be negative" : null
        ]
    })

    if (!url || !Number.isFinite(delay) || delay < 0) {
        return
    }

    setTimeout(() => {
        window.location.href = url;
    }, delay);
}