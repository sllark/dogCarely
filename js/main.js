"use strict";

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

window.addEventListener('load', () => {

    topLogManager();

    let footerAnchors = document.querySelectorAll('.footer__socialMedia__links a');
    // console.log(footerAnchors);
    footerAnchors.forEach(anchor => {
        anchor.setAttribute('rel', 'noopener');
    })

});



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


let showBtn = document.querySelector('#showContent'),
    tableOfContent = document.querySelector('.tableOfContent'),
    tableLinks = document.querySelectorAll('.tableOfContent__list a');

if (showBtn) {
    showBtn.addEventListener('click', (e) => {
        e.preventDefault();
        tableOfContent.classList.toggle("show")
    })
}



tableLinks.forEach(addScrollToLink);


function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID) - convertRemToPixels(6.2);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY);
        return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
        }
        return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
    }
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function topLogManager() {
    let header = document.querySelector('.header');
    let topLogo = document.querySelector('.topLogo');

    if (window.pageYOffset >= header.getClientRects()[0].height) {
        topLogo.classList.remove('hideTop')
    } else {
        topLogo.classList.add('hideTop')

    }

}

function addScrollToLink(link) {
    if (link.dataset.name === undefined) return;
    link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(link.dataset.name);
    })
}