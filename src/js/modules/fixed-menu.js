export const nav = function() {
    const
        navigation = document.querySelector('.navigation'),    
        navItems = document.getElementsByClassName('navigation__item'),
        headerInfo = document.querySelector('.header-info');

    return {
        navActive: function(navBtn) {
            var delay = 0.1;
            if (!navigation.classList.contains('active')) {
                navigation.classList.add('active');
                navBtn.classList.add('active');            
                document.body.style.overflow = "hidden";
                headerInfo.style.opacity = '0';
                for (let i = 0; i < navItems.length; i++) {
                    delay += 0.1;
                    navItems[i].style.animationDelay = delay + 's';             
                    navItems[i].classList.add('active');
                }
            } else {
                navigation.classList.remove('active');
                navBtn.classList.remove('active');            
                document.body.style.overflow = "inherit";            
                headerInfo.style.opacity = '1';
                for (let i = 0; i < navItems.length; i++) {
                    navItems[i].classList.remove('active');
                }
            }
        }
    }
}