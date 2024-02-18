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

        // make this conditional
        const level = levelMaps.main;

        const { player, walls, squareSize, mapSize, lowerImage, topImage } =  level;

        console.log(walls, 'w')

        this.map = new GameMap();
  
        this.map.setMapSize(mapSize);
        this.map.setSquareSize(squareSize);

        this.map.setCanvas(cnv);
        this.map.setContext(ctx);

        this.map.setLower(lowerImage);
        this.map.setUpper(topImage);

        this.spawnPlayer(player.x, player.y, walls);
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

    spawnPlayer(x, y, walls) {
        const mapBorders = {
            x: this.map.mapSize.x * this.map.squareSize,
            y: this.map.mapSize.y * this.map.squareSize,
        }

        // load coordinates of player from config or save file
        this.player = new Player();
        this.player.setPosition(
            x * this.map.squareSize, 
            y * this.map.squareSize
        );
        this.player.setCanvas(this.cnv);
        this.player.setContext(this.ctx);
        this.player.setMapBorders(mapBorders);
        this.player.setSquareSize(this.map.squareSize);
        this.player.setWalls(walls);
            

            // mapBorders,
            // walls
        // );

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