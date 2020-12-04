import _ from 'lodash'
import './style.css'
import Img from './new-year.jpg'
import student from './data.json'
import xml from './data.xml'

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    var image=new Image()
    image.src=Img

    element.appendChild(image)
    return element;
}
console.log(typeof xml)
document.body.appendChild(component());