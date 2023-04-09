function workExperienceRenderer(companies) {
    var element = $('#work-experiences')

    var html = ""

    companies.forEach(e => {
        html += "<li class=\"splide__slide d-flex justify-content-center align-items-center\">"
            + "<img src =\"" + e.logo + "\" alt =\"" + e.name + "\" class=\"company-logo\" loading=\"lazy\">"
            + "</li>"
    })

    element.append(html)

    var pageWork = 4

    if (mediaQuery.matches) {
        pageWork = 1
    }

    var splideWork = new Splide('#splide-work', {
        perPage: pageWork,
        focus: 0,
        omitEnd: true,
        padding: {
            left: 20,
            right: 20,
        }
    })

    splideWork.mount()
}

function portfolioRenderer(portfolios) {
    var element = $('#list-portfolio')
    var modalSection = $('#modal-section')

    var html = ""

    var modal = ""

    portfolios.forEach(e => {
        captures = ""

        html += "<li class=\"splide__slide portfolio-item d-flex justify-content-center align-items-center px-2\">"
            + "<div class=\"portfolio-card\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" data-bs-title=\"" + e.title + "\">"
            + "<div class=\"card-image\">"
            + "<img src=\"" + e.image + "\" alt=\"adm\" class=\"portfolio-image\" loading=\"lazy\">"
            + "</div>"
            + "<button class=\"btn btn-warning btn-large\" data-bs-toggle=\"modal\" data-bs-target=\"#" + e.title.trim().replaceAll(" ", "-") + "\">Lihat Selengkapnya</button>"
            + "</div>"
            + "</li>"


        e.ui?.forEach(el => {
            captures += "<div class=\"col-6 col-lg-3 d-flex justify-content-center align-items-center my-2\">"
                + "<img src=\"" + el + "\" alt=\"" + e.name + "\" class=\"capture-image mx-1 border border-1\">"
                + "</div>"

        })

        modal += "<div id=\"" + e.title.trim().replaceAll(" ", "-") + "\" class=\"modal fade\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"" + e.title.trim().replaceAll(" ", "-") + "Label\" aria-hidden=\"true\">"
            + "<div class=\"modal-dialog modal-dialog-centered modal-dialog-scrollable\">"
            + "    <div class=\"modal-content\">"
            + "        <div class=\"modal-header\">"
            + "            <h1 class=\"modal-title fs-5\" id=\"RantaiPasokLabel\">" + e.title + "</h1>"
            + "            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>"
            + "        </div>"
            + "        <div class=\"modal-body\">"
            + "<div class=\"row\">"
            + " <div class=\"col-12\">"
            + e.description
            + " </div>"
            + " <div class=\"col-12\">"
            + " <div class=\"row\" id=\"captures\">"
            + captures
            + " </div>"
            + " </div>"
            + "</div>"
            + "        </div>"
            + "        <div class=\"modal-footer\">"
            + "            <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>"
            + "        </div>"
            + "    </div>"
            + "</div>"
            + "</div>"
    })

    element.append(html)
    modalSection.append(modal)

    var pagePortfolio = 3

    if (mediaQuery.matches) {
        pagePortfolio = 1
    }

    var splide = new Splide('#splide-portfolio', {
        perPage: pagePortfolio,
        // type: 'loop',
        focus: 0,
        omitEnd: true,
        padding: {
            left: 10,
            right: 10,
        }
    })

    splide.mount()
}