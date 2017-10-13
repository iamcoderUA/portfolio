export default function parallaxMain() {
    const parallaxLayer = document.getElementsByClassName('parallax-mouse__layer');

    return {
        parallaxScroll(item, scroll, state) {
            const count = scroll / state + '%';
            item.style.transform = 'translateY(' + count + ')';
        },
        parallaxMouse(e) {
            let positionX = 0;
            let positionY = 0;
            let speed = 100;
            
            for (let i = 0; i < parallaxLayer.length; i++) {
                positionX = e.pageX / -speed + 'px';
                positionY = e.pageY / -speed + 'px';
                parallaxLayer[i].style.transform = 'translate3d(' + positionX + ',' + positionY + ',0)';
                speed -= 15;
            }
        },
    };
}
