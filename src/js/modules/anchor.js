export const anchor = function () {
    const arrow = document.querySelector('.next-arrow__but');
    const titleMain = document.querySelector('.title-main');
    
    return {
        scrollSmooth() {
            const scrollInterval = setInterval(goUp, 10);
            function goUp() {
                if (titleMain.parentNode.hasAttributes('#up')) {
                    if ((titleMain.getBoundingClientRect().top - 50) > 0 ) {

                        setTimeout(goUp, 20)
                        window.scrollBy(0, 30);
                        clearInterval(scrollInterval);
                    }
                }
            }
        }
    }
}

// scrollingTop: function () {
//     let
//         timer = 0,
//         interval = setInterval(scrollTopAnimate, 10);
//     console.log(window.scrollY);

//     function scrollTopAnimate() {
//         if (window.pageYOffset === 0) {
//             clearInterval(interval);
//         } else {
//             if (timer < window.scrollY) {
//                 setInterval(scrollTopAnimate, 100);
//                 console.log(window.scrollY);
//                 window.scrollBy(0, -50);
//             }
//             timer++;
//         }
//     }
// }
