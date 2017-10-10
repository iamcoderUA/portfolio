export default function formValid() {
    const error = document.getElementById('errorr');
    const popBtns = error.getElementsByClassName('close-btn');
    const form = document.querySelector('.form');
    const rows = form.getElementsByClassName('form-row');
    const inputs = [];
    const regexp = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

    for (let i = 0; i < rows.length; i++) {
        inputs.push(rows[i].children[0]);
    }

    return {
        submitForm() {
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value === "" || inputs[i].value === " ") {
                    if (inputs[i] === inputs[1]) {
                        regexp.test(inputs[1]);
                    }

                    inputs[i].style.border = '1px solid red';
                    error.classList.add('active');

                    for (let i = 0; i < popBtns.length; i++) {
                        popBtns[i].addEventListener('click', function (e) {
                            e.preventDefault();
                            error.classList.remove('active');
                            
                            inputs.forEach(function(item) {
                                item.style.border = 'none';
                            })
                        })
                    };
                } else {
                    this.submitForm();
                }
            }
        }
    }
}
