'use strict';

const go = function () {
    let targets = document.getElementsByClassName('title');
    for(let i = 0; i < targets.length; ++i) {
        targets[i].innerHTML = 'Hello, World!';
    }

    let description = document.getElementsByClassName('description');    
    for(let i = 0; i < description.length; ++i) {
        description[i].innerHTML = 'The following function loops through af set of HTML collections and sets their inner HTML values respectively.'
    }
}

window.addEventListener('load', go);
