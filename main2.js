var canvas      = document.getElementById("canvas");
// canvas.width    = document.body.clientWidth;
// canvas.height   = document.body.clientHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";


var ctx = canvas.getContext('2d');

input.offset = new Vector2(GetLeft(canvas),GetTop(canvas));

var anim = new Animation(16, 16, 0, 0, 8, "./sprite.png", 12, 4, 5);
anim.position.Set(50,50);

setInterval(function()
{
    if (input.d)
        anim.SetRow(0);
    else if (input.a)
        anim.SetRow(2);

    if (input.a)
        anim.position.Move(new Vector2(-0.5, 0))
    else if (input.d)
        anim.position.Move(new Vector2(0.5, 0))
    else if (input.w)
        anim.position.Move(new Vector2(0, -0.5))
    else if (input.s)
        anim.position.Move(new Vector2(0, 0.5)) 
        
    anim.Update();    
}, 1);

setInterval(function()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);

    anim.Draw(ctx);
}, 33);