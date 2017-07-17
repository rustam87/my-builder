class Validate {
    constructor () {
        let form = document.querySelectorAll('[data-validate-form]');

        for (let i = 0; i < form.length; i++) {
            form[i].addEventListener('submit', (event) => {
                event.preventDefault();
                let isValid = this.validate(form[i]);

                if(!isValid) {
                    return false;
                }
            });
        }
    }

    validate(form){

        let fields = form.querySelectorAll('[data-valid]');
        let isValid = true;

        [].forEach.call(fields, (field) => {
            let fieldBlock = field.closest('.form-control');
            let errorFieldBlock = fieldBlock.querySelector('[data-error-block]');

            if (field.value) {
                fieldBlock.classList.remove('form-control_error');
                errorFieldBlock.classList.remove('error-message_open');
                return;
            }

            fieldBlock.classList.add('form-control_error');
            errorFieldBlock.innerHTML = field.dataset.errorText;
            errorFieldBlock.classList.add('error-message_open');
            isValid = false;
        });

        return isValid;
    }
}

export {Validate}
