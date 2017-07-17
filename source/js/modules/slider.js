import removeClass from '../util.js';

class Slider {
    constructor() {
        this.slider = document.querySelector('[data-slider]');
        this.sliderItems = this.slider.querySelectorAll('[data-slider-item]');
        this.sliderTrack = this.slider.querySelector('[data-slider-track]');
        this.sliderBtnPrev = this.slider.querySelector('[data-slider-btn-prev]');
        this.sliderBtnNext = this.slider.querySelector('[data-slider-btn-next]');

        this.sliderBtnNext.addEventListener('click', () => {
            this.move('next');
        });

        this.sliderBtnPrev.addEventListener('click', () => {
            this.move('prev');
        });
    }

    move(direction) {
        let activeSlide = this.slider.querySelector('.slider-item_active');
        let nextSlide;
        let currentPos;

        if (direction !== 'next' && direction !== 'prev') {
            throw new Error('Direction is bad');
        }

        if (direction ===  'next') {
            nextSlide = activeSlide.nextElementSibling;
            if (!nextSlide) {
                nextSlide = this.sliderTrack.firstElementChild;
            }
        }

        if (direction ===  'prev') {
            nextSlide = activeSlide.previousElementSibling;
            if (!nextSlide) {
                nextSlide = this.sliderTrack.lastElementChild;
            }
        }

        currentPos = this.sliderTrack.getBoundingClientRect().left - nextSlide.getBoundingClientRect().left;

        this.sliderTrack.style.transform = 'translate(' + currentPos + 'px, 0)';
        this.setActiveClass(nextSlide);
    }

    goTo(numberSlide) {

    }

    setActiveClass(el){
        removeClass(this.sliderItems, 'slider-item_active');
        el.classList.add('slider-item_active');
    }

}

export {Slider}