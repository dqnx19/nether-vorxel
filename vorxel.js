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

export function removeId(options = {}) {
    const target = options.target;

    typeof target === "string"
        ? document.querySelector(target).removeAttribute("id")
        : target.removeAttribute("id")
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

export function scrollUp(options = {}) {
    const smooth = options.smooth;

    window.scrollTo({
        top: 0,
        behavior: smooth ? "smooth" : "instant"
    });
}

export function setAttribute(options = {}) {
    const selector = options.selector;
    const attribute = options.attribute;
    const value = options.value;

    const element = typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

    if (!element) {
        console.error(`Selector ${selector} not found on page. (vorxel.js - setAttribute)`);
        return;
    }

    element.setAttribute(attribute, value);
}

export function setClass(options = {}) {
    const target = options.target;
    const classname = options.classname;

    typeof target === "string"
        ? document.querySelector(target).className = classname
        : target.className = classname
}

export function setFavicon(options = {}) {
    const url = options.url;

    if (!url) {
        console.error("URL is missing. (vorxel.js - setFavicon)");
        return;
    }

    const setIcon = (rel) => {
        let icon = document.querySelector(`link[rel='${rel}']`);

        if (!icon) {
            icon = document.createElement("link");
            icon.rel = rel;
            document.head.appendChild(icon);
        }

        icon.href = url;
    };

    setIcon("icon");
    setIcon("apple-touch-icon");
}

export function setHTML(options) {
    const selector = options.selector;
    const content = options.content;

    typeof selector === "string"
        ? document.querySelector(selector).innerHTML = content
        : selector.innerHTML = content
}

export function setId(options = {}) {
    const target = options.target;
    const id = options.id;
    
    typeof target === "string"
        ? document.querySelector(target).id = id
        : target.id = id;
}

export function setText(options = {}) {
    const selector = options.selector;
    const content = options.content;

    if (!selector) {
        console.error(`Selector ${selector} not found on page. (vorxel.js - setText)`);
        return;
    }
    
    typeof selector === "string"
        ? document.querySelector(selector).textContent = content
        : selector.textContent = content
}

export function setTitle(title) {
    document.title = title;
}

export function subtract(number1, number2) {
    return number1 - number2;
}