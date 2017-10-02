export default function auth() {
    const container = document.querySelector('.welcome-container');
    const icons = document.querySelectorAll('.front-info__svg');

    return {
        rotate(btn) {
            container.classList.add('active')
            btn.classList.add('active')
        },
        rotateBack(btn) {
            container.classList.remove('active')
            btn.classList.remove('active')
        }
    }
}