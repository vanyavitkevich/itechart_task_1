function PopUpNotifications (modalElem) {

    this.modalElem = modalElem;

}

PopUpNotifications.prototype = {
    constructor: PopUpNotifications,

    show: function() {
        this.modalElem.classList.remove('hidden');
    },

    hide: function() {
        this.modalElem.classList.add('hidden');
    }
}