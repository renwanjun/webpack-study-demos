import { cube } from "./math";

function component() {
    var element = document.createElement('pre');

    // Lodash, now imported by this script
    element.innerHTML = ['Hello webpack!','5 cubed is equal to '+cube(5)].join('\n\n');

    return element;
}

document.body.appendChild(component());