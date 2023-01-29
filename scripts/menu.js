// adiciona o link css para o funcionamento do menu
var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': '/../styles/menu.css'
})
$('head').append(link)

// adiciona o html e js do menu
$.get('../componentes/menu.html', (data, status) => {
    $('nav').append(data)
    $('#close-menu').click( () => {
        $('menu').animate({left: '100vw'}, 'slow');
    })
})

$(".menumob").click( () => {
    $('menu').animate({left: '0vw'}, 'slow');
    $('nav').animate({cursor: 'auto'}, 'slow');
})