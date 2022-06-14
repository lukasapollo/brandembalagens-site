/* Toggle da navbar */

const toggleNav = document.querySelectorAll('[data-toggle-nav]');
const navbar =document.querySelector('#navbar')
toggleNav.forEach((btnNav) => {
    btnNav.addEventListener('click', () => {
        navbar.classList.toggle('active-navbar')
    })
})


/* Mappeando scroll */

window.onscroll = function() {scrollFunction()};    

const showClass = {
    addClass(element, classCustom) {
        document.querySelector(element).classList.add(classCustom);
    },

    removeClassCustom(element, classCustom){
        document.querySelector(element).classList.remove(classCustom)
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        showClass.addClass('.boxs-header-2', 'disable')
        showClass.addClass('.header', 'header-scroll')
        showClass.addClass('.boxs-header-1', 'boxs-height')
        showClass.addClass('#logo-header', 'img-size')
        showClass.addClass('.ctn-logo', 'ctn-logo-screen')

    } else {

        showClass.removeClassCustom('.boxs-header-2', 'disable')
        showClass.removeClassCustom('.header', 'header-scroll')
        showClass.removeClassCustom('.boxs-header-1', 'boxs-height')
        showClass.removeClassCustom('#logo-header', 'img-size')
        showClass.removeClassCustom('.ctn-logo', 'ctn-logo-screen')
    }
}

/* cards do insta  */

const cardInsta = document.querySelectorAll('.text-content-insta')
const asideContainer = document.querySelectorAll('.aside-container')


function asideEnter({ target }){
   const res = target.getAttribute('data-aside')
   cardInsta[res].classList.add('up-text')
   console.log(target)
}

function asideExit({ target }){
    const res = target.getAttribute('data-aside')
    cardInsta[res].classList.remove('up-text')
    console.log(target)
}

asideContainer.forEach((aside) => {
    aside.addEventListener('mouseover', asideEnter)
    aside.addEventListener('mouseleave', asideExit)
})



