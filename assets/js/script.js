function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
   } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
    if (!menuMobile.classList.contains('open')) {
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    }       
}     

    