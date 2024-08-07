var stickyElement = $('.sticky-top')
var mediaQuery = window.matchMedia('(max-width: 768px)');
var about = $('#about-me').offset().top - 150
var service = $('#services').offset().top - 150
var portfolio = $('#portfolio').offset().top - 150
var contactUs = $('#contact').offset().top
var homeLink = $('#home-link')
var aboutLink = $('#about-link')
var serviceLink = $('#service-link')
var portfolioLink = $('#portfolio-link')

$(document).ready(function () {
    prepareData()
    // for disable open dev tools
    // disableConsole()
})

$('#download-cv').click(function () {
    initDownload()
})


$(window).scroll(function () {
    var scrollTop = $(this).scrollTop()

    if (scrollTop >= about && scrollTop < service) {
        homeLink.removeClass('active')
        aboutLink.addClass('active')
        serviceLink.removeClass('active')
        portfolioLink.removeClass('active')
    } else if (scrollTop >= service && scrollTop < portfolio) {
        homeLink.removeClass('active')
        aboutLink.removeClass('active')
        serviceLink.addClass('active')
        portfolioLink.removeClass('active')
    } else if (scrollTop >= portfolio && scrollTop < contactUs) {
        homeLink.removeClass('active')
        aboutLink.removeClass('active')
        serviceLink.removeClass('active')
        portfolioLink.addClass('active')
    } else if (scrollTop > contactUs) {
        homeLink.removeClass('active')
        aboutLink.removeClass('active')
        serviceLink.removeClass('active')
        portfolioLink.removeClass('active')
    } else {
        homeLink.addClass('active')
        aboutLink.removeClass('active')
        serviceLink.removeClass('active')
        portfolioLink.removeClass('active')
    }

    if (scrollTop > 0) {
        stickyElement.addClass('shadow')
    } else {
        stickyElement.removeClass('shadow')
    }
});

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

function prepareData() {
    try {
        $.getJSON('/data/x-data-application.json', function (data) {
            if (data != null) {
                var companies = data['work-experience']
                var portfolios = data['portfolios']

                console.log(portfolios)

                workExperienceRenderer(companies)
                portfolioRenderer(portfolios)
            }
        });
    } catch (error) {
        console.error(error)
    }
}



const storageKey = 'theme-preference'

const onClick = () => {
    // flip current value
    theme.value = theme.value === 'light'
        ? 'dark'
        : 'light'

    setPreference()
}

const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey)
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
}

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value)
    reflectPreference()
}

const reflectPreference = () => {
    document.firstElementChild
        .setAttribute('data-theme', theme.value)

    document
        .querySelector('#theme-toggle')
        ?.setAttribute('aria-label', theme.value)
}

const theme = {
    value: getColorPreference(),
}

// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = () => {
    // set on load so screen readers can see latest value on the button
    reflectPreference()

    // now this script can find and listen for clicks on the control
    document
        .querySelector('#theme-toggle')
        .addEventListener('click', onClick)
}

// sync with system changes
window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light'
        setPreference()
    })



