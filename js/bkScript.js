var menu=document.querySelector('.hamburgerMenu'),
    nav=document.querySelector('.header__top__nav');


menu.onclick=function () {
    nav.classList.toggle('hideNav');
    menu.classList.toggle('makeCross')
};

window.addEventListener('click',function (e) {


    if( !(nav.contains(e.target)) && e.target!==nav && e.target!==menu && !(menu.contains(e.target))){
        nav.classList.add('hideNav');
        menu.classList.remove('makeCross')

    }


});
