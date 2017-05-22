Player = function()
{
    this.rect = new Rectangle(0, 0, 20, 20);
    this.rect.color = new Color (0, 0, 255, 1);
    
    this.animation = new Animation(16, 16, 0, 0, 8, "./sprite.png", 12, 4, 5);

    var gravity = 2;

    this.moving = false;

    this.jumpAvailable = false;
    this.jumping = false;
    this.JUMP_MAX = 2
    this.jumpVelocity = 0;

    this.SetPosition = function(x, y, mod)
    {
        if (mod == null || !mod)
        {
            if (x != null)
                this.rect.x = x;
            if (y != null)
                this.rect.y = y;
        }
        else
        {
            if (x != null)
                this.rect.x += x;
            if (y != null)
                this.rect.y += y;
        }
    }

    this.Update = function()
    {
        this.moving = false;
        
        if (input.a)
        {
            this.animation.SetRow(2);
            this.rect.x -= 1;
            this.moving = true;
        }
        if (input.d)
        {
            this.animation.SetRow(0);
            this.rect.x += 1;
            this.moving = true;
        }
        if (input.w)
        {
            this.Jump();
        }
        if (this.jumping)
        {
            this.rect.y -= this.jumpVelocity;
            this.jumpVelocity -= 0.02;

            if (this.jumpVelocity <= 0)
            {
                this.jumping = false;
                this.jumpAvailable = true;
            }
        }
        else
            this.rect.y += gravity;

        if (this.rect.x < 0)
            this.rect.x = 0;
        if (this.rect.y < 0)
            this.rect.y = 0;

        this.animation.position.Set(this.rect.x, this.rect.y);

        if (this.moving)
            this.animation.Update();
        else
            this.animation.setColumn(0);
    }

    this.Jump = function()
    {
        if (this.jumpAvailable)
        {
            this.jumpVelocity = this.JUMP_MAX;
            this.jumping = true;
        }
    }

    this.Draw = function(ctx)
    {
        // this.rect.Draw(ctx);
        this.animation.Draw(ctx);
    }
}