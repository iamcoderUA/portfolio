export let auth = {
    btn : document.querySelector('.welcome-block__link'),
    container : document.querySelector('.welcome-container'),
    goBack : document.querySelector('.welcome-auth__homelink'),
    icons : document.querySelectorAll('.front-info__svg'),
    rotate: function() {
        this.container.classList.add('active')
        this.btn.style.opacity = '0';
    },
    rotateBack: function() {
        this.container.classList.remove('active')
        this.btn.style.opacity = '1';
        
    }
}