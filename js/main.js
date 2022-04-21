import {Modal, Toast} from './childrenPopUp.js';
import {ModalConfig, ErrToastConfig, WarnToastConfig, SuccToastConfig, InfoToastConfig} from './config.js';

let ModalWindow = new Modal(ModalConfig);
let ErrToast = new Toast(ErrToastConfig);
let WarnToast = new Toast(WarnToastConfig);
let SuccToast = new Toast(SuccToastConfig);
let InfoToast = new Toast(InfoToastConfig);

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