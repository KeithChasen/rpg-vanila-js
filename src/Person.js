class Person {

    x = 0;
    y = 0;

    w = 20;
    h = 20;

    speed = 1;

    ctx = null;

    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }


    draw() {
        if (!this.ctx) return ;
        
        this.ctx.beginPath();
        this.ctx.rect(
            this.x - this.w/2,
            this.y - this.h/2,
            this.w,
            this.h
        );
        this.ctx.fill();
    }
}