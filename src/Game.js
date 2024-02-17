class Game {
    cnv = null;
    ctx = null;

    controller = null;

    player = null;

    currentFrame = 0;

    init(cnv, ctx) {
        this.cnv = cnv;
        this.ctx = ctx;

        this.spawnPlayer();
    }

    playerMovement() {

    }

    npcMovement() {

    }

    enemyMovement() {

    }

    sRender() {

    }

    sCollision() {
        // process collisions here
    }

    spawnPlayer() {
        // load coordinates of player from config or save file
        this.player = new Player(100, 100, this.ctx);
    }

    spawnNPCs() {

    }

    spawnEnemies() {

    }

    run() {

        this.player.draw();
        this.player.update();
       
        this.currentFrame++;
    }
}