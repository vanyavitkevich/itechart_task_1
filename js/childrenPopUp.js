var Toast = function (config) {

    this.wrapper = document.getElementById('toast_section');

    for(var key in config) {
        this[key] = config[key];
    }

    var state = this;
    var status = true;
    var timeDuration = 0.5;
    var toastElem = document.createElement('div');
    var closeBtn = document.createElement('div');
    var toastIcon = document.createElement('div');

    toastElem.classList.add('toast_section-elem');
    toastElem.innerText = 'This message talk: ' + this.text;
    
    for(var keyStyle in this.style) {
        toastElem.style[keyStyle] = this.style[keyStyle];
    }

    toastElem.appendChild(closeBtn);
    toastElem.appendChild(toastIcon);
    toastIcon.classList.add('toast_section-elem_img');
    toastIcon.style.backgroundImage = 'url(' + this.icon + ')';
    closeBtn.classList.add('toast_section-elem_close');

    closeBtn.addEventListener('click', function (){
        status = false;
        toastElem.classList.add('toast_section-elem_left_to_right');
        setTimeout( function (){
            state.hide(toastElem);
        }, timeDuration * 1000 - 10)
    });

    setTimeout( function (){
        if(status) {
            toastElem.classList.add('toast_section-elem_left_to_right');
        }
    }, 5000 - timeDuration * 1000)

    setTimeout( function (){
        if(status) {
            state.hide(toastElem);
        }
    }, 5000)

    this.PopUpNotification = toastElem;
        
}

var Modal = function (config) {

    this.wrapper = document.getElementById('body');

    var state = this;

    var inputObj = {};

    for(var key in config) {
        inputObj[key] = config[key];
    }

    var modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper');

    var modalWrapperIns = document.createElement('div');
    modalWrapperIns.classList.add('modal-wrapper__ins');

    var submitBtn = document.createElement('input');
    submitBtn.classList.add('Submit');
    submitBtn.setAttribute('type', "submit");
    submitBtn.setAttribute('value', "Submit");

    var closeModal = document.createElement('div');
    closeModal.classList.add('modal-wrapper__ins-close');

    modalWrapperIns.appendChild(submitBtn);
    modalWrapperIns.appendChild(closeModal);

    for(var keyModal in inputObj) {
        var labelElem = document.createElement('label');
        labelElem.innerText = keyModal + ':';
        labelElem.setAttribute('for', keyModal);
        modalWrapperIns.appendChild(labelElem);
        var inputElem = document.createElement('input');
        inputElem.setAttribute('name', keyModal);
        inputElem.setAttribute('id', 'input ' + keyModal);
        modalWrapperIns.appendChild(inputElem);
        for(var keyModalIns in inputObj[keyModal]) {
            inputElem.setAttribute(keyModalIns, inputObj[keyModal][keyModalIns]);
        }
    }

    submitBtn.addEventListener('click', function() {
            for(var keyId in inputObj) {
                console.log(keyId + ': ' + document.getElementById('input ' + keyId).value);
            }
        }
    );

    modalWrapperIns.addEventListener('click', function(event) {
        event.stopPropagation();
    })

    submitBtn.style.order = Object.keys(inputObj).length;

    closeModal.addEventListener('click', function() {
        state.hide(modalWrapper);
    })

    modalWrapper.addEventListener('click', function() {
        state.hide(modalWrapper);
    })

    modalWrapper.appendChild(modalWrapperIns);

    this.PopUpNotification = modalWrapper;
    
}

Toast.prototype = PopUpNotifications;
Modal.prototype = PopUpNotifications;