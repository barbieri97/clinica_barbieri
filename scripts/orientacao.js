// cria link para css
var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': '/../styles/infopage.css'
})
$('head').append(link);

// adiciona html e js
$.get('/../componentes/orientacao.html', (data, status) => {
    $('main').append(data)
})