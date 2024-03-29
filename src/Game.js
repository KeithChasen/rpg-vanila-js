class Game {
    cnv = null;
    ctx = null;

    controller = null;

    player = null;

    npcs = [];

    map = null;

    // currentFrame = 0;

    init(cnv, ctx) {
        this.cnv = cnv;
        this.ctx = ctx;

        // make this conditional
        const level = levelMaps.main;

        const { 
            player, 
            walls, 
            squareSize, 
            mapSize, 
            lowerImage, 
            topImage, 
            npc 
        } = level;

        this.map = new GameMap();
  
        this.map.setMapSize(mapSize);
        this.map.setSquareSize(squareSize);

        this.map.setCanvas(cnv);
        this.map.setContext(ctx);

        this.map.setLower(lowerImage);
        this.map.setUpper(topImage);

        this.map.setWalls(walls)

        this.spawnPlayer(player.x, player.y);

        if (npc.length) {
            npc.forEach(n => {
                const npc = new NPC(n.name, n.color);

                npc.setCanvas(this.cnv);
                npc.setContext(this.ctx);

                npc.setPosition(n.position.x, n.position.y);

                npc.setSquareSize(this.map.squareSize);

                npc.setPlayer(this.player)

                this.npcs.push(npc);

                this.map.addWall(`${npc.position.x}-${npc.position.y}`);
            })
        }
    }

    sRender() {
        this.map.drawLower();

        this.npcs.forEach(n => n.draw());

        this.player.draw();

        this.map.drawUpper();
    }

    spawnPlayer(x, y) {
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

        this.map.setPlayer(this.player);
    }

    run(controls) {
        this.sRender();
        
        this.player.update(this.map, controls);
       
        // this.currentFrame++;
    }
}