export let nav = {
    navigation: document.querySelector('.navigation'),    
    navBut: document.querySelector('.navigation__but'),
    navList: document.querySelector('.navigation__list'),
    headerInfo: document.querySelector('.header-info'),
    delay: "1",

    navActive: function() {
        if (this.navigation.classList.contains('active')) {
            this.navigation.classList.remove('active');
            this.navBut.classList.remove('active');
            this.navList.classList.remove('active');
            document.body.style.overflow = "inherit";            
            this.headerInfo.style.opacity = '1';
        } else {
            this.navigation.classList.add('active');
            this.navList.classList.add('active');
            this.navBut.classList.add('active');            
            document.body.style.overflow = "hidden";
            this.headerInfo.style.opacity = '0';
            
        }
    }
}