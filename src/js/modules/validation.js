export default function formValid() {
    const error = document.getElementById('errorr');
    const popBtns = error.getElementsByClassName('close-btn');
    const popText = error.querySelector('.form-popup__text');
    const form = document.querySelector('.form');
    const inputs = form.getElementsByClassName('form-row__input');
    const regexp = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    
    let flag = false;

    function closeBtns() {
        for (let j = 0; j < popBtns.length; j++) {
            popBtns[j].addEventListener('click', function (e) {
                e.preventDefault();
                error.classList.remove('active');
                for ( let i = 0; i < inputs.length; i++ ) {
                    inputs[i].removeAttribute('style');
                }
            });
        };
    }

    function validEmail(elem) {
        if (elem.getAttribute('name') === 'email') {
            if (regexp.test(elem.value) === false) {
                elem.style.border = '1px solid red';
                error.classList.add('active');
                closeBtns();
                flag = false;
            } else {
                flag = true;
            }
        }
    }
    
    function sendAjax() {
        const xhr = new XMLHttpRequest();
        const data = {};
        for (let j = 0; j < inputs.length; j++) {
            if (inputs[j].getAttribute('name') === 'name') data.name = inputs[j].value;
            if (inputs[j].getAttribute('name') === 'email') data.email = inputs[j].value;
            if (inputs[j].getAttribute('name') === 'text') data.text = inputs[j].value;
        }
        const jsonData = JSON.stringify(data);
        xhr.open('POST', '/contact', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(jsonData);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 301) {
                console.log(`${xhr.status} : ${xhr.statusText}`);                               
                error.classList.add('active');
                popText.textContent = 'Произошла ошибка на сервере';
                closeBtns();
            } else {
                error.classList.add('active');
                popText.textContent = 'Письмо успешно отправлено';
                closeBtns();
                form.reset();
            }
        };
    }

    function valid() {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "" || inputs[i].value === " ") {
                inputs[i].style.border = '1px solid red';
                error.classList.add('active');
                closeBtns();
                flag = false;
            } else validEmail(inputs[i]);
        }
        if (flag) {
            sendAjax();
          }
    }
    
    return {
        submitInit() {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                valid();
            });
        }
    }
}
