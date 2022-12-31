fetch('../base.html')
    .then(response => response.text())
    .then(text => {
        $('html').prepend(text)
    })