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

    whereToPlace = {
        x: 0,
        y: 0
    }

    player = null;

    setContext(ctx) {
        this.ctx = ctx;
    }

    setCanvas(cnv) {
        this.cnv = cnv;

        this.xDim = this.mapSize.x * this.squareSize;
        this.yDim = this.mapSize.y * this.squareSize;

        this.whereToPlace = {
            x: cnv.width / 2,
            y: cnv.height / 2
        }
    }

    setPlayer(player) {
        this.player = player
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
            this.drawInMovement(this.lowerPicture);   
    }

    drawUpper() {
        this.ctx && this.upperPicture &&
            this.drawInMovement(this.upperPicture);
    }

    drawInMovement(image) {
        this.ctx.drawImage(
            image,

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
           this.whereToPlace.x - this.player.x,
           this.whereToPlace.y - this.player.y,

           // wOfImageToUse
           // hOfImageToUse
           this.xDim,
           this.yDim,
       );
    }
}