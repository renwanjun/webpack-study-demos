import { cube } from "./math";
console.log(process.env.NODE_ENV)
function component() {
    var element = document.createElement('pre');

    // Lodash, now imported by this script
    element.innerHTML = ['Hello webpack1!','5 cubed is equal to '+cube(5)].join('\n\n');

    return element;
}

document.body.appendChild(component());