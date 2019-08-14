function frmSubmit() {
    let valid = true;
    // let validationServer01=
    // document.getElementById('validationServer01');


    // if(validationServer01.value.length<1)
    // {
    //     valid=false;
    //     validationServer01.classList.add('is-invalid');
    //     validationServer01.focus();
    // }


    var requiredElements = document.querySelectorAll('[required]');

    requiredElements.forEach(el => {
        el.classList.remove('is-invalid');
        var type = el.getAttribute('type');
        console.log(type);
        switch (type) {
            case "text":
                if (el.value.length < 1) {
                    if (valid != false) {
                        valid = false;
                        el.focus();
                    }
                    // valid = false;
                    // el.focus();
                    el.classList.add('is-invalid');
                }
                break;
            case "number":
                if ((el.getAttribute('required').length < 1 && el.value.length < 1) || (isNaN(el.value) || parseInt(el.value) < 1000 || parseInt(el.value) > 9999)) {
                    if (valid != false) {
                        valid = false;
                        el.focus();
                    }
                    // valid = false;
                    // el.focus();
                    el.classList.add('is-invalid');
                }
                break;
            case "email":
                if ((el.getAttribute('required').length < 1 && el.value.length < 1) 
                || !el.value.isEmail()) {
                    if (valid != false) {
                        valid = false;
                        el.focus();
                    }
                    // valid = false;
                    // el.focus();
                    el.classList.add('is-invalid');
                }
                break;
            case "checkbox":
                if (el.checked === false) {
                    if (valid != false) {
                        valid = false;
                        el.focus();
                    }
                    // valid = false;
                    // el.focus();
                    el.classList.add('is-invalid');
                }
            default:
                break;
        }
    });

    return valid;
}

String.prototype.isEmail = function () {
    let mailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailPattern.test(this);
};