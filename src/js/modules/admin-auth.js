export default function adminAuth() {

    function radioCheckClass(radioHuman) {
        radioHuman.classList.add('checked');
    }

    function radioDelClass(radioHuman) {
        radioHuman.classList.remove('checked');
    }

    function postUserInfo(form, radioLabel) {
        const xhr = new XMLHttpRequest();
        if (form) {
            const errMes = document.querySelector('.welcome-auth__message');
            const inp = document.getElementsByTagName('input');
            const inpText = document.getElementsByClassName('welcome-auth__input');
            const user = {};
            let flag = false;

            // уведомление об ошибке
            function validInp() {
                errMes.textContent = 'Не все поля формы заполнены!';
                errMes.classList.add('active');
                let flag = false;
            };
            // валидация текстовых полей
            if (!inpText[0].value || !inpText[1].value) {
                for (let i = 0; i < inpText.length; i++) {
                    if (inpText[i].value === '' || inpText[i].value === ' ') {
                        inpText[i].style.border = '1px solid red';
                        function focusInp() {
                            inpText[i].style.borderColor = 'transparent';
                        }
                        inpText[i].addEventListener('focus', focusInp);
                        validInp();
                    }
                }
            }
            // валидация остальных полей
            else if (inp[2].type === 'checkbox' && !inp[2].checked) {
                validInp();
            }
            else if (!radioLabel.classList.contains('checked')) {
                validInp();
            }
            else {
                flag = true;
            }
            // если валидация успешна, то отправляем  и валидируем на сервере
            if (flag) {
                for (let j = 0; j < inp.length; j++) {
                    if (inp[j].getAttribute('name') === 'login') user.login = inp[j].value;
                    if (inp[j].getAttribute('type') === 'password') user.password = inp[j].value;
                }
                const data = JSON.stringify(user);
                xhr.open('POST', 'api/user', false);
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.send(data);
                if (xhr.status === 301) {
                    document.location.href = '/admin';
                } else {
                    errMes.textContent = 'Логин либо пароль введены не верно!';
                    errMes.classList.add('active');
                }
            }     
        }
    }
    
    return {
        authInit(form, radioClass, id) {
            const container = document.querySelector(form);
            const radioHuman = document.querySelector(radioClass);
            const radioNoHuman = document.getElementById(id);
            
            radioHuman.addEventListener('click', e => {
                radioCheckClass(radioHuman);
            });
            radioNoHuman.addEventListener('click', e => {
                radioDelClass(radioHuman);
            });
            container.addEventListener('submit', e => {
                e.preventDefault();
                postUserInfo(container, radioHuman);
            })
        }
    }
}