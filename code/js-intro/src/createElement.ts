export function createElement(
  name: string,
  attrs?: { [key: string]: string | boolean } | undefined,
  ...children: Array<string | number | HTMLElement | Array<string | number | HTMLElement>>
): HTMLElement {
  const elem = document.createElement(name);
  for (const key in attrs) {
    const value = attrs[key];
    if (typeof value === 'string') {
      elem.setAttribute(key, value);
    } else {
      if (value) {
        elem.setAttribute(key, '');
      }
    }
  }
  children.forEach(child => {
    if (child instanceof HTMLElement) {
      elem.appendChild(child);
    } else if (Array.isArray(child)) {
      child.forEach(it => {
        if (it instanceof HTMLElement) {
          elem.appendChild(it);
        } else {
          elem.appendChild(document.createTextNode(it.toString()));
        }
      });
    } else {
      elem.appendChild(document.createTextNode(child.toString()));
    }
  });
  return elem;
}

// Valid usages

createElement('div');
createElement('p', null, 'Hello World');
createElement('a', { href: 'https://www.typescriptlang.org' }, 'typescript');
createElement('button', { disabled: true }, 'Press me');
createElement('ul', null, createElement('li', null, 'Item 1'), createElement('li', null, 'Item 2'));
const items = ['item 1', 'item 2'];
createElement(
  'ul',
  null,
  items.map(item => createElement('li', null, item))
);
