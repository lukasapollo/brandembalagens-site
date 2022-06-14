
/* Adiciona todas as imagens dinamicamente */

window.onload = function () { 
   const itensGalery = document.querySelectorAll('.itens-galery')
   const closeModal = document.querySelector('#closeModal')
   closeModal.addEventListener('click', showModal)

    itensGalery.forEach((itens, i) => {
        let img = i + 1;
        itens.style.backgroundImage = `url('../galery/${img}.jpeg')`
        itens.addEventListener('click', showModal)
        itens.setAttribute('data-item', img)
    })
 } 



let countImage = 0;
const images = document.querySelector('#image-modal')
const indexImg = document.querySelector('#indexImg')
 /* Fechar e abrir modal do portifolio */

function showModal({ target }){
        const modal = document.querySelector('.modal-galery')
        modal.classList.toggle('disable')
        const indexImage = target.getAttribute('data-item');

        if(indexImage != 0){
            images.src = `../galery/${indexImage}.jpeg`
            indexImg.innerHTML = indexImage
            images.setAttribute('data-index', indexImage)
            countImage = Number(indexImage)
        } 
}


/* Paginação do modal  */



const buttonsNavogation = document.querySelectorAll('[data-button]')
buttonsNavogation.forEach(button => {
   button.addEventListener('click', paginationModal)
})



const controllerPagination = {
    next(image){
      if(countImage < 50 && countImage >= 0){
         countImage++
         console.log(countImage)
         images.src = `../galery/${countImage}.jpeg`
         indexImg.innerHTML = countImage
      }
    },

    back(image){
      if(countImage <= 50 && countImage > 1){
         countImage--
         console.log(countImage)
         images.src = `../galery/${countImage}.jpeg`
         indexImg.innerHTML = countImage
      }
    },
 }

function paginationModal({ target }){
   const arrows = target.getAttribute('data-button')
   arrows < 0 ? controllerPagination.back(images) :  controllerPagination.next(images)
 } 


 