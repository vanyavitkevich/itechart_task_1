var PopUpNotifications = {

    show: function() {
        this.wrapper.appendChild(this.PopUpNotification);
    },

    hide: function(removingElem) {
        removingElem.parentElement.removeChild(removingElem);
    }
}