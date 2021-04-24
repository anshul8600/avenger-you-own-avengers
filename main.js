
canvas=new fabric.Canvas("myCanvas");
playerX=10;
playerY=10;
blockwidth=30;
blockheight=30;
var player="";
var block="";
function player_update()
{
fabric.Image.fromURL("player.png", function(Img)
{
player=Img;
player.scaleToWidth(150);
player.scaleToHeight(150);
player.set({
    top:playerY, left:playerX
});
canvas.add(player);
}
);
}
function new_image(get_image){
fabric.Image.fromURL(get_image, function(Img)
{
    block=Img;
block.scaleToWidth(blockwidth);
block.scaleToHeight(blockheight);
block.set({
top:playerY, left:playerX
});
canvas.add(block);
}
);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keypress=e.keyCode;
console.log(keypress);
if(keypress=='70'){
new_image('hulk_face.png');
console.log("f");
}
if(keypress=='66'){
    new_image('hulkd_body.png');
    console.log("b");
    }
if(keypress=='76'){
new_image('hulk_legs.png');
console.log("l");
        }
if(keypress=='82'){
new_image('hulk_right_hand.png');
console.log("r");
            }
if(keypress=='72'){
new_image('hulk_left_hand.png');
 console.log("h");
                }
                if(keypress=='38'){
                    up();
                    console.log("up");
                    }
                    if(keypress=='40'){
                        down();
                        console.log("down");
                        }
                        if(keypress=='37'){
                            left();
                            console.log("left");
                            }
                            if(keypress=='39'){
                                right();
                                console.log("right");
                                }
}
function up(){
if(playerY>=0)
{
playerY=playerY-10;
canvas.remove(player);
player_update();
}
}

function down(){
    if(playerY<=500)
    {
    playerY=playerY+10;
    canvas.remove(player);
    player_update();
    }
    }

    function left(){
        if(playerX>=0)
        {
        playerX=playerX-10;
        canvas.remove(player);
        player_update();
        }
        }

        function right(){
            if(playerX<=850)
            {
            playerX=playerX+10;
            canvas.remove(player);
            player_update();
            }
            }