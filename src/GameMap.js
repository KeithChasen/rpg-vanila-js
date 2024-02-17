class GameMap {
    lowerPicture = null;
    upperPicture = null;
    ctx = null;

    setContext(ctx) {
        this.ctx = ctx;
    }

    setLower(source) {
        this.lowerPicture = new Image();
        this.lowerPicture.src = source;
    }

    setUpper(source) {
        this.upperPicture = new Image();
        this.upperPicture.src = source;
    }

    drawLower() {
        this.ctx && this.lowerPicture &&
            this.ctx.drawImage(this.lowerPicture, 0, 0);
    }

    drawUpper() {
        this.ctx && this.upperPicture &&
        this.ctx.drawImage(this.upperPicture, 0, 0);
    }
}