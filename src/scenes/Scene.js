class Scene {
    gameEngine;
    cnv;
    ctx;

    constructor(canvas, context, gameEngine) {
        this.gameEngine = gameEngine;
        this.cnv = canvas;
        this.ctx = context;
    }
}