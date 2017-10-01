export default function preloader() {
    const preloadImg = document.getElementsByTagName('*');
    const preloadBg = document.querySelector('.preloader');
    const preloadText = document.querySelector('.preloader__text');
    const regImgUrl = /background-image: url\(['"]?(.*?)['"]?\)/i;
    const shadowImgArr = [];
    let progress = 0;
    let img;
    let allImg;
    let shadowImg;

    function shadowImgadd() {
        shadowImg = document.createElement('img');
        shadowImg.setAttribute('src', img);
        shadowImgArr.push(shadowImg);
      }

    return {
        show() {
             return new Promise((resolve, reject) => {
                for (let i = 0; i < preloadImg.length; i++) {
                    if (preloadImg[i].matches('img')) {
                        img = preloadImg[i].getAttribute('src');
                        shadowImgadd();
                    } else if (preloadImg[i].hasAttribute('style') && regImgUrl.test(preloadImg[i].getAttribute('style'))) {
                        img = (preloadImg[i].getAttribute('style').slice(22, -2));
                        shadowImgadd();
                    }

                    allImg = 100 / shadowImgArr.length;

                    for (let j = 0; j < shadowImgArr.length; j++) {
                        preloadText.innerText = `${Math.ceil(progress)}%`;
                        shadowImgArr[j].onload = function () {
                            progress += allImg;
                            if (progress < 100) {
                                preloadText.innerText = Math.ceil(progress) + "%";
                            } else {
                                progress = 100;
                                preloadText.innerText = progress + "%";
                            }
                            if (Math.ceil(progress) === 100) {
                                resolve();
                            }
                        }
                    }
                }
             }).then(() => preloadBg.style.display = "none");
        }
    }
}