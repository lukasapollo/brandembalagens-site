const btnOrcamento = document.querySelectorAll('.callform')
const modal = document.querySelector('.container-form')
const btnClose = document.querySelector('#closeModal')

btnClose.addEventListener('click', ({ target }) => {
    modal.classList.add('disable')
    console.log('ola')
})

const modalOrcamento = ({ target }) => {
    if(target.getAttribute('data-block') != null){
        modal.classList.toggle('disable')
        window.scrollTo(0, 0)
    }
}

btnOrcamento.forEach((btn) => {
    btn.addEventListener('click', modalOrcamento)
    modal.addEventListener('click', modalOrcamento)
})



