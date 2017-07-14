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

            //if (field.type === 'text' || field.type === 'password') {
                let fieldBlock = field.closest('.form-control');
                let errorFieldBlock = fieldBlock.querySelector('[data-error-block]');

                if (field.value) {
                    fieldBlock.classList.remove('form-control_error');
                    errorFieldBlock.classList.remove('error-message_open');
                    return true;
                }

                fieldBlock.classList.add('form-control_error');
                errorFieldBlock.innerHTML = field.dataset.errorText;
                errorFieldBlock.classList.add('error-message_open');
                isValid = false;
                return false;

            //}
            //
            //if (field.type === 'checkbox') {
            //    let fieldBlock = field.closest('.form-control-checkbox');
            //    let errorFieldBlock = fieldBlock.querySelector('[data-error-block]');
            //
            //    if (field.checked) {
            //        fieldBlock.classList.remove('form-control_error');
            //        errorFieldBlock.classList.remove('error-message_open');
            //        return true;
            //    }
            //
            //    fieldBlock.classList.add('form-control_error');
            //    errorFieldBlock.innerHTML = field.dataset.errorText;
            //    errorFieldBlock.classList.add('error-message_open');
            //    isValid = false;
            //    return false;
            //}


            //if (field.type === 'radio') {
            //    let fieldBlock = field.closest('.form-control-group-radio');
            //    let errorFieldBlock = fieldBlock.querySelector('[data-error-block]');
            //
            //    if (field.checked) {
            //        fieldBlock.classList.remove('form-control_error');
            //        return true;
            //    }
            //
            //    fieldBlock.classList.add('form-control_error');
            //    errorFieldBlock.innerHTML = field.dataset.errorText;
            //    errorFieldBlock.classList.add('error-message_open');
            //    isValid = false;
            //    return false;
            //}
        });
    }
}







export {Validate}
