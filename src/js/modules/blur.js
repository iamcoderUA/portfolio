export default function blur() {
    const feedBg = document.querySelector('.feed-bg__img');
    const form = document.querySelector('.feed-form');
    const formBg = form.querySelector('.feed-form__bg');
    const blurCSS = formBg.style;
    
    return {
        set() {
            const imgWidth = feedBg.offsetWidth;
            const imgHeight = feedBg.offsetHeight;
            const posLeft = -form.offsetLeft;
            const posTop = -form.offsetTop;

            blurCSS.backgroundSize = `${imgWidth  }px` + ` ${  imgHeight  }px`;
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        }
    }
};