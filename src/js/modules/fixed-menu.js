export let nav = {
    navigation: document.querySelector('.navigation'),    
    navBut: document.querySelector('.navigation__but'),
    navItems: document.getElementsByClassName('navigation__item'),
    headerInfo: document.querySelector('.header-info'),

    navActive: function() {
        var delay = 0.1;
        if (!this.navigation.classList.contains('active')) {
            this.navigation.classList.add('active');
            this.navBut.classList.add('active');            
            document.body.style.overflow = "hidden";
            this.headerInfo.style.opacity = '0';
            for (var i = 0; i < this.navItems.length; i++) {
                delay += 0.1
                this.navItems[i].style.animationDelay = delay + 's'              
                this.navItems[i].classList.add('active');
            }
        } else {
            this.navigation.classList.remove('active');
            this.navBut.classList.remove('active');            
            document.body.style.overflow = "inherit";            
            this.headerInfo.style.opacity = '1';
            for (var i = 0; i < this.navItems.length; i++) {
                this.navItems[i].classList.remove('active');
            }
        }
    }
}