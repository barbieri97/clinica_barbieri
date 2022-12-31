// adiciona o link css para o index
$(window).on('load', () => {
    var link = $('<link>').attr({
        'rel': 'stylesheet',
        'type': 'text/css',
        'href': '/../styles/index.css'
    })
    $('head').append(link);
})

// adiciona html e js do index
fetch('../pages/index.html')
    .then(response => response.text())
    .then(text => {
        $('main').html(text)
    })