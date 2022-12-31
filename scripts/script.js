let nav = document.querySelector('nav')
let menu = document.querySelector('menu');
// let menuHeader = document.querySelector('.menuimg');

function openmenu(){
    menu.style.left = '0vw';
    nav.style.cursor = 'auto';
    // menuHeader.style.width = '70px';
}

function closemenu() {
    menu.style.left = '100vw';
    // nav.style.cursor = 'pointer';
    // menuHeader.style.width = '0%';
}
