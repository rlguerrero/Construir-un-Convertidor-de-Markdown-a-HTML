JS
function convertMarkdown() {
    let markdown = document.getElementById("markdown-input").value;

    // Encabezados
    markdown = markdown.replace(/^\s*### (.*)$/gm, "<h3>$1</h3>");
    markdown = markdown.replace(/^\s*## (.*)$/gm, "<h2>$1</h2>");
    markdown = markdown.replace(/^\s*# (.*)$/gm, "<h1>$1</h1>");

    // Blockquotes
    markdown = markdown.replace(/^\s*> (.*)$/gm, "<blockquote>$1</blockquote>");

    // Imágenes
    markdown = markdown.replace(
        /!\[(.*?)\]\((.*?)\)/g,
        '<img alt="$1" src="$2">'
    );

    // Enlaces
    markdown = markdown.replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2">$1</a>'
    );

    // Negrita
    markdown = markdown.replace(
        /\*\*(.*?)\*\*|__(.*?)__/g,
        (match, p1, p2) => `<strong>${p1 || p2}</strong>`
    );

    // Cursiva
    markdown = markdown.replace(
        /\*(.*?)\*|_(.*?)_/g,
        (match, p1, p2) => `<em>${p1 || p2}</em>`
    );

    return markdown;
}

const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {
    const convertedHTML = convertMarkdown();

    // Mostrar HTML en bruto
    htmlOutput.textContent = convertedHTML;

    // Renderizar HTML
    preview.innerHTML = convertedHTML;
});
