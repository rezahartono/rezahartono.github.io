function workExperienceRenderer(companies) {
    var element = $('#work-experiences')

    var html = ""

    companies.forEach(e => {
        html += "<li class=\"splide__slide d-flex justify-content-center align-items-center\">"
            + "<img src =\"" + e.logo + "\" alt =\"" + e.name + "\" class=\"company-logo\" >"
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

    var html = ""

    portfolios.forEach(e => {
        html += "<li class=\"splide__slide portfolio-item d-flex justify-content-center align-items-center px-2\">"
            + "<div class=\"portfolio-card\" data-bs-toggle=\"tooltip\" data-bs-placement=\"top\" data-bs-title=\"" + e.title + "\">"
            + "<div class=\"card-image\">"
            + "<img src=\"" + e.image + "\" alt=\"adm\" class=\"portfolio-image\">"
            + "</div>"
            + "<button class=\"btn btn-warning btn-large\">Lihat Selengkapnya</button>"
            + "</div>"
            + "</li>"
    })

    element.append(html)

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