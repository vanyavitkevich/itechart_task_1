var PopUpNotifications = {

    show: function() {
        var state = this;
        var status = true;
        var toastElem = document.createElement('div');
        var closeBtn = document.createElement('div');
        var toastIcon = document.createElement('div');

        toastElem.classList.add('toast_section-elem');
        toast_section.appendChild(toastElem);
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
            state.hide(toastElem);
        });
    
        setTimeout( function (){
            if(status) {
                state.hide(toastElem);
            }
        }, 5000)

    },

    hide: function(toastElem) {
        var timeDuration = getComputedStyle(toastElem)['animation-duration'];
                timeDuration = timeDuration.split('');
                timeDuration.pop();
                timeDuration = timeDuration.join('');
                toastElem.classList.add('toast_section-elem_left_to_right');
                
                setTimeout( function () {
                    toast_section.removeChild(toastElem);
                }, timeDuration * 1000 - 10)
    }
}