export function addClass(options = {}) {
    const classname = options.class;
    const target = options.target;

    const message = [];
    const err = [];

    message.push("vorxel.js - addClass");

    if (!classname) {
        err.push("class is missing")
    }

    if (!target) {
        err.push("target is missing");
    }

    message.push("Found" + "" + err.length.toString() + "" + "Errors")

    err.forEach(error => {
        message.push(error)
    })

    console.error(message.join("\n"));

    if (!target || !classname) {
        return;
    }

    typeof target === "string"
        ? document.querySelector(target).classList.add(classname)
        : target.classList.add(classname);
}


export function addId(options) {
    const id = options.id;
    const target = options.target;

    const message = [];
    const err = [];

    message.push("vorxel.js - addId");

    if (!id) {
        err.push("id is missing")
    }

    if (!target) {
        err.push("target is missing");
    }

    message.push("Found" + "" + err.length.toString() + "" + "Errors")

    err.forEach(error => {
        message.push(error)
    })

    console.error(message.join("\n"));

    if (!target || !id) {
        return;
    }

    typeof target === "string"
        ? document.querySelector(target).id = id
        : target.id = id;
}

export function alert(options = {}) {
    window.alert(options.message);
}

export function createElement(options = {}) {
    const element = options.element;
    const parent = options.parent;

    const message = [];
    const err = [];

    message.push("vorxel.js - createElement");

    if (!element) {
        err.push("element name is missing")
    }

    if (!parent) {
        err.push("parent is missing");
    }

    message.push("Found" + "" + err.length.toString() + "" + "Errors")

    err.forEach(error => {
        message.push(error)
    })

    console.error(message.join("\n"));

    if (!parent || !element) {
        return;
    }

    const createdElement = document.createElement(element);

    return typeof parent === "string"
        ? document.querySelector(parent).appendChild(createdElement)
        : parent.appendChild(createdElement);
}

export function getCpu() {
    return navigator.hardwareConcurrency;
}

export function getMemory() {
    return navigator.deviceMemory;
}

export function getProtocol() {
    return location.protocol;
}

export function getURLParam(options = {}) {
    const name = options.name;

    const param = new URLSearchParams(location.search).get(name);
    if (param === null) {
        console.error(`URL Param "${name}" not found in search bar. (vorxel.js - getURLParam)"`);
        return;
    } else {
        return param;
    }
}

export function importCSS(options = {}) {
    const href = options.href;

    return new Promise((resolve) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = () => {
            console.log(`Stylesheet (CSS) loaded: ${href} (vorxel.js - importCSS)`);
            resolve();
        };
        link.onerror = () => {
            console.error(`Stylesheet (CSS) Failed to load: ${href} (vorxel.js - importCSS)`);
            resolve();
        };
        document.head.appendChild(link);
    });
}

export function importJS(options = {}) {
    const src = options.src;
    const defer = options.defer;
    const placement = options.placement;

    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = options.src;
        script.onload = () => {
            console.log(`Script (JS) loaded: ${src} (vorxel.js - importJS)`);
            resolve();
        };
        script.onerror = () => {
            console.error(`Script (JS) Failed to load: ${src} (vorxel.js - importJS)`);
            resolve();
        };

        script.defer = defer ? false : true;

        const target = placement === "head"
            ? document.head
            : document.body;

        target.appendChild(script);
    });
}

export function injectCSS(options = {}) {
    const content = options.content;

    const style = document.createElement('style');
    style.textContent = content;
    document.head.appendChild(style);
}

export function injectJS(options) {
    const content = options.content;
    const placement = options.placement;

    const script = document.createElement('script');
    script.textContent = content;

    const target = placement === "head"
        ? document.head
        : document.body;

    target.appendChild(script);
}

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

export function redirect(options = {}) {
    const url = options.url;
    const delay = options.delay;

    setTimeout(() => {
        window.location.href = url;
    }, delay);
}

export function removeClass(options = {}) {
    const target = options.target;
    const classname = options.classname;

    const message = [];
    const err = [];

    message.push("vorxel.js - removeClass");

    if (!classname) {
        err.push("class is missing")
    }

    if (!target) {
        err.push("target is missing");
    }

    message.push("Found" + "" + err.length.toString() + "" + "Errors")

    err.forEach(error => {
        message.push(error)
    })

    console.error(message.join("\n"));

    if (!target || !classname) return;

    const elements = typeof target === "string"
        ? document.querySelectorAll(target)
        : target instanceof Element
            ? [target]
            : target;

    elements.forEach(element => {
        element.classList.remove(classname);
    });
}

export function removeId(target) {
    if (typeof target === "string") target = document.querySelector(target);
    target.removeAttribute("id");
}

export async function savePDF(options = {}) {
    const { jsPDF } = window.jspdf;
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

export function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export function setAttribute(selector, attribute, content) {
    if (typeof selector === "string") selector = document.querySelector(selector);

    if (!selector) {
        console.error(`Selector not found on page. (vorxel.js - setAttribute)`);
        return;
    }
    selector.setAttribute(attribute, content);
}

export function setClass(target, className) {
    if (typeof target === "string") target = document.querySelector(target);
    target.className = className;
}

export function setContentOfFooter(content) {
    let footer = document.querySelector("footer");

    if (!footer) {
        console.info("FOOTER created because it did not exist. (vorxel.js - setContentOfFooter)");
        footer = document.createElement("footer");
        document.body.appendChild(footer);
    }
    footer.innerHTML = content;
}

export function setContentOfHeader(content) {
    let header = document.querySelector("header");

    if (!header) {
        console.info("HEADER created because it did not exist. (vorxel.js - setContentOfHeader)");
        header = document.createElement("header");
        document.body.appendChild(header);
    }
    header.innerHTML = content;
}

export function setContentOfMain(content) {
    let main = document.querySelector("main");

    if (!main) {
        console.info("MAIN created because it did not exist. (vorxel.js - setContentOfMain)");
        main = document.createElement("main");
        document.body.appendChild(main);
    }
    main.innerHTML = content;
}

export function setFavicon(options = {}) {
    const icon = document.querySelector("link[rel='icon']");
    const touch_icon = document.querySelector("link[rel='apple-touch-icon']");

    if (icon) {
        icon.href = options.url;
    } else {
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = path;
        document.head.appendChild(link);
    }

    if (touch_icon) {
        touch_icon.href = path;
    } else {
        const link = document.createElement("link");
        link.rel = "apple-touch-icon";
        link.href = path;
        document.head.appendChild(link);
    }
}

export function setHTML(selector, content) {
    if (typeof selector === "string") selector = document.querySelector(selector);

    if (!selector) {
        console.error(`Selector not found on page. (vorxel.js - setHTML)`);
        return;
    }
    selector.innerHTML = `${content}`;
}

export function setId(target, id) {
    if (typeof target === "string") target = document.querySelector(target);
    target.id = id;
}

export function setText(selector, content) {
    if (typeof selector === "string") selector = document.querySelector(selector);

    if (!selector) {
        console.error(`Selector not found on page. (vorxel.js - setText)`);
        return;
    }
    selector.innerText = `${content}`;
}

export function setTitle(title) {
    document.title = title;
}

export function subtract(number1, number2) {
    return number1 - number2;
}