var $menu_li = $('.main-menu>.menu-ul li');
var $submenu_item = $('.main-menu>.submenu .submenu-item');

console.log($menu_li + " " + $submenu_item.length);

for(var i = 0; i < $menu_li.length; i++){
    $menu_li[i].index = i;
    $submenu_item.index = i;
    $menu_li.eq(i).on('mouseenter', function () {
        $submenu_item.eq(this.index).parent().css('display', 'block');
        $submenu_item.eq(this.index).css('display', 'block');
    })

    $menu_li.eq(i).on('mouseleave', function () {
        $submenu_item.eq(this.index).parent().css('display', 'none');
        $submenu_item.eq(this.index).css('display', 'none');
    })
    $submenu_item.on('mouseenter', function () {
        $submenu_item.eq(this.index).parent().css('display', 'block');
        $submenu_item.eq(this.index).css('display', 'block');
    })
}