var canvas      = document.getElementById("canvas");
canvas.width    = document.body.clientWidth;
canvas.height   = document.body.clientHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";

var ctx = canvas.getContext('2d');

var rect = new Rectangle(15,15,50,50);
rect.color = new Color(255, 0, 0 , 1);
var rect2 = new Rectangle(80,15,50,50);
rect2.color = new Color(0, 255, 0 , 1);
var rect3 = new Rectangle(150,15,50,50);
rect3.color = new Color(0, 0, 255, 1);

var rect4 = new Rectangle(40,40,50,50);
rect4.color = new Color(0, 0, 255 , 0.5);

var movement = -1;

var img = new Image();
img.src = "http://www.shellbacksecurity.com/favicon.ico";


setInterval(function()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    rect.Draw(ctx);
    rect2.Draw(ctx);
    rect3.Draw(ctx);
    rect4.Draw(ctx);

    rect2.x += movement;

    ctx.drawImage(img, 0,0,50,50,100, 100, 50, 50);

    if (rect2.Intersects(rect) || rect2.Intersects(rect3))
        movement *= -1;

}, 33);