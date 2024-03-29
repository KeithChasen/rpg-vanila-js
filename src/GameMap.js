class GameMap {
    lowerPicture = null;
    upperPicture = null;

    ctx = null;
    cnv = null;

    walls = [];

    setWalls(walls) {
        this.walls = walls;
    }

    addWall(wall) {
        this.walls.push(wall);
    }

    removeWall(wall) {
        //todo: implement
    }

    moveWall(wall) {
        //todo: implement
    }

    isWall(coordinate) {
        return this.walls.includes(coordinate)
    }

    // the size of a 1 tile of a map
    //should be configurable
    squareSize = 0;

    // size of the current map
    // should be configurable
    mapSize = { x: 0, y: 0 };

    xDim = 0;
    yDim = 0;

    whereToPlace = {
        x: 0,
        y: 0
    }

    player = null;

    setSquareSize(squareSize) {
        this.squareSize = squareSize;
    }

    setMapSize(mapSize) {
        this.mapSize = mapSize;
    }

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
        // console.log({
        //     x: this.whereToPlace.x,
        //     y: this.whereToPlace.y
        // })

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
           this.whereToPlace.x - this.player.position.x,
           this.whereToPlace.y - this.player.position.y,

           // wOfImageToUse
           // hOfImageToUse
           this.xDim,
           this.yDim,
       );
    }
}