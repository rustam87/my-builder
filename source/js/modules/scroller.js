import removeClass from '../util.js';

class Scroller {
    constructor() {

        this.articles = document.querySelectorAll('.article');
        this.menuItems = document.querySelectorAll('.blog-menu__item');
        let self = this;

        window.addEventListener('scroll', self.findCurrentBlock.bind(self));

        for (let i = 0; i < this.menuItems.length; i++) {
            this.menuItems[i].addEventListener('click', function(event) {
                event.preventDefault();
                let number =  this.dataset.type;
                let el = document.querySelector('#article_' + number);

                self.goTo(el);
            });
        }
    }

    findCurrentBlock (){

        for (let i = 0; i < this.articles.length; i++) {
            let elPos = this.getElPosY(this.articles[i]);
            let scrollTop = window.pageYOffset;

            if (scrollTop >= elPos.top && scrollTop < elPos.bottom) {
                let numberArticle = this.articles[i].id.split('_')[1];
                let activeMenuItem = document.querySelector('[data-type="' + numberArticle + '"]');
                this.setActiveMenuItem(activeMenuItem);
                break;
            }
        }
    }

    getElPosY(element) {

        let elStyle   = window.getComputedStyle(element);
        let margin    = parseInt(elStyle.getPropertyValue('margin-top'), 10) +
                        parseInt(elStyle.getPropertyValue('margin-bottom', 10));
        let elHeight  = element.offsetHeight + margin;
        let elTopY    = element.offsetTop;
        let elBottomY = elTopY + elHeight;

        return {
            top: elTopY,
            bottom: elBottomY
        }
    }

    setActiveMenuItem(el) {
        removeClass(this.menuItems, 'blog-menu__item_active');
        el.classList.add('blog-menu__item_active');
    }

    goTo (element){
        let elTop = element.offsetTop;
        elTop = elTop + 5;
        window.scrollTo(0, elTop);
        //window.location.hash = element.getAttribute('id');
    }
}

new Scroller();
