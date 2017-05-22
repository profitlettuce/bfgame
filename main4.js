var canvas      = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
// canvas.width    = document.body.clientWidth;
// canvas.height   = document.body.clientHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";
input.offset = new Vector2(GetLeft(canvas),GetTop(canvas));

var player = new Player();

var floor = new Array();
floor.push(new Rectangle(0, 400, 400, 20));
floor.push(new Rectangle(100, 350, 20, 20));

for (var i = 0; i < floor.length; i++)
    floor[i].color = new Color(0, 0, 0, 1);

var Update = setInterval(function()
{
    player.Update();

    var collided = false;
    for (var i = 0; i < floor.length; i++)
    {
        if (floor[i].Intersects(player.rect))
        {
            player.SetPosition(null, floor[i].y - player.rect.height);
            player.jumpAvailable = true;
            collided = true;
            break;  
        }
    }

    if (!collided)
    {
        player.jumpAvailable = false;
    }

    // if (!player.jumping)
    // {

    // }
    
    // if (floor.Intersects(player.rect) && !player.jumping)
    // {
    //     player.SetPosition(null, floor.y - player.rect.height);
    //     player.jumpAvailable = true;
    // }
    // else
    //     player.jumpAvailable = false;
}, 1);

var Draw = setInterval(function()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < floor.length; i++)
        floor[i].Draw(ctx);

    player.Draw(ctx);
}, 1);