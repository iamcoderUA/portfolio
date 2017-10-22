import preloader from './modules/preloader.js';
import parallaxMain from './modules/parallax-main.js';
import auth from './modules/auth.js';
import nav from './modules/fixed-menu.js';
import initMap from './modules/map.js';
import blogMenu from './modules/blog-menu.js';
import slider from './modules/slider.js';
import blur from './modules/blur.js';
import anchor from './modules/anchor.js';
import skills from './modules/skills.js';
import formValid from './modules/validation.js';


// Preloader
const preload = preloader();
preload.show();

// Parallax-Mouse
if (document.getElementsByClassName('parallax-mouse').length > 0) {
    const parallax = parallaxMain();
    window.addEventListener('mousemove', parallax.parallaxMouse);
};

// Parallax-Scroll
if (document.getElementsByClassName('header-bg').length > 0) {
	const parallax = parallaxMain();
	const wrapper = document.querySelector('body');
	const bg = document.querySelector('.header-bg');
	const portfolio = document.querySelector('.header-name');
	const info = document.querySelector('.header-info');
    wrapper.onscroll = function () {
		parallax.parallaxScroll(bg, bg.getBoundingClientRect().top, 75);
		parallax.parallaxScroll(portfolio, portfolio.getBoundingClientRect().top, 25);
		parallax.parallaxScroll(info, info.getBoundingClientRect().top, 35);
	};
};

// Authorization form
if (document.getElementsByClassName('welcome-container').length > 0) {
	const formAuth = auth();
	const btn = document.querySelector('.welcome-block__link');
	const goBack = document.querySelector('.welcome-auth__homelink');
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
	const navBtn = document.querySelector('.navigation__but');
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
if (document.getElementsByClassName('works').length > 0) {
	const sliderObj = slider();
	sliderObj.sliderInit(document.querySelector('.portfolio-slider'));
	sliderObj.slideNav();
  }

// Blur Form
if (document.getElementsByClassName('feed-form').length > 0) {
	const blurForm = blur();
	window.onload = function () {
		blurForm.set();
	}
	window.onresize = function() {
    	blurForm.set();
	};
}

// Anchor
if (document.getElementsByClassName('next-arrow__but').length > 0) {
	const scroll = anchor();
	const arrow = document.getElementsByClassName('next-arrow__but');

	for (let i = 0; i < arrow.length; i++) {
		arrow[i].onclick = function(e) {
			e.preventDefault();
			scroll.scrollSmooth();
		};
	}
}

// Skills-On-Scroll
if (document.getElementsByClassName('skills-list').length > 0) {
	const skillsScroll = skills();
	skillsScroll.skillsAnimateInit();
	
    // document.onscroll = function () {
	// 	// skillsScroll.skillsRender();
	// 	skillsScroll.skillsAnim();
	// };
}
// if (document.readyState === 'complete') {
// 	const skillsCreation = skills();
// 	skillsCreation.skillsRender();
// }

// Form Validation
if (document.getElementsByClassName('feed-form').length > 0) {
	const valid = formValid();
	valid.submitInit();
}
