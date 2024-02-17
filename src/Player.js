class Player extends Person {
    controllers = null;

    constructor(x,y, ctx, cnv) {
        super(x,y, ctx, cnv);

        this.controllers = new Controllers();
    }

    update() {
        if (this.controllers.up) {
            this.y -= this.speed;
        }

        if (this.controllers.down) {
            this.y += this.speed;
        }

        if (this.controllers.left) {
            this.x -= this.speed;
        }

        if (this.controllers.right) {
            this.x += this.speed;
        }
    }

    draw() {
        if (!this.ctx) return ;
        
        this.ctx.beginPath();
        this.ctx.rect(
            this.cnv.width / 2,
            this.cnv.height / 2,
            this.w,
            this.h
        );
        this.ctx.fill();
    }

}