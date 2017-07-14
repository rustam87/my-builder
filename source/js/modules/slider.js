
class Slider {
    constructor() {
        this.slider = document.querySelector('[data-slider]');
        this.sliderLeft = this.slider.querySelector('[data-slider-left]');
        this.sliderRight = this.slider.querySelector('[data-slider-right]');
        this.sliderPrevBtn = this.slider.querySelector('[data-slider-prev]');
        this.sliderTrackLeft = this.sliderLeft.querySelector('[data-slider-track]');
        this.step = document.querySelector('[data-slider-item]').clientHeight;
        this.itemsCount = this.sliderLeft.querySelectorAll('[data-slider-item]').length;
        this.currentCount = 1;
        this.goToStart = false;
        this.isClick = true;


        this.clone();


        this.sliderPrevBtn.addEventListener('click', ()=>{

            if (this.isClick) {
                let track = this.sliderTrackLeft;
                let currentY = parseFloat(track.style.transform.match(/-?[\d\.]+/g)[1]);


                if (this.currentCount === this.itemsCount) {
                    this.currentCount = 1;
                    this.goToStart = true;
                }
                track.style.transform = 'translate(0,' + (currentY - this.step) + 'px)';
                this.currentCount++;
            }

            this.isClick = false;


        });

        this.sliderLeft.addEventListener('transitionend', ()=>{
            if (this.goToStart) {
                let track = this.sliderTrackLeft;
                this.sliderTrackLeft.style.transition = 'none';
                track.style.transform = 'translate(0, -' + this.step + 'px)';
                this.goToStart = false;
                this.isClick = true;
                setTimeout(function(){
                    track.style.transition = 'transform 0.5s';
                }, 100);
            }
        });

    }

    clone (){
        let firstEl = this.sliderTrackLeft.firstElementChild.cloneNode(true);
        let lastEl = this.sliderTrackLeft.lastElementChild.cloneNode(true);

        this.sliderTrackLeft.insertBefore(lastEl, this.sliderTrackLeft.firstElementChild);
        this.sliderTrackLeft.appendChild(firstEl);

        this.sliderTrackLeft.style.transform  = 'translate(0, -175px)';
    }
}

export {Slider}