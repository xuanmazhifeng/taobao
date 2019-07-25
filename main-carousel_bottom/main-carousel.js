$(document).ready(function () {
    var left_buttom = $('.nav-left');
    var right_buttom = $('.nav-right');
    var img_list = $('.img-list');
    var nav_list = $('.navlist li');
    var nav_index = $('.nav-index');


    for (var i = 0; i < nav_list.length; i++) {
        nav_list[i].index = i;
        nav_list.eq(i).on('click', function () {
            ShowMainByIndex((this.index + 1) * -520);
        })
    }

    left_buttom.on('click', function () {
        ShowMainByIndex(mainLeft + 520);
    });

    right_buttom.on('click', function () {
        ShowMainByIndex(mainLeft - 520);
    })

    var nowMainLeft = -520;//当前
    var mainLeft = -520;//将要显示
    var moveSpeed = 10;//移动速度
    var Speed;
    function ShowMainByIndex(left) {
        mainLeft = left;
        Speed = Math.abs((Math.abs(nowMainLeft) - Math.abs(mainLeft))) / 10;
        if (moveItv == null) {
            //console.log("mainLeft:" + mainLeft + "nowMainLeft:" + nowMainLeft);
            moveItv = setInterval(MoveMainLeft, moveSpeed);
        }
    }

    var moveItv;

    function MoveMainLeft() {
        if (nowMainLeft < mainLeft) {
            nowMainLeft += Speed;
        } else if (nowMainLeft > mainLeft) {
            nowMainLeft -= Speed;
        }

        img_list.css('left', nowMainLeft + 'px');

        if (mainLeft >= 0 || mainLeft <= -3640) {
            if (nowMainLeft < -3640 + Speed) {
                nowMainLeft = -520;
                if (mainLeft == -3640) {
                    mainLeft = -520;
                } else if (mainLeft < -3640) {
                    mainLeft += 3120;
                }
            }
            if (nowMainLeft > 0 - Speed) {
                nowMainLeft = -3120;
                if (mainLeft == 0) {
                    mainLeft = -3120;
                } else if (mainLeft > 0) {
                    mainLeft -= 3120;
                }
            }
        }


        if (nowMainLeft < mainLeft + Speed && nowMainLeft > mainLeft - Speed) {
            nowMainLeft = mainLeft;
            img_list.css('left', nowMainLeft + 'px');

            for (var i = 0; i < nav_list.length; i++) {
                if (nav_list.eq(i).hasClass('active')) {
                    nav_list.eq(i).removeClass('active');
                }
            }
            nav_list.eq((nowMainLeft / -520) - 1).addClass('active');
            nav_index.text(nowMainLeft / -520);
            clearInterval(moveItv);
            moveItv = null;
        }
    }

    //计时器 自动切换
    var time = 0;
    var isHover = false;

    $('.main').on('mouseover', function () {
        time = 0;
        isHover = true;
    })
    $('.main').on('mouseleave', function () {
        isHover = false;
    })

    setInterval(() => {
        if (isHover == false) {
            time++;
            if (time >= 3) {
                time = 0;
                right_buttom.click();
            }
        }
    }, 1000);
});