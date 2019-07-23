var left_buttom = $('.nav-left');
var right_buttom = $('.nav-right');
var img_list = $('.img_list');
var nav_list = $('.nav-list li');


left_buttom.on('click', function(){
    ShowMainByIndex(520);
});

right_buttom.on('click',function(){
    ShowMainByIndex(-520);
})

var nowMainLeft = -520;//当前
var mainLeft = -520;//将要显示
var moveSpeed = 10;//移动速度
var Speed;
function ShowMainByIndex(index){
    mainLeft += index;
    Speed = Math.abs((Math.abs(nowMainLeft) - Math.abs(mainLeft)))/10;
    if(moveItv == null){
        console.log("mainLeft:" + mainLeft + "nowMainLeft:" + nowMainLeft);
        moveItv = setInterval(MoveMainLeft, moveSpeed);
    }
}

var moveItv;

function MoveMainLeft(){
    if(nowMainLeft < mainLeft){
        nowMainLeft += Speed;
    }else if(nowMainLeft > mainLeft){
        nowMainLeft -= Speed;
    }

    img_list.css('left', nowMainLeft + 'px');

    if (mainLeft >= 0 || mainLeft <= -3120) {
        if (nowMainLeft < -3120 + Speed) {
            nowMainLeft = -520;
            if (mainLeft == -3120) {
                mainLeft = -520;
            } else if (mainLeft < -3120) {
                mainLeft += 2600;
            }
        }
        if(nowMainLeft > 0 - Speed){
            nowMainLeft = -2600;
            if (mainLeft == 0) {
                mainLeft = -2600;
            } else if (mainLeft > 0) {
                mainLeft -= 2600;
            }
        }
    }


    if(nowMainLeft < mainLeft + Speed && nowMainLeft > mainLeft - Speed){
        nowMainLeft = mainLeft;
        img_list.css('left', nowMainLeft + 'px');
        
        for(var i = 0; i < nav_list.length; i++){
            // if(nav_list[i].hasClass('active')){
                
            // }
            console.log(nav_list[i]);
            alert(nav_list[i].hasClass('active'));
        }
        nav_list[(nowMainLeft/-520) - 1].addClass('active'); 

        clearInterval(moveItv);
        moveItv = null;
    }


}