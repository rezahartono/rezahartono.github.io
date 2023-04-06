var stickyElement = $('.sticky-top')

$(document).ready(function () {
    // for disable open dev tools
    $('#download-cv').click(function () {
        initDownload()
    })
    disableConsole()
})


$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        stickyElement.addClass('shadow')
    } else {
        stickyElement.removeClass('shadow')
    }
});

var pagePortfolio = 3

if (mediaQuery.matches) {
    pagePortfolio = 1
}

var splide = new Splide('#splide-portfolio', {
    perPage: pagePortfolio,
    focus: 0,
    omitEnd: true,
})

splide.mount()

var mediaQuery = window.matchMedia('(max-width: 768px)');

var pageWork = 4

if (mediaQuery.matches) {
    pageWork = 1
}

var splideWork = new Splide('#splide-work', {
    perPage: pageWork,
    focus: 0,
    omitEnd: true,
})

splideWork.mount()

const scriptURL = 'https://script.google.com/macros/s/AKfycbz9Nf_nkzKCJV-89P8RUiDNqY32iqhAz3UhKQme2Oxs6bUY-qy8ub_AdYtWn3Fvd7gaKA/exec'
const form = document.forms['contact-us-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response = () => {
            Swal.fire({
                icon: 'success',
                title: 'Pesan kamu berhasil di kirimkan',
                showConfirmButton: false,
                timer: 1500
            })

        })
        .catch(error => console.error('Error!', error.message))
        .finally(() => {
            $(':input', '#contact-us-form')
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .prop('checked', false)
                .prop('selected', false)
        })
})

