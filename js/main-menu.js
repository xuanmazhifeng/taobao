var menu_li = $('.main-menu>.menu-ul li');
var submenu_item = $('.main-menu>.submenu .submenu-item');
var submenu = submenu_item.parent();
var main_menu = $('.main-menu');

console.log(menu_li + " " + submenu_item.length);

for(var i = 0; i < menu_li.length; i++){
    menu_li[i].index = i;
    submenu_item.index = i;
    menu_li.eq(i).on('mouseenter', function () {
        for(var i = 0; i < submenu_item.length; i++){
            if(this.index != i){
                submenu_item.eq(i).css('display', 'none');
            }
        }
        submenu.css('display', 'block');
        submenu_item.eq(this.index).css('display', 'block');
    })

    main_menu.on('mouseleave', function () {
        submenu.css('display', 'none');
    })
}