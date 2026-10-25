import { setFavicon, importCSS, importJS, setContentOfHeader, setContentOfMain, setContentOfFooter, scrollUp, setTitle, setAttribute } from "./vorxel.js";

window.showHome = showHome
window.showFunctions = showFunctions
window.showAbout = showAbout

await importCSS("https://web-ui.nether.click/fonts/lexend/lexend.css");

await importCSS("https://web-ui.nether.click/components/css/all.css");
await importCSS("https://web-ui.nether.click/components/css/app-drawer.css");
await importCSS("https://web-ui.nether.click/components/css/body.css");
await importCSS("https://web-ui.nether.click/components/css/copy-box.css");
await importCSS("https://web-ui.nether.click/components/css/cards.css");
await importCSS("https://web-ui.nether.click/components/css/footer.css");
await importCSS("https://web-ui.nether.click/components/css/grouped-list.css");
await importCSS("https://web-ui.nether.click/components/css/header.css");
await importCSS("https://web-ui.nether.click/components/css/headings.css");
await importCSS("https://web-ui.nether.click/components/css/main.css");
await importCSS("https://web-ui.nether.click/components/css/section.css");
await importCSS("https://web-ui.nether.click/components/css/tabs.css");

await importJS({
    src: "https://nether.click/js/import-app-drawer.js"
});

await importJS({
    src: "https://web-ui.nether.click/components/js/all.js"
});

await importJS({
    src: "https://web-ui.nether.click/components/js/app-drawer.js"
});

await importJS({
    src: "https://web-ui.nether.click/components/js/tabs.js"
});

await importJS({
    src: "https://web-ui.nether.click/components/js/headings.js"
});

await importJS({
    src: "lib/marked.js"
})

// await setFavicon("img/icons/favicon.png");

await setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button class="logo" onclick="showHome()" title="Displays home page">
        <img src="img/icons/favicon.png" alt="vorxel.js Logo">
    </button>
`)

await setContentOfFooter(`
    <button onclick="showHome()" title="Displays Home Page">
        <img src="img/icons/favicon.png" alt="vorxel.js Logo">
    </button>
    <button onclick="showFunctions()" title="Displays Functions page">
        <img src="img/links-icons/functions.svg" alt="Functions page icon">
    </button>
    <button onclick="showAbout()" title="Displays About page">
        <img src="img/links-icons/about.svg" alt="About page icon">
    </button>
`)

await setAttribute("html", "lang", "en")

marked.use({
    renderer: {
        code({ text, lang }) {
            const escapeHtml = (text) => {
                return text
                    .replaceAll("&", "&amp;")
                    .replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
                    .replaceAll('"', "&quot;")
                    .replaceAll("'", "&#039;");
            };

            return `
                <div class="copy-box">
                    <div class="head">
                        <span class="language">${escapeHtml(lang || "")}</span>
                    </div>
                    <div class="body">
                        <div class="code">${escapeHtml(text)}</div>
                    </div>
                </div>
            `;
        }
    }
});

async function showHome() {
    scrollUp()
    setTitle("vorxel.js")
    setContentOfMain(`
    `)

    nwui.headings.create({
        parent: "main",
        level: 1,
        content: "vorxel.js"
    });

    nwui.cards.create({
        parent: "main",
        id: "links"
    })

    const db = await fetch("json/pages.json").then(r => r.json());

    db.forEach(element => {
        nwui.cards.addCard({
            onclick: element.func,
            image: `img/links-icons/${element.techname}.svg`,
            heading: `${element.name}`,
            parent: "#links"
        })
    });

}

async function showFunctions() {
    scrollUp();
    setTitle("Functions - vorxel.js");
    setContentOfMain("");

    const functions = await fetch("db.json").then(r => r.json());

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "Functions"
    })
    nwui.tabs.create({
        parent: "main",
        id: "functions"
    })

    for (const func of functions) {
        const readme = await fetch(
            `readme/${func.toLowerCase()}.md`
        ).then(r => r.text());

        nwui.tabs.addTab({
            title: func,
            parent: "#functions",
            innerHTML: marked.parse(readme)
        });
    }
}

async function showAbout() {
    scrollUp();
    setTitle("About - vorxel.js");

    const about = await fetch("readme.md").then(r => r.text());
    setContentOfMain(marked.parse(about))
}


showHome()