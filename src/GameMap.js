class GameMap {
    lowerPicture = null;
    upperPicture = null;
    ctx = null;
    cnv = null;

    // the size of a 1 tile of a map
    //should be configurable
    squareSize = 32;

    // size of the current map
    // should be configurable
    mapSize = { x:20, y:12 };

    xDim = 0;
    yDim = 0;

    setContext(ctx) {
        this.ctx = ctx;
    }

    setCanvas(cnv) {
        this.cnv = cnv;

        this.xDim = this.mapSize.x * this.squareSize;
        this.yDim = this.mapSize.y * this.squareSize;
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

            this.ctx.drawImage(
                this.lowerPicture, 

                // this should depend on player position
                // xStartClip, 
                // yStartClip
                0, 
                0,

                // xWidthOfClipped
                // yWidthOfClipped
                this.xDim,
                this.yDim,

            
                // xWherePlace
                // yWherePlace
                0,
                0,

                // wOfImageToUse
                // hOfImageToUse
                this.cnv.width, 
                this.cnv.height 
            );
    }

    drawUpper() {
        this.ctx && this.upperPicture &&
        this.ctx.drawImage(this.upperPicture, 0, 0);
    }
}