class Flip {
    constructor (){
        this.btnAddFlip = document.querySelector('[data-btn-add-flip]');
        this.flipBlock = document.querySelector('[data-flip-block]');

        this.btnAddFlip.addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();
            this.btnAddFlip.classList.add('btn_hide');
            this.showBack();

        });

        document.body.addEventListener('click', (e) => {
            let isFlipBlock = e.target.closest('.flip-container');

            if (isFlipBlock) {
                return;
            }

            this.btnAddFlip.classList.remove('btn_hide');
            this.showFront();

        });
    }

    showFront() {
        this.flipBlock.classList.remove('flipper_rotate-180');
    }

    showBack (){
        this.flipBlock.classList.add('flipper_rotate-180');
    }

}

const flip = new Flip();

export {flip}
