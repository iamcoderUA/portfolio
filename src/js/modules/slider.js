export const sliderMain = function () {

    let slides = [
        {
          title: 'slide 1',
          image: '../img/content/slide-1.png',
          description: 'Описание проекта 1',
          tags: ['js', 'pug']
        },
        {
          title: 'slide 2',
          image: '../img/content/slide-2.jpg',
          description: 'Описание проекта 2',
          tags: ['js', 'pug']
        },
        {
          title: 'slide 3',
          image: '../img/content/slide-3.jpg',
          description: 'Описание проекта 3',
          tags: ['js', 'pug']
        },
        {
          title: 'slide 4',
          image: '../img/content/slide-4.png',
          description: 'Описание проекта 4',
          tags: ['js', 'pug']
        }
      ];

    const slider = document.querySelector('.js-slider');
    const mainSlide = slider.querySelector('.js-slide-head');
    const slideLeft = slider.querySelector('.js-slide-left');
    const slideRight = slider.querySelector('.js-slide-right');
    let currentSlide = 0;
    let slidesLength = slides.length;

    return {
        fillSlider() {
    
            let slideLimiter = function(value) {
                if (value >= slidesLength) {
                    return 0;
                } else if (value < 0) {
                    return slidesLength - 1;
                } else {
                    return value;
                }
            }

            var prev = slideLimiter(currentSlide - 1),
                next = slideLimiter(currentSlide + 1);

            currentSlide = slideLimiter(currentSlide - 1);
            currentSlide = slideLimiter(currentSlide + 1);

            var img = document.createElement('img');
            img.setAttribute('src', slides[currentSlide].image);
            img.classList.add('portfolio-slider__head-img');
            mainSlide.appendChild(img);
    
            var img1 = document.createElement('img');
            img1.setAttribute('src', slides[prev].image);
            img1.classList.add('slide-left__img');
            slideLeft.appendChild(img1);
    
            var img2 = document.createElement('img');
            img2.setAttribute('src', slides[next].image);
            img2.classList.add('slide-right__img');        
            slideRight.appendChild(img2);
        }
    }
}