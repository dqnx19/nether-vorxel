export function returnReport(options = {}) {
    const func = options.func ?? "Unknown";
    const errors = options.errors ?? [];
    const warnings = options.warnings ?? [];

    const output = [
        "%cVorxel.js",
        `%cFunction: ${func}`,
        "",
        `%c${errors.length} errors`,
        ...errors.map(item => `%c${item}`),
        "",
        `%c${warnings.length} warnings`,
        ...warnings.map(item => `%c${item}`)
    ];

    const styles = [
        "font-weight: bold;",
        "color: inherit;",
        "color: red; font-weight: bold;",
        ...errors.map(() => "color: red;"),
        "color: orange; font-weight: bold;",
        ...warnings.map(() => "color: orange;")
    ];

    console.log(output.join("\n"), ...styles);
}