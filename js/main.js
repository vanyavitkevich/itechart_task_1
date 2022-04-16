errorBtn.addEventListener('click', function () {
    ErrToast.show();
})

warningBtn.addEventListener('click', function () {
    WarnToast.show();
})

succesBtn.addEventListener('click', function () {
    SuccToast.show();
})

infoBtn.addEventListener('click', function () {
    InfoToast.show();
})

modalBtn.addEventListener('click', function () {
    ModalConfig.show();
})

modalWrapper.addEventListener('click', function() {
    ModalConfig.hide();
})