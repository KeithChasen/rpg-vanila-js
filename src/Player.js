class Player extends Person {
    controllers = null;

    update(map, controls) {
        this.velocity = new Vector(0, 0);

        if (
            controls.up && this.position.y > 0
        ) {
            const vectorToCheck = {
                x: Math.round(this.position.x / this.squareSize),
                y: Math.round((this.position.y - 2) / this.squareSize)
            }

            if (!map.isWall(`${vectorToCheck.x}-${vectorToCheck.y}`)) {
                this.velocity = new Vector(
                    this.velocity.x,
                    this.velocity.y - this.speed
                )
            }   
        }

        if (controls.down && this.position.y < this.mapBorders.y - this.h) {
            const vectorToCheck = {
                x: Math.round(this.position.x / this.squareSize),
                y: Math.round((this.position.y + 2) / this.squareSize)
            }

            if (!map.isWall(`${vectorToCheck.x}-${vectorToCheck.y}`)) {
                this.velocity = new Vector(
                    this.velocity.x,
                    this.velocity.y + this.speed
                )
            }
        }

        if (controls.left && this.position.x > 0) {
            const vectorToCheck = {
                x: Math.round((this.position.x - 2) / this.squareSize),
                y: Math.round((this.position.y) / this.squareSize)
            }

            if (!map.isWall(`${vectorToCheck.x}-${vectorToCheck.y}`)) {
                this.velocity = new Vector(
                    this.velocity.x - this.speed,
                    this.velocity.y
                )
            }
        }

        if (controls.right && this.position.x < this.mapBorders.x - this.w) {
            const vectorToCheck = {
                x: Math.round((this.position.x + 2) / this.squareSize),
                y: Math.round((this.position.y) / this.squareSize)
            }

            if (!map.isWall(`${vectorToCheck.x}-${vectorToCheck.y}`)) {
                this.velocity = new Vector(
                    this.velocity.x + this.speed,
                    this.velocity.y
                )
            }
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
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
    }

}