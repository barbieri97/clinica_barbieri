// cria link para css
var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': '/../styles/infopage.css'
})
$('head').append(link);

// adiciona titulo da página
$('title').append(' | Psicoterapia de Idosos')

// adiciona html e js
$.get('/../componentes/psicoidoso.html', (data, status) => {
    $('main').append(data)
})