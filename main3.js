var canvas      = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
// canvas.width    = document.body.clientWidth;
// canvas.height   = document.body.clientHeight;
canvas.style.width = canvas.width + "px";
canvas.style.height = canvas.height + "px";
input.offset = new Vector2(GetLeft(canvas),GetTop(canvas));

var rects = new Array();

function GenerateRect()
{
    var r = new Rectangle(Math.random() * 450, Math.random() * 450, 50, 50);

    r.color = new Color(Math.random() * 255, Math.random() * 255 , Math.random() * 255, 1);

    rects.push(r);
}

var Update = setInterval(function()
{
    
}, 1);

var Draw = setInterval(function()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < rects.length; i++)
    {
        rects[i].Draw(ctx);
    }
}, 1);