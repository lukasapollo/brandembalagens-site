
/* Adiciona todas as imagens dinamicamente */

window.onload = function () { 
   const itensGalery = document.querySelectorAll('.itens-galery')
    itensGalery.forEach((itens, i) => {
        let img = i + 1;
        itens.style.backgroundImage = `url('../galery/${img}.jpeg')`
    })
 } 

 /* Fechar e abrir modal do portifolio */

 