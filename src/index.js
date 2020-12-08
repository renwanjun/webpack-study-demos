

function getComponent() {
    var element = document.createElement('div');

    return import('lodash').then(({default:_})=>{
        const element=document.createElement('div')
        element.innerHTML=_.join(['Hello','webpack'],'')
        return element
    }).catch(error=>'An error occurred while loading the component')
}

// async await
// async funtion getComponent(){
//     var element = document.createElement('div');
//     const { default: _ } = await import('lodash')
//     const element = document.createElement('div')
//     element.innerHTML = _.join(['Hello', 'webpack'], '')
//     return element
// }

getComponent().then(component => {
    document.body.appendChild(component);
})
