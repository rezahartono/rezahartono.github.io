var stickyElement = $('.sticky-top');

$(document).ready(function () {
    // for disable open dev tools
    $('#download-cv').click(function () {
        initDownload()
    })
    // disableConsole()
})


$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        stickyElement.addClass('shadow');
    } else {
        stickyElement.removeClass('shadow');
    }
});

var splide = new Splide('.splide', {
    perPage: 3,
    focus: 0,
    omitEnd: true,
});

splide.mount();
