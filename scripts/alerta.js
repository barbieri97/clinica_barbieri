// adiciona o link css do alerta
window.addEventListener('load', () => {
    var head = document.querySelector('head');
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/../styles/alerta.css';
    head.appendChild(link);
})

// adiciona o conteudo html de alerta e a função para fecher o alerta
fetch('/../pages/alerta.html')
    .then(response => response.text())
    .then(text => {
        let page = document.querySelector('main')
        page.innerHTML += text
        page.addEventListener("click", () => {
            let page = document.querySelector('#construction-base')
            page.style.display = "none"
        })
    })
