$(document).ready( function() {
// menu functions

$('.close-menu').click( () => {
    $('menu').animate({left: '100vw'}, 'slow');
})
$(".menuico").click( () => {
$('menu').animate({left: '0vw'}, 'slow');
$('nav').animate({cursor: 'auto'}, 'slow');
})

$("#loadingMask").fadeOut()
$('header').css('display', 'flex')

$.ajax({
    url: "https://ntfy.barbiericlinica.com.br/siteclinica",
    method: "POST",
    data: 'um novo acesso a pagina barbiericlinica.com.br foi verificado',
    headers: {'t': "Novo acesso a barbiericlinica.com.br"},
    success: function(response) {
        console.log("POST bem sucedido", response)
    },
    error: function(error) {
        console.log("Erro no POST", error)
    }
})


})