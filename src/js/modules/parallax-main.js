export const parallaxMain = function() {
    const parallaxLayer = document.getElementsByClassName('parallax-mouse__layer');

    return {
        parallaxMove(item, scroll, state) {
            const count = scroll / state + '%';
            item.style.transform = 'translateY(' + count + ')';
        },
        parallaxMouse(e) {
            // const initialX = (window.innerWidth / 2) - e.pageX;
            // const initialY = (window.innerHeight / 2) - e.pageY;


            // [].slice.call(parallaxLayer).forEach((layer, i) => {
            //     const divider = i / 100,
            //     positionX = initialX * divider,
            //     positionY = initialY * divider;
            //     let transformString = 'translate(${positionX}px, ${positionY}px)';
            //     layer[i].style.transform  = transformString;

            // });

            let positionX = 0,
                positionY = 0,
                speed = 100;
            
            for (let i = 0; i < parallaxLayer.length; i++) {
                positionX = e.pageX / -speed + 'px';
                positionY = e.pageY / -speed + 'px';
                parallaxLayer[i].style.transform = 'translate3d(' + positionX + ',' + positionY + ',0)';
                console.log(positionX, positionY);                  
                speed -= 15;
            }
        },
    };
}
