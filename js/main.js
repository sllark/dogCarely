"use strict";


//Nav Events
var menu = document.querySelector('.hamburgerMenu'),
    nav = document.querySelector('.header__nav');


menu.onclick = function () {
    nav.classList.toggle('hideNav');
    menu.classList.toggle('makeCross')
};
window.addEventListener('click', function (e) {

    // if( !(nav.contains(e.target)) && e.target!==nav && e.target!==menu && !(menu.contains(e.target)))

    if (e.target !== nav && e.target !== menu && !(menu.contains(e.target))) {
        nav.classList.add('hideNav');
        menu.classList.remove('makeCross')

    }

});


window.addEventListener('scroll', topLogManager);

window.addEventListener('load',()=>{

    topLogManager();

    let footerAnchors=document.querySelectorAll('.footer__socialMedia__links a');
    // console.log(footerAnchors);
    footerAnchors.forEach(anchor=>{
        anchor.setAttribute('rel','noopener');
    })

});

function topLogManager() {
    let header = document.querySelector('.header');
    let topLogo = document.querySelector('.topLogo');

    if (window.pageYOffset >= header.getClientRects()[0].height) {
        topLogo.classList.remove('hideTop')
    } else {
        topLogo.classList.add('hideTop')

    }

}


let topLogo = document.querySelector('.topLogo');
topLogo.addEventListener('click', function (e) {

    e.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    //
    // if (!(topLogo.children[0].contains(e.target) || e.target === topLogo.children[0])) { //check if it is not clicked on logo
    // }
});
