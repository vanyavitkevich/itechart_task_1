extend(Modal, PopUpNotifications);
extend(Toast, PopUpNotifications);

var ModalWindow = new Modal(document.createElement('div'), ModalConfig);
var ErrToast = new Toast(document.createElement('div'), ErrToastConfig);
var WarnToast = new Toast(document.createElement('div'), WarnToastConfig);
var SuccToast = new Toast(document.createElement('div'), SuccToastConfig);
var InfoToast = new Toast(document.createElement('div'), InfoToastConfig);

document.getElementById('errorBtn').addEventListener('click', function () {
    ErrToast.show();
})

document.getElementById('warningBtn').addEventListener('click', function () {
    WarnToast.show();
})

document.getElementById('succesBtn').addEventListener('click', function () {
    SuccToast.show();
})

document.getElementById('infoBtn').addEventListener('click', function () {
    InfoToast.show();
})

document.getElementById('modalBtn').addEventListener('click', function () {
    ModalWindow.show();
})