import { nav } from './modules/fixed-menu.js';
import { parallax } from './modules/parallax.js';
import { blur } from './modules/blur.js';
// import { initMap } from './modules/map.js';


nav.navBut.onclick = function (e) {
    e.preventDefault();
    nav.navActive();
};

// initMap();
const wrapper = document.querySelector('body');

wrapper.onscroll = function () {
   parallax.parallaxMove(parallax.bg, parallax.bg.getBoundingClientRect().top, 45);
   parallax.parallaxMove(parallax.portfolio, parallax.portfolio.getBoundingClientRect().top, 25);
   parallax.parallaxMove(parallax.info, parallax.info.getBoundingClientRect().top, 35);
};

blur.set();

window.onresize = function() {
    blur.set();
}