// adiciona o link css do alerta
var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': '/../styles/alerta.css'
});
$('head').append(link);

// adiciona o conteudo html de alerta e a função para fecher o alerta
$.get('/../componentes/alerta.html', (data, status) => {
    $('main').append(data)
    })
    
$('main').click( () => {
    $('#construction-base').hide()
})