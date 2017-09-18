export const blur = (function() {
    var wrapper = document.querySelector('.feed-form__wrapper'),
    form = document.querySelector('.form');

    return {
        set: function() {
            var imgWidth = document.querySelector('.feed-form__bg').offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop,
                blurCSS = form.style;

            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
        }

    }
}());