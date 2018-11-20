import _ from 'lodash';
import './styles.css';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack4'], ' ');

    return element;
}

let element = component();
document.body.appendChild(element);