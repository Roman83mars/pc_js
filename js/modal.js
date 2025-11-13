const modal = () => {
    const modalBtn = document.querySelectorAll('.modal__button, .course__button')
    const modal = document.querySelector('.modal')
    const modalInner = modal.querySelector('.modal__inner')

    const addCloseBtn = () => {
        const closeBtn = document.createElement('img')
        modalInner.style.position = 'relative'
        closeBtn.src = './img/close.svg'
        closeBtn.style.width = '5rem'
        closeBtn.style.height = '5rem'
        closeBtn.style.cursor = 'pointer'
        closeBtn.style.position = 'absolute'
        closeBtn.style.top = '2rem'
        closeBtn.style.right = '2rem'
        modalInner.prepend(closeBtn)

        closeBtn.addEventListener('click', () => {
            modal.style.display = ''
        })
    }

    modalBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex'
        })
    })

    modal.addEventListener('click', (e) => {
        const modalContent = e.target.closest('.modal__inner')
        if (!modalContent) {
            modal.style.display = ''
        }
    })

    addCloseBtn()
}

modal()