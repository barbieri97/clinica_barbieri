// adiciona o link css para o funcionamento do menu
window.addEventListener('load', () => {
    var head = document.querySelector("head")
    var link = document.createElement("link")
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/../styles/menu.css';
    head.appendChild(link)
})

// adiciona o html e js do menu
fetch('../pages/menu.html')
    .then(response => response.text())
    .then(text => {
        var nav = document.querySelector("nav");
        nav.innerHTML += text;
        var menuBtn = document.querySelector(".menumob")
        let menu = document.querySelector('menu');
        let close = document.querySelector("#close-menu")
        menuBtn.addEventListener('click', () => {
            menu.style.left = '0vw';
            nav.style.cursor = 'auto';
        })
        close.addEventListener('click', () => {
            menu.style.left = '100vw';
        })
    })