const btnOrcamento = document.querySelectorAll('.callform')
const modal = document.querySelector('.container-form')
const btnClose = document.querySelector('#closeModal')

btnClose.addEventListener('click', ({ target }) => {
    modal.classList.add('disable')
    modal.addEventListener('click', () =>{
        modal.classList.add('disable')
    })
    console.log('ola')
})

const modalOrcamento = () => {
    modal.classList.toggle('disable')
    window.scrollTo(0, 0)
}

btnOrcamento.forEach((btn) => {
    btn.addEventListener('click', modalOrcamento)

})



