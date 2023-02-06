const urlParams = new URLSearchParams(window.location.search);

const page = urlParams.get('page') == null ? 'index' : urlParams.get('page')

const infoPages = ['orientacao', 'psicoadolescente', 'psicoadulto', 'psicoidoso', 'psicoinfantil', 'sobre']

$('title').append(` | ${page}`)

// adiciona o link css para o index
var link = $('<link>').attr({
    'rel': 'stylesheet',
    'type': 'text/css',
    'href': `/../styles/${infoPages.includes(page) ? 'infopage' : page}.css`
})
$('head').append(link);

// adiciona html e js do index
$.get(`/../componentes/${page}.html`, (data, status) => {
    $('main').append(data)
})