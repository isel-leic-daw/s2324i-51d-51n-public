export function createElement(
    /* TODO */
    name: string,
    attrs?: {[key: string]: string | boolean} | undefined,
    ...children: Array<string | HTMLElement | Array<string | HTMLElement>>
): HTMLElement {
    const elem = document.createElement(name)
    for (const key in attrs) {
        const value = attrs[key]
        if (typeof (value) === "string") {
            elem.setAttribute(key, value)
        } else {
            if (value) {
                elem.setAttribute(key, "")
            }
        }
    }
    children.forEach(child => {
        if (typeof child === "string") {
            elem.appendChild(document.createTextNode(child))
        } else if(Array.isArray(child)) {
            child.forEach(it => {
                if(typeof it == "string") {
                    elem.appendChild(document.createTextNode(it))
                }else{
                    elem.appendChild(it)
                }
            })
        } else {
            elem.appendChild(child)
        }
    })
    return elem
}

// Valid usages

createElement("div")
createElement("p", null, "Hello World")
createElement("a", {href: "https://www.typescriptlang.org"}, "typescript")
createElement("button", {disabled: true}, "Press me")
createElement("ul", null, 
    createElement("li", null, "Item 1"),
    createElement("li", null, "Item 2"),
)
const items = [
    "item 1",
    "item 2",
]
createElement("ul", null,
    items.map(item => createElement("li", null, item))
)