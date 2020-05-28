'use strict'
let items = ['apple', 'banana', 'cat', 'dog'];
let listItems = document.getElementsByTagName('li');
Array.from(listItems).forEach((item, i) => {
    item.innerHTML = items[i];
});
let list = document.getElementsByTagName('ul');
list[0].classList.add('limegreen');
