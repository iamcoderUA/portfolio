import preloader from './modules/preloader.js';
import { auth } from './modules/auth.js';
import { nav } from './modules/fixed-menu.js';
import { parallaxMain } from './modules/parallax-main.js';
import { initMap } from './modules/map.js';
import { blogMenu } from './modules/blog-menu.js';
import { sliderMain } from './modules/slider.js';
// import { blur } from './modules/blur.js';
import { anchor } from './modules/anchor.js';


// Parallax
const wrapper = document.querySelector('body');
const bg = document.querySelector('.header-bg');
const portfolio = document.querySelector('.header-name');
const info = document.querySelector('.header-info');
// Authorization form
const btn = document.querySelector('.welcome-block__link');
const goBack = document.querySelector('.welcome-auth__homelink');
// Fixed-Menu
const navBtn = document.querySelector('.navigation__but');
// Preloader
const preload = preloader();


// Preloader
preload.show();

// Parallax-Mouse
if (document.getElementsByClassName('parallax-mouse').length > 0) {
    const parallax = parallaxMain();
    window.addEventListener('mousemove', parallax.parallaxMouse);
};

// Parallax-Scroll
if (document.getElementsByClassName('header-bg').length > 0) {
    const parallax = parallaxMain();
    wrapper.onscroll = function () {
		parallax.parallaxMove(bg, bg.getBoundingClientRect().top, 75);
		parallax.parallaxMove(portfolio, portfolio.getBoundingClientRect().top, 25);
		parallax.parallaxMove(info, info.getBoundingClientRect().top, 35);
	};
};

// Authorization form
if (document.getElementsByClassName('welcome-container').length > 0) {
	const formAuth = auth();
	btn.onclick = function (e) {
		e.preventDefault();
		formAuth.rotate(btn);
	};
	goBack.onclick = function (e) {
		e.preventDefault();
		formAuth.rotateBack(btn);
	};
}

// Fixed-Menu
if (document.getElementsByClassName('navigation').length > 0) {
	const fixedMenu = nav();
	navBtn.onclick = function (e) {
		e.preventDefault();
		fixedMenu.navActive(navBtn);
	};
}

// Google Maps
if (document.getElementsByClassName('google-map').length > 0) {
	initMap();
}
// Blog-Menu
if (document.getElementsByClassName('blog-menu').length > 0) {
	const blogNav = blogMenu();
	const items = document.querySelector('.blog-nav__list');
	const pushBtn = document.querySelector('.push-menu');	
	document.onscroll = function() {
		blogNav.menuScroll();
		blogNav.menuData();
	};
	items.onclick = function(e) {
		e.preventDefault();
		const clickBtn = e.target;
		blogNav.menuClick(clickBtn);
	};
	pushBtn.onclick = function(e) {
		e.preventDefault();		
		blogNav.menuTablets();
	};
}

// Slider
if (document.getElementsByClassName('portfolio-slider').length > 0) {
	const sliderInit = sliderMain();
	const slideLeft = document.querySelector('.js-slide-left');
	const slideRight = document.querySelector('.js-slide-right');
	let currentSlide = 0;
	sliderInit.fillSlider();
	slideLeft.onclick = function(e) {
		e.preventDefault();
        sliderInit.fillSlider();
    }
    slideRight.onclick = function(e) {
		e.preventDefault();		
        sliderInit.fillSlider();
    } 
}


// blur.set();

// window.onresize = function() {
//     blur.set();
// };

// Anchor
if (document.getElementsByClassName('next-arrow__but').length > 0) {
	const scroll = anchor();
	const arrow = document.querySelector('.next-arrow__but');

	arrow.onclick = function(e) {
	e.preventDefault();
    scroll.scrollSmooth();
	};
}
