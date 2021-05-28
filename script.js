$(document).ready(function() {
    $('.header__menu-burger').click(function (event) {
        $('.header__menu-burger, .header__menu-block, .header__menu, .header__menu__acc, .header__menu__cart').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

//$(document).ready(function() {
//    $('.filter__title').click(function (event) {
//        $('.filter-head, .filter__icon, .filter-menu-list').toggleClass('active');
//    });
//});

$(document).ready(function() {
    $('.filter__right-item').click(function (event) {
        $('.filter__size-box').toggleClass('active');
    });
});

