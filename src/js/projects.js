import { nav } from './modules/fixed-menu.js';
import { parallax } from './modules/parallax.js';
// import { blur } from './modules/blur.js';
// import { anchor } from './modules/anchor.js';

nav.navBut.onclick = function (e) {
    e.preventDefault();
    nav.navActive();
};

const wrapper = document.querySelector('body');

wrapper.onscroll = function () {
   parallax.parallaxMove(parallax.bg, parallax.bg.getBoundingClientRect().top, 55);
   parallax.parallaxMove(parallax.portfolio, parallax.portfolio.getBoundingClientRect().top, 25);
   parallax.parallaxMove(parallax.info, parallax.info.getBoundingClientRect().top, 35);
};

// blur.set();

// window.onresize = function() {
//     blur.set();
// };

// anchor.btnUp.onclick = function (e) {
//     e.preventDefault();
//     anchor.runScroll();
// };

$(function($){
	$('.next-arrow__but').click(function(){
		var el = $(this).attr('href');
		$('body').animate({
			scrollTop: $(el).offset().top}, 1500);
		return false;
	});
});
