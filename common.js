window.onload = function () {

    $(function() {
        $.scrollify({
            section : ".slides__item",
        });
    });

    var openMenu = document.querySelector('#open-menu');
    var burgerBtn = document.querySelector('#burger-button');
    var closeBtn = document.querySelector('#close-button');
    var menuBlock = document.querySelector('#menu-block');
    
    // opening menu by click on burger button
    $(openMenu).click (function(e) {
        if (menuBlock.classList) {
            menuBlock.classList.add('menu-block--open')
        } else {
            menuBlock.className += ' ' + 'menu-block--open'
        };

        burgerBtn.style.setProperty('display', 'none');
        closeBtn.style.setProperty('display', 'block');

    })

    // closing menu by click on close button
    $(closeBtn).click (function(e) {
        if (menuBlock.classList) {
            menuBlock.classList.remove('menu-block--open')
        };

        burgerBtn.style.setProperty('display', 'block');
        closeBtn.style.setProperty('display', 'none');

    })
    
}