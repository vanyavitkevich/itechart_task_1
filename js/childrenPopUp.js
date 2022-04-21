import PopUpNotifications from './parentPopUp.js';

export class Modal extends PopUpNotifications {

    constructor(config) {
        
        const BODY = document.getElementById('body');
    
        let inputObj = {};
    
        for(let key in config) {
            inputObj[key] = config[key];
        }
    
        let modalWrapper = document.createElement('div');
        modalWrapper.classList.add('modal-wrapper');
        modalWrapper.classList.add('hidden');
    
        let modalWrapperIns = document.createElement('div');
        modalWrapperIns.classList.add('modal-wrapper__ins');
    
        let submitBtn = document.createElement('input');
        submitBtn.classList.add('Submit');
        submitBtn.setAttribute('type', "submit");
        submitBtn.setAttribute('value', "Submit");
    
        let closeModal = document.createElement('div');
        closeModal.classList.add('modal-wrapper__ins-close');
    
        modalWrapperIns.appendChild(submitBtn);
        modalWrapperIns.appendChild(closeModal);
    
        for(let keyModal in inputObj) {
            let labelElem = document.createElement('label');
            labelElem.innerText = keyModal + ':';
            labelElem.setAttribute('for', keyModal);
            modalWrapperIns.appendChild(labelElem);
            let inputElem = document.createElement('input');
            inputElem.setAttribute('name', keyModal);
            inputElem.setAttribute('id', 'input ' + keyModal);
            modalWrapperIns.appendChild(inputElem);
            for(let keyModalIns in inputObj[keyModal]) {
                inputElem.setAttribute(keyModalIns, inputObj[keyModal][keyModalIns]);
            }
        }
    
        submitBtn.addEventListener('click', function() {
                for(let keyId in inputObj) {
                    console.log(keyId + ': ' + document.getElementById('input ' + keyId).value);
                }
            }
        );
    
        modalWrapperIns.addEventListener('click', (event) =>  {
            event.stopPropagation();
        })
    
        submitBtn.style.order = Object.keys(inputObj).length;
    
        closeModal.addEventListener('click', () => {
            super.hide();
        })
    
        modalWrapper.addEventListener('click', () => {
            super.hide();
        })
    
        modalWrapper.appendChild(modalWrapperIns);

        super(modalWrapper);
    
        BODY.appendChild(modalWrapper);

    };

}

export class Toast extends PopUpNotifications {

    constructor(config) {

        let inputObj = {};
    
        for(let key in config) {
            inputObj[key] = config[key];
        }

        let status = true;
        let timeDuration = 0.5;
        let toastElem = document.createElement('div');
        let closeBtn = document.createElement('div');
        let toastIcon = document.createElement('div');

        toastElem.classList.add('toast_section-elem');
        toastElem.classList.add('hidden');
        toastElem.innerText = 'This message talk: ' + inputObj.text;

        for(let keyStyle in inputObj.style) {
            toastElem.style[keyStyle] = inputObj.style[keyStyle];
        }

        toastElem.appendChild(closeBtn);
        toastElem.appendChild(toastIcon);

        toastIcon.classList.add('toast_section-elem_img');
        toastIcon.style.backgroundImage = 'url(' + inputObj.icon + ')';

        closeBtn.classList.add('toast_section-elem_close');

        closeBtn.addEventListener('click', () => {
            status = false;
            toastElem.classList.add('toast_section-elem_left_to_right');
            setTimeout(() => {
                super.hide();
            }, timeDuration * 1000 - 100)
        });

        setTimeout( function (){
            if(status) {
                toastElem.classList.add('toast_section-elem_left_to_right');
            }
        }, 5000 - timeDuration * 1000 + 100)

        setTimeout(() => {
            if(status) {
                super.hide();
            }
        }, 5000)

        document.getElementById('toast_section').appendChild(toastElem);

        super(toastElem);

    }
    
}