var canvas      = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
// canvas.width    = document.body.clientWidth;
// canvas.height   = document.body.clientHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";
input.offset = new Vector2(GetLeft(canvas),GetTop(canvas));

var floor = new Rectangle(0, 400, 400, 20);
floor.color = new Color(0, 0, 0, 1);

var player = new Rectangle(15, 15, 20, 20);
player.color.r = 128;
player.color.g = 0;

var gravity = 3;

var Update = setInterval(function()
{
    player.y += gravity;

    if (floor.Intersects(player))
        player.y = floor.y - player.height;

}, 1);

var Draw = setInterval(function()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    floor.Draw(ctx);
    player.Draw(ctx);
}, 1);