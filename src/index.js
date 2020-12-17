import _ from 'lodash'
import './style.css'
import Img from './new-year.jpg'
// import student from './data.json'
import xml from 'db/data.xml'

import toml from 'db/data.toml';
import yaml from 'db/data.yaml';
import json from 'db/data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    var image=new Image()
    image.src=Img
    image.style.width="100%"

    element.appendChild(image)
    return element;
}
console.log(xml)
document.body.appendChild(component());