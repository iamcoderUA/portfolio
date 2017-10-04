export default function slider() {
    'use strict';
  
    let slideItems = [
      {imgUrl: '../img/content/slider-1.png', slideCaption: 'LoftSchool Школа онлайн образования', technology: 'HTML5, CSS3, БЭМ', slideUrl: 'https://vk.com'},
      {imgUrl: '../img/content/slider-2.jpg', slideCaption: 'Сайт портфолио', technology: 'pug, sass, GRID, JavaScript, node.js, VueJS, Gulp, WebPack', slideUrl: 'https://vk.com'},
      {imgUrl: '../img/content/slider-3.jpg', slideCaption: 'Корпоративный сайт', technology: 'pug, sass, JavaScript, node.js, VueJS, Gulp, WebPack', slideUrl: 'https://vk.com'},
      {imgUrl: '../img/content/slider-4.png', slideCaption: 'Бургер лендинг', technology: 'HTML5, SASS, JavaScript, jQuery, AJAX, PHP, Gulp', slideUrl: 'https://vk.com'},
     ];
     let flagCreate = false;
     let isAnim = false;
     let counter = 0;
  
    function classListAdd(elem) {
      const elemClassName = ['js-slider-text', 'js-slider-head', 'js-slider-slide'];
      const containerClassName = ['js-slider-left', 'js-slider-right'];
      const sliderTextClassName = ['js-slider-capt', 'js-slider-tech', 'js-slider-link'];
      let sliderContainers = [];
      let counter = 0;
  
      elem.classList.add('slider-js');
  
      if (elem.classList.contains('slider-js')) {
        for (let i = 0; i < elem.children.length; i++) {
          elem.children[i].classList.add(elemClassName[counter]);
          counter++;
        };
      };
  
      counter = 0;
  
      for (let i = 0; i < elem.children.length; i++) {
        if (elem.children[i].classList.contains('js-slider-slide')) {
          let slideContainer = elem.children[i];
          for (let j = 0; j < slideContainer.children.length; j++ ) {
            slideContainer.children[j].classList.add(containerClassName[j]);
            sliderContainers.push(slideContainer.children[j])
          };
        } else if ( elem.children[i].classList.contains('js-slider-text') ) {
           let textContainer = elem.children[i];
           for ( let j = 0; j < textContainer.children.length; j++ ) {
            textContainer.children[j].classList.add(sliderTextClassName[j]);
           }
        };
      };
  
      for ( let i = 0; i < sliderContainers.length; i++ ) {
        if ( sliderContainers[i].classList.contains('js-slider-left') ) {
          slideListClassAdd('js-nav-left','a', sliderContainers[i]);
          slideListClassAdd('js-slidelist-left','ul', sliderContainers[i]);
        } else if ( sliderContainers[i].classList.contains('js-slider-right') ) {
          slideListClassAdd('js-nav-right','a', sliderContainers[i]);
          slideListClassAdd('js-slidelist-right','ul', sliderContainers[i]);
          flagCreate = true;
        } 
        if (flagCreate === true) {
          createImages(document.getElementsByClassName('js-slidelist-left'), document.querySelector('.js-slidelist-right'));
        };
  
      }; 
    };
  
    function slideListClassAdd(listClassName, search, elem) {
      for ( let j = 0; j < elem.children.length; j++ ) {
        let slideLists = elem.children[j].matches(search);
        if ( slideLists === true ) {
          elem.children[j].classList.add(listClassName);
        };
      };
    };
  
    function createImages() {
      let imgArray = [];
      for (let i = 0; i < slideItems.length; i++) {
        let item = document.createElement('li');
        let img = document.createElement('img');
        img.setAttribute('src', slideItems[i].imgUrl);
        item.appendChild(img);
        item.classList.add('portfolio-slider__slides-item', 'js-slider-item');
        img.classList.add('portfolio-slider__slides-img', 'js-slider-img');
        item.setAttribute('data-title', slideItems[i].slideCaption);
        item.setAttribute('data-tech', slideItems[i].technology);
        item.setAttribute('data-link', slideItems[i].slideUrl);
        imgArray.push(item);
      };
      appendImage(imgArray);
    };
  
    function appendImage(img) {
      const slideHeight = '-' + window.getComputedStyle(document.querySelector('.js-slider-slide')).height;
      let rslide = document.querySelector('.js-slidelist-right');
      let lslide = document.querySelector('.js-slidelist-left');
      rslide.style.transform = 'translateY(' + slideHeight + ')';
      lslide.style.transform = 'translateY(' + slideHeight + ')';
      for ( let i = 0; i < img.length; i++ ) {
        rslide.appendChild(img[i]);
        let imgClone = img[i].cloneNode(true);
        lslide.appendChild(imgClone);
      };
      firstSlide(lslide);
    };
  
    function firstSlide(slide) {
      const slideHead = document.querySelector('.js-slider-head');
      const firstSlideUrl = slide.children[0].children[0].getAttribute('src');
      const firstSlideTitle = slide.children[0].getAttribute('data-title');
      const firstSlideTech = slide.children[0].getAttribute('data-tech');
      const firstSlideLink = slide.children[0].getAttribute('data-link');
      const slideTitle = document.querySelector('.js-slider-capt');
      const slideTech = document.querySelector('.js-slider-tech');
      const slideLink = document.querySelector('.js-slider-link');
      slideHead.children[0].children[0].setAttribute('src', firstSlideUrl);
      slideTitle.textContent = firstSlideTitle;
      slideTech.textContent = firstSlideTech;
      slideLink.setAttribute('href', firstSlideLink);
    };
  
    function translate(right, left, status) {
      const slideLength = left.children.length - 1;
      if (status === true) {
        left.appendChild(left.children[0]);
        right.insertBefore(right.children[slideLength], right.children[0]);
      } else {
        right.appendChild(right.children[0]);
        left.insertBefore(left.children[slideLength], left.children[0]);
      };
    };
  
    function slideMove(nav) {
      return new Promise((resolve, reject) => {
        let rslide = document.querySelector('.js-slidelist-right');
        let lslide = document.querySelector('.js-slidelist-left');
        let speed = 0;
        let status = false;
        let animInterval = setInterval(slideAnimate, 20);
        const slides = document.querySelectorAll('.js-slider-item');
        function slideAnimate() {
          if (nav.classList.contains('js-nav-left')) {
            if ( counter < slides.length ) {
              for ( let i = 0; i < lslide.children.length; i++ ) {
                if ( speed < 100 ) {
                  speed++;
                  lslide.children[i].style.transform = 'translateY(' + '-' + speed + '%)';
                  rslide.children[i].style.transform = 'translateY(' + speed + '%)';
                  status = true;
                } else clearInterval(animInterval);
              };
              firstSlide(lslide);
            }
          } else if (nav.classList.contains('js-nav-right')) {
            if ( counter < slides.length ) {
              for ( let i = 0; i < rslide.children.length; i++ ) {
                if ( speed < 100 ) {
                  speed++;
                  rslide.children[i].style.transform = 'translateY(' + '-' + speed + '%)';
                  lslide.children[i].style.transform = 'translateY(' + speed + '%)';
                } else clearInterval(animInterval);
              };
              firstSlide(lslide);
            }
          };
          if (speed === 100) {
            resolve(status);
          }
        }
      }).then((status) => {
        let rslide = document.querySelector('.js-slidelist-right');
        let lslide = document.querySelector('.js-slidelist-left');
        translate(rslide, lslide, status);
        for (let i = 0; i < rslide.children.length; i++) {
          rslide.children[i].removeAttribute('style');
          lslide.children[i].removeAttribute('style');
        }
      })
    }
  
    return {
      sliderInit(elem) {
        classListAdd(elem);
      },
      slideNav() {
        const navLeft = document.querySelector('.js-nav-left');
        const navRight = document.querySelector('.js-nav-right');
        navLeft.onclick = function (e) {
          e.preventDefault()
          slideMove(navLeft);
        };
        navRight.onclick = function (e) {
          e.preventDefault()
          slideMove(navRight);
        };
      }
    }
  }  