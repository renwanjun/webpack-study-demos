

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    this.alert('Hmmm,this probably isn\'t a great idea... ')
    return element;
}

document.body.appendChild(component());