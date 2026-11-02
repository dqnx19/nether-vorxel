import { returnReport } from "../internal/returnreport.js"

export function getURLParam(options = {}) {
    const name = options.name;

    const param = new URLSearchParams(location.search).get(name);
    
    returnReport({
        func: "getURLParam",
        errors: [
            !name ? "Param name is missing" : null,
            !param ? `Param "${name}" not found in location.search` : null
        ]
    })

    if (param === null) {
        return;
    } else {
        return param;
    }
}