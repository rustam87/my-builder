import removeClass from '../util.js';

class Slider {
    constructor() {
        this.slider = document.querySelector('[data-slider]');
        this.sliderItems = this.slider.querySelectorAll('[data-slider-item]');
        this.sliderTrack = this.slider.querySelector('[data-slider-track]');
        this.sliderBtnPrev = this.slider.querySelector('[data-slider-btn-prev]');
        this.sliderBtnNext = this.slider.querySelector('[data-slider-btn-next]');
        this.sliderDotsBlock = this.slider.querySelector('[data-slider-dots]');

        this.createDots(this.sliderItems.length);

        this.sliderBtnNext.addEventListener('click', () => {
            this.move('next');
        });

        this.sliderBtnPrev.addEventListener('click', () => {
            this.move('prev');
        });

        this.sliderDotsBlock.addEventListener('click', (event) => {
            let isDot = event.target.classList.contains('slider-dots-item');
            if (isDot) {
                let slideNumber = event.target.dataset.number;
                this.goTo(slideNumber);
            }
        })
    }

    move(direction) {
        let activeSlide = this.slider.querySelector('.slider-item_active');
        let nextSlide;
        let currentPos;

        if (direction !== 'next' && direction !== 'prev') {
            throw new Error('Direction is bad');
        }

        if (direction === 'next') {
            nextSlide = activeSlide.nextElementSibling;
            if (!nextSlide) {
                nextSlide = this.sliderTrack.firstElementChild;
            }
        }

        if (direction === 'prev') {
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
        let trackPosX = this.sliderTrack.getBoundingClientRect().left;
        let nextSlide = this.sliderItems[numberSlide - 1];
        let nextSlidePosX = nextSlide.getBoundingClientRect().left;
        let currentPos = trackPosX - nextSlidePosX;

        this.sliderTrack.style.transform = 'translate(' + currentPos + 'px, 0)';
        this.setActiveClass(nextSlide);
    }

    setActiveClass(el) {
        let numberDot = el.dataset.sliderItem;
        let dots = this.sliderDotsBlock.querySelectorAll('[data-number]');
        let nextDot = this.sliderDotsBlock.querySelector('[data-number="' + numberDot + '"');

        removeClass(this.sliderItems, 'slider-item_active');
        el.classList.add('slider-item_active');

        removeClass(dots, 'slider-dots-item_active');
        nextDot.classList.add('slider-dots-item_active');
    }

    createDots(number) {
        for (let i = 0; i < number; i++) {
            let dot = document.createElement('div');
            let activeClass = (i === 0) ? ' slider-dots-item_active' : '';

            dot.className = 'slider-dots-item' + activeClass;
            dot.setAttribute('data-number', i + 1);
            this.sliderDotsBlock.appendChild(dot);
        }
    }
}

export {Slider}