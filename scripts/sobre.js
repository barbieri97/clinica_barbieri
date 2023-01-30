// cria link para css
var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': '/../styles/infopage.css'
})
$('head').append(link);

// adiciona titulo da página
$('title').append(' | Sobre')

// adiciona html e js
$.get('/../componentes/sobre.html', (data, status) => {
    $('main').append(data)
})