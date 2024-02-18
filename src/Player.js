class Player extends Person {
    controllers = null;
    mapBorders = null;

    constructor(x,y, ctx, cnv, mapBorders) {
        super(x,y, ctx, cnv);

        this.mapBorders = mapBorders;

        this.controllers = new Controllers();
    }

    update() {

        // console.log(this.x, this.y)

        if (this.controllers.up && this.y > 0) {
            this.y -= this.speed;
        }

        if (this.controllers.down && this.y < this.mapBorders.y - this.h) {
            this.y += this.speed;
        }

        if (this.controllers.left && this.x > 0) {
            this.x -= this.speed;
        }

        if (this.controllers.right && this.x < this.mapBorders.x - this.w) {
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