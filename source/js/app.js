(function() {
  'use strict';
  var btnMenu  = document.querySelector('.btn-menu');
  var siteMenu = document.querySelector('.site-menu');
      //.classList.add('m--show');

  btnMenu.addEventListener('click', function() {
    siteMenu.classList.add('open');
  });

})();