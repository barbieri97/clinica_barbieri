// adiciona o link css para o index
var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': '/../styles/index.css'
})
$('head').append(link);

// adiciona html e js do index
$.get('/../componentes/index.html', (data, status) => {
    $('main').append(data)
})