var Toast = function(config) {
    for(var key in config) {
        this[key] = config[key];
    }

    this.__proto__ = PopUpNotifications;

}

var Modal = function(config) {

    this.__proto__ = PopUpNotifications;

    this.statusCreatable = false;

    this.createModal = function() {
        var state = this;

        var inputObj = {};

        for(var key in config) {
            inputObj[key] = config[key];
        }

        function getId(obj) {
            for(var keyId in obj) {
                console.log(keyId + ': ' + document.getElementById('input ' + keyId).value);
            }
        }

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
                getId(inputObj);
            }
        );

        closeModal.addEventListener('click', function() {
            state.hide();
        })

        modalWrapperIns.addEventListener('click', function(event) {
            event.stopPropagation();
        })

        submitBtn.style.order = Object.keys(inputObj).length;

        this.statusCreatable = true;
    }

    this.show = function() {
        if(!this.statusCreatable) {
            this.createModal();
        }

        modalWrapper.classList.remove('modal-wrapper-hide');

    }

    this.hide = function() {
        modalWrapper.classList.add('modal-wrapper-hide');
    }
}