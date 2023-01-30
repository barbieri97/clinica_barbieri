
// adiciona o link css para o login
var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': '/../styles/login.css'
})
$('head').append(link);

$("title").append(" | Login")

// adiciona html e js do index
$.get('/../componentes/login.html', (data, status) => {
    $('main').append(data);
    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
     });
    $('.btnlogin, .btnregister').click(() => {
        alert("em breve você poderá se cadastrar e aproveitar todos os beneficios online da nossa clínica!")
        })
    })