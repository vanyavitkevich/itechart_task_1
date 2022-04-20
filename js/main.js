document.getElementById('errorBtn').addEventListener('click', function () {
    (new Toast(ErrToast)).show();
})

document.getElementById('warningBtn').addEventListener('click', function () {
    (new Toast(WarnToast)).show();
})

document.getElementById('succesBtn').addEventListener('click', function () {
    (new Toast(SuccToast)).show();
})

document.getElementById('infoBtn').addEventListener('click', function () {
    (new Toast(InfoToast)).show();
})

document.getElementById('modalBtn').addEventListener('click', function () {
    (new Modal(ModalConfig)).show();
})