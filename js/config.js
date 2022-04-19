var ErrToast = new Toast({
    'style': {
        'background': 'red',
        'text-decoration-line': 'underline',
        'font-size': '18px',
    },
    'text': 'Error!',
    'icon': './img/error-svgrepo-com.svg',
})

var WarnToast = new Toast({
    'style': {
        'background': 'yellow',
        'font-family': 'Arial, Helvetica, sans-serif',
        'font-size': '14px',
    },
    'text': 'Warning!',
    'icon': './img/warning-svgrepo-com.svg',
})

var SuccToast = new Toast({
    'style': {
        'background': 'green',
        'color': 'white',
    },
    'text': 'Success!',
    'icon': './img/checked-success-svgrepo-com.svg',
})

var InfoToast = new Toast({
    'style': {
        'background': 'aqua',
    },
    'text': 'Info',
    'icon': './img/info-svgrepo-com.svg',
})

var ModalConfig = new Modal ({
    'First name': {
        'type': 'text', 
        'value': 'John',
        'required': true,
    }, 
    'Last name': {
        'type': 'text',
        'value': 'Doe',
        'required': true,
    }, 
    'Password': {
        'type': 'password',
        'required': true,
    },
    'Age': {
        'type': 'number',
        'required': true,
    }
})