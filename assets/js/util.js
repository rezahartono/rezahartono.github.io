function disableConsole() {
    $(document).keydown(function (event) {
        if (event.keyCode == 123) {
            return false;
        }
        else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            return false;
        }
    });

    $(document).on("contextmenu", function (e) {
        e.preventDefault();
    });
}

function initDownload() {
    var filePath = '/data/Reza Hartono.pdf'

    var link = $("<a>")
        .attr("href", filePath)
        .attr("download", "Reza Hartono.pdf")
        .appendTo("body");

    // Trigger the download
    link[0].click();

    // Remove the link from the DOM
    link.remove();
}