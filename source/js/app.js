(function () {
    'use strict';
    var btnMenu = document.querySelector('.btn-menu');
    var siteMenu = document.querySelector('.site-menu');

    btnMenu.addEventListener('click', function () {
        var windowHeight = window.outerHeight;
        siteMenu.style.height = windowHeight + 'px';
        document.body.classList.toggle('open-menu');
    });

})();

