// form funcitions

    // Verifica os campos
    function validate(infos) {
    if (infos.nome == '') {
        throw "Isira os campos necessários"
    }
    if (infos.idade == '') {
        throw "Isira os campos necessários"
    }
    if (infos.numero == '') {
        throw "Insira os campos necessários"
    }

}

// Envia o formulario
$('#formsubmit').click((e) => {
    e.preventDefault()
    var infos = {
        nome: $('#formnome').val(),
        numero: $('#formnumero').val(),
        formaEtaria: $('[name=formetaria]:checked').toArray().map((c) => {
            return $(c).val()
        }),
        dia: $('[name=dia]:checked').toArray().map((c) => {
            return $(c).val()
        }),
        periodo: $('[name=periodo]:checked').toArray().map((c) => {
            return $(c).val()
        }),
        texto: $('#texto').val()
    }
    try {
        validate(infos)
        fetch('https://ntfy.barbiericlinica.com.br/siteclinica', {
            method: 'POST',
            body: `
            Novo Formulário!!
            
            Nome: ${infos.nome}
            Número: ${infos.numero}
            Idade: ${infos.formaEtaria}
            Dia de preferência: ${infos.dia}
            Período: ${infos.periodo}
            Observações: ${infos.texto}
            `,
            headers: {
                't': 'NOVO FORMULARIO'
            }
        })
    } catch (e){
        alert(e)
    }

})