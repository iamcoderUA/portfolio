export const auth = function() {
    const
        container = document.querySelector('.welcome-container'),
        icons = document.querySelectorAll('.front-info__svg');

    return {
        rotate: function(btn) {
            container.classList.add('active')
            btn.classList.add('active')
        },
        rotateBack: function(btn) {
            container.classList.remove('active')
            btn.classList.remove('active')
        }
    }
}