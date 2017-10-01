export const blogMenu = function () {
    const blogNav = document.querySelector('.blog-nav');
    const navList = blogNav.querySelector('.blog-nav__list');
    const navItems = blogNav.getElementsByClassName('blog-nav__item');
    const blogMenu = document.querySelector('.blog-menu');
    const navLength = navItems.length;
    const articleItems = document.getElementsByClassName('blog-info__item');
    let count = 0;
    navList.children[0].classList.add('active');

    (function setAttr() {
        for (let i = 0; i < navLength; i++) {
            count++;
            navItems[i].setAttribute('data-name', 'article-' + count);
            articleItems[i].setAttribute('data-name', 'article-' + count);
        }
    })();

    return {
        menuScroll() {
            if (blogNav.getBoundingClientRect().top < 20 ) {
                navList.classList.add('active');
            } else if (blogNav.getBoundingClientRect().top > 20) {
                navList.classList.remove('active');
            }
        },
        menuData() {

            for (let i = 0; i < navLength; i++) {
                if ((articleItems[i].getBoundingClientRect().top - 200) < 0 && (articleItems[i].getBoundingClientRect().bottom - 200 ) > 0) {
                    if (navItems[i].getAttribute('data-name') === articleItems[i].getAttribute('data-name')) {
                        navItems[i].classList.add('active');
                    }
                } else {
                    navItems[i].classList.remove('active');                    
                }
            }
        },
        menuClick(clickBtn) {
            const scrollInterval = setInterval(scrollAnim, 10);
            function scrollAnim() {
                for (let i = 0; i < navLength; i++) {
                    if (clickBtn.parentNode.getAttribute('data-name') === articleItems[i].getAttribute('data-name')) {
                       if ((articleItems[i].getBoundingClientRect().top - 200) > 0 ) {
                            setTimeout(scrollAnim, 10)
                            window.scrollBy(0, 30);
                            clearInterval(scrollInterval);
                       } else if (articleItems[i].getBoundingClientRect().top <= 0) {
                            setTimeout(scrollAnim, 10)
                            window.scrollBy(0, -30);
                            clearInterval(scrollInterval);
                       }
                    }
                }  
            }
        },
        menuTablets() {
            if (!blogMenu.classList.contains('active')) {
                blogMenu.classList.add('active');
                if (pageYOffset <= 600) {
                    navList.children[0].classList.add('active');                    
                }
            } else {
                blogMenu.classList.remove('active');
                navList.children[0].classList.remove('active');
            }
        }
    }
}