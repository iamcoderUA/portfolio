import { auth } from './modules/auth.js';

auth.btn.onclick = function (e) {
    e.preventDefault();
    auth.rotate();
};

auth.goBack.onclick = function (e) {
    e.preventDefault();
    auth.rotateBack();
};