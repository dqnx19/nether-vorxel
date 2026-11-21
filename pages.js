import * as vorxel from "./vorxel/vorxel.js";
import * as Headings from "https://web-ui.nether.click/components/js/headings.js"
import * as Cards from "https://web-ui.nether.click/components/js/cards.js"
import * as Tabs from "https://web-ui.nether.click/components/js/tabs.js"

window.showHome = showHome
window.showFunctions = showFunctions
window.showAbout = showAbout

vorxel.importCSS([
    { href: "https://web-ui.nether.click/fonts/lexend/lexend.css" },
    { href: "https://web-ui.nether.click/components/css/app.css" },
    { href: "https://web-ui.nether.click/components/css/app-drawer.css" },
    { href: "https://web-ui.nether.click/components/css/copy-box.css" },
    { href: "https://web-ui.nether.click/components/css/cards.css" },
    { href: "https://web-ui.nether.click/components/css/footer.css" },
    { href: "https://web-ui.nether.click/components/css/grouped-list.css" },
    { href: "https://web-ui.nether.click/components/css/header.css" },
    { href: "https://web-ui.nether.click/components/css/headings.css" },
    { href: "https://web-ui.nether.click/components/css/main.css" },
    { href: "https://web-ui.nether.click/components/css/section.css" },
    { href: "https://web-ui.nether.click/components/css/tabs.css" }
])

vorxel.setFavicon({ url: "img/icons/favicon.png" });

vorxel.createElement([
    {
        element: "header",
        parent: document.body
    },
    {
        element: "main",
        parent: document.body
    },
    {
        element: "footer",
        parent: document.body
    }
]);

vorxel.setHTML({
    selector: "header",
    content: `
        <div class="app-drawer-wrapper"></div>
        <button class="logo" onclick="showHome()" title="Displays home page">
            <img src="img/icons/favicon.png" alt="vorxel.js Logo">
        </button>
`});

vorxel.setHTML({
    selector: "footer",
    content: `
    <button onclick="showHome()" title="Displays Home Page">
        <img src="img/icons/favicon.png" alt="vorxel.js Logo">
    </button>
    <button onclick="showFunctions()" title="Displays Functions page">
        <img src="img/links-icons/functions.svg" alt="Functions page icon">
    </button>
    <button onclick="showAbout()" title="Displays About page">
        <img src="img/links-icons/about.svg" alt="About page icon">
    </button>
`});

vorxel.setAttribute({
    selector: "html",
    attribute: "lang",
    value: "en"
});

const pages = await fetch("json/pages.json").then(r => r.json());

async function showHome() {
    vorxel.scrollUp()
    vorxel.setTitle({ title: "Vorxel.js" })
    vorxel.setHTML({ selector: "main", content: "" })

    Headings.create({
        parent: "main",
        level: 1,
        content: "vorxel.js"
    });

    Cards.create({
        parent: "main",
        id: "links",
        cards: []
    })

    pages.forEach(element => {
        Cards.addCard({
            onclick: element.func,
            image: `img/links-icons/${element.techname}.svg`,
            heading: `${element.name}`,
            parent: "links"
        })
    });

}

async function showFunctions() {
    vorxel.scrollUp();
    vorxel.setTitle({ title: "Functions - vorxel.js" });
    vorxel.setHTML({ selector: "main", content: "" });

    const functions = await fetch("db.json").then(r => r.json());

    Headings.create({
        level: 1,
        parent: "main",
        content: "Functions"
    })

    Tabs.create({
        parent: "main",
        id: "functions",
        tabs: []
    })

    for (const func of functions) {
        const readme = await fetch(
            `vorxel/readme/${func.toLowerCase()}.md`
        ).then(r => r.text());

        Tabs.addTab({
            title: func,
            parent: "functions",
            innerHTML: vorxel.parseMarkdown({ input: readme })
        });
    }
}

const readme = await fetch("readme.md").then(text => text.text());

async function showAbout() {
    vorxel.scrollUp();
    vorxel.setTitle({ title: "About - vorxel.js" });
    vorxel.setHTML({ selector: "main", content: vorxel.parseMarkdown({ input: readme }) })
}

showHome()
