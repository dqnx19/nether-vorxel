import { jsPDF } from "../lib/jspdf.js";

export async function savePDF(options = {}) {
    const pdf = new jsPDF();

    options.content.forEach(object => {
        switch (object.type) {
            case "text":
                pdf.setFont(object.font, object.bold ? "bold" : "normal");
                pdf.setFontSize(object.size ?? 12);
                pdf.text(object.text, object.left, object.top);

                break;
        }
    });

    const filename = options.name.endsWith(".pdf")
        ? options.name
        : options.name + ".pdf";

    pdf.save(filename);
}