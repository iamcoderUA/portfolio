export let auth = {
    btn : document.querySelector('.welcome-block__button'),
    container : document.querySelector('.welcome-container'),
    goBack : document.querySelector('.welcome-auth__homelink'),
    icons : document.querySelectorAll('.front-info__svg'),
    rotate: function() {
        this.container.classList.add('active')
        this.btn.style.opacity = '0';
        
        // this.icons.style.opacity = '0';
        // this.btn.style.backgroundColor = "none"
    },
    rotateBack: function() {
        this.container.classList.remove('active')
        this.btn.style.opacity = '1';
        
    }
}