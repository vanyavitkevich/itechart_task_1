var PopUpNotifications = {

    show: function() {
        this.createPopUpNotification();
        this.wrapper.appendChild(this.PopUpNotification);
    },

    hide: function(removingElem) {
        removingElem.parentElement.removeChild(removingElem);
    }
}