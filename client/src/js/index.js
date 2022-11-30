import './form';
import './submit';

import { initdb } from './database';
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/index.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

// Add images on load
window.addEventListener('load', function () {
	initdb();
	document.getElementById('logo').src = Logo;
	document.getElementById('bearThumbnail').src = Bear;
	document.getElementById('dogThumbnail').src = Dog;
});

function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());
