class Person {
    position = new Vector(0, 0);
    velocity = new Vector(0, 0);
    speed = 2;

    mapBorders = null;
    squareSize = 0;

    setSquareSize(squareSize){
        this.squareSize = squareSize;
    }

    setMapBorders(mapBorders) {
        this.mapBorders = mapBorders;
    }

    w = 20;
    h = 20;

    ctx = null;
    cnv = null;

    setPosition(x, y) {
        this.position = new Vector(x, y);
    }

    setCanvas(cnv) {
        this.cnv = cnv;
    }

    setContext(ctx) {
        this.ctx = ctx;
    }  
}