class Game {
    cnv = null;
    ctx = null;

    controller = null;

    player = null;

    map = null;

    currentFrame = 0;

    init(cnv, ctx) {
        this.cnv = cnv;
        this.ctx = ctx;

        this.map = new GameMap();
  
        this.map.setCanvas(cnv);
        this.map.setContext(ctx);
        this.map.setLower('src/img/test-map-bottom.png');
        this.map.setUpper('src/img/test-map-top.png');

        this.spawnPlayer();
    }

    playerMovement() {

    }

    npcMovement() {

    }

    enemyMovement() {

    }

    sRender() {
        this.map.drawLower();

        this.player.draw();

        this.map.drawUpper();
    }

    sCollision() {
        // process collisions here
    }

    spawnPlayer() {
        // load coordinates of player from config or save file
        this.player = new Player(100, 100, this.ctx, this.cnv);

        this.map.setPlayer(this.player);
    }

    spawnNPCs() {

    }

    spawnEnemies() {

    }

    run() {


        this.sRender();
        
        this.player.update();
       
        this.currentFrame++;
    }
}