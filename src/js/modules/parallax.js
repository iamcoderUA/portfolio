export const parallax = {
    bg: document.querySelector('.header-bg'),
    portfolio: document.querySelector('.header-name'),
    info: document.querySelector('.header-info'),

    parallaxMove: function(item, scroll, state) {
        const count = scroll / state + '%';
        item.style.transform = 'translateY(' + count + ')';
    },
};