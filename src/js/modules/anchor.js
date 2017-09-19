// export const anchor = {
//     btnUp : document.querySelector('.next-arrow__but'),
//     elmnt : document.querySelector('#up'),    

//     goUp: function () {
//         function scrollTo(element, to, duration) {
//             if (duration <= 0) return;
//             var difference = to - element.scrollTop;
//             var perTick = difference / duration * 10;
        
//             setTimeout(function() {
//                 element.scrollTop = element.scrollTop + perTick;
//                 if (element.scrollTop === to) return;
//                 scrollTo(element, to, duration - 10);
//             }, 10);
//         }
//     },

//     runScroll: function () {
//         this.goUp().scrollTo(document.body, elmnt.offsetTop, 1000);
//     },
// }
