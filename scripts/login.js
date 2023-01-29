
// adiciona o link css para o login
var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': '/../styles/login.css'
})
$('head').append(link);

// adiciona html e js do index
$.get('/../componentes/login.html', (data, status) => {
    $('main').append(data);
    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
     });
    $('button').click(() => {
        $.post('http://localhost:8000/', {
            name: $('#username').val(),
            senha: $('#senha').val(),
        })
    })
})
