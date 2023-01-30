// cria link para css
var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': '/../styles/infopage.css'
})
$('head').append(link);

// adiciona titulo da página
$('title').append(' | Psicoterapia de Adolescentes')

// adiciona html e js
$.get('/../componentes/psicoadolescente.html', (data, status) => {
    $('main').append(data)
})