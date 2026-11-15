import { marked } from "../lib/marked.js"

export function parseMarkdown(options = {}) {
    const input = options.input;

    const output = marked.parse(input);
    return output;
}