const accordeon = () => {
    const contents = document.querySelectorAll('.program-line__content')

    contents.forEach((elem) => {
        const title = elem.querySelector('.program-line__title')
        const descr = elem.querySelector('.program-line__descr')

        title.addEventListener('click', () => {
            if (descr.classList.contains('active')) {
                descr.classList.remove('active')
            } else {
                contents.forEach((otherElem) => {
                    const otherDescr = otherElem.querySelector('.program-line__descr')
                    otherDescr.classList.remove('active')
                })
                descr.classList.add('active')
            }
        })
    })
}

accordeon()