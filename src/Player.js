class Player extends Person {
    controllers = null;
    mapBorders = null;
    squareSize = 0;
    walls = [];

    constructor() {
        super();
        this.controllers = new Controllers();
    }

    setSquareSize(squareSize){
        this.squareSize = squareSize;
    }

    setMapBorders(mapBorders) {
        this.mapBorders = mapBorders;
    }

    setWalls(walls) {
        this.walls = walls;
    }

    update() {
        this.velocity = new Vector(0, 0);

        if (this.controllers.up && this.position.y > 0) {
            this.velocity = new Vector(
                this.velocity.x,
                this.velocity.y - this.speed
            )
        }

        if (this.controllers.down && this.position.y < this.mapBorders.y - this.h) {
            this.velocity = new Vector(
                this.velocity.x,
                this.velocity.y + this.speed
            )
        }

        if (this.controllers.left && this.position.x > 0) {
            this.velocity = new Vector(
                this.velocity.x - this.speed,
                this.velocity.y
            )
        }

        if (this.controllers.right && this.position.x < this.mapBorders.x - this.w) {
            this.velocity = new Vector(
                this.velocity.x + this.speed,
                this.velocity.y
            )
        }

        this.velocity.normalize();

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
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