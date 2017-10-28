export default function auth() {
    const container = document.querySelector('.welcome-container');
    const icons = document.querySelectorAll('.front-info__svg');
    const text = document.querySelector('.front-info__capt');

    return {
        rotate(btn) {
            container.classList.add('active');
            btn.classList.add('active');
            text.classList.add('active');

        },
        rotateBack(btn) {
            container.classList.remove('active');
            btn.classList.remove('active');
            text.classList.remove('active');
        }
    }
}