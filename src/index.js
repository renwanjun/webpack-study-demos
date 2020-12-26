
import _ from 'lodash'

function component() {
    const element = document.createElement('div')

    const button = document.createElement('button')
    const br = document.createElement('br')

    button.innerHTML = 'Click2 me and look at the console!';

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        // 注意当调用ES6模块的import()方法引入模块时，必须指向模块的.default值，因为它才是promise被处理后返回的实际的module对象
        const print = module.default;

        print();
    });

    return element;
}

document.body.appendChild(component())