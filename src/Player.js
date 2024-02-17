class Player extends Person {
    controllers = null;

    constructor(x,y, ctx) {
        super(x,y, ctx);

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

}