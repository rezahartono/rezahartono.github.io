var stickyElement = $('.sticky-top');

$(document).ready(function () {
    // for disable open dev tools
    // disableConsole()
})


$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        stickyElement.addClass('shadow');
    } else {
        stickyElement.removeClass('shadow');
    }
});
