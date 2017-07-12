

(function () {
    const body        = document.body;
    const btnMenu     = document.querySelector('.btn-menu');
    const siteMenu    = document.querySelector('.site-menu');
    const blogMenu    = document.querySelector('.blog-menu-wrapper');
    const btnBlogMenu = document.querySelector('.blog-menu-btn');


    if(btnMenu) {
        btnMenu.addEventListener('click', function () {
            siteMenu.style.height = window.outerHeight + 'px';
            body.classList.toggle('open-menu');
        });
    }

    if (btnBlogMenu) {
        btnBlogMenu.addEventListener('click', function () {
            blogMenu.classList.toggle('blog-menu-wrapper_open');
        });

        body.addEventListener('click', function (event) {
            if (event.target.classList.contains('blog-menu-btn')) {
                return;
            }

            blogMenu.classList.remove('blog-menu-wrapper_open');
        });
    }

})();



