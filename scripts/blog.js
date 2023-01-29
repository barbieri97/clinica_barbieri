var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': '/../styles/infopage.css'
})
$('head').append(link);

// adiciona html e js do index
$.get('/../componentes/blog.html', (data, status) => {
    $('main').html(data)
})