let nav = document.querySelector('nav')
let menu = document.querySelector('menu');
let menuTransparent = document.querySelector('.menutransparent');

function openmenu(){
    menu.style.display = 'flex';
    menuTransparent.style.display = 'block'
    nav.style.cursor = 'auto'
}

function closemenu() {
    menu.style.display = 'none'
    menuTransparent.style.display = 'none'
    nav.style.cursor = 'pointer'
}
