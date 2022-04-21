export default class PopUpNotifications {
    constructor(modalElem){
        this.modalElem = modalElem;
    };

    show() {
        this.modalElem.classList.remove('hidden');
    };

    hide() {
        this.modalElem.classList.add('hidden');
    };
}