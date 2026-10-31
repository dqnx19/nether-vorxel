export function log(options = {}) {
    switch (options.type) {
        case "log":
            console.log(options.message);
            break;

        case "warning":
            console.log(options.message);
            break;

        case "error":
            console.error(options.message);
            break;

        case "info":
            console.info(options.message);
            break;
    }
}