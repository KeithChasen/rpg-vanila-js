class NPC extends Person {
    name = '';
    color = 'red';

    player = null;

    showQuest = false;

    constructor(name, color) {
        super()
        this.name = name;
        this.color = color;
    }

    setPlayer(player) {
        this.player = player
    }

    calculatePosition() {

        const npcX = this.position.x;
        const npcY = this.position.y;

        const playerX = ~~ (this.player.position.x / this.squareSize);
        const playerY = ~~ (this.player.position.y / this.squareSize);

        if (
            (npcX == playerX && (npcY === playerY || npcY === playerY-1 || npcY === playerY+1)) ||
            (npcY == playerY && (npcX === playerX || npcX === playerX-1 || npcX === playerX+1))
        ) {
            this.showQuest = true;
        } else if (this.showQuest) {
            this.showQuest = false;
        }

        // initially place npcs in the middle of the screen as the hero and the map
        // this.cnv.width / 2
        // this.cnv.height / 2
        const xMiddlePart = this.cnv.width / 2;
        const yMiddlePart = this.cnv.height / 2;

        // next -> add x,y npc coordinates from config and multiple by "squareSize"
        const resizedNativeX = this.position.x * this.squareSize;
        const resizedNativeY = this.position.y * this.squareSize;

        // finally -> move npcs on the screen together with map when player is moving 
        // (make it depend on player's position)
        // (x - this.player.position.x)
        // (y - this.player.position.y)
        const x = xMiddlePart + resizedNativeX - this.player.position.x;
        const y = yMiddlePart + resizedNativeY - this.player.position.y;

        return { x, y };
    }

    draw() {
        if (!this.ctx) return ;

        const { x, y } = this.calculatePosition();

        if (this.showQuest) {
            this.ctx.beginPath();
            this.ctx.rect(
                x+5,
                y-15,
                this.w - 10,
                this.h - 5
            );
            this.ctx.fillStyle = 'yellow';
            this.ctx.fill();
        }
        
        this.ctx.beginPath();
        this.ctx.rect(
            x,
            y,
            this.w,
            this.h
        );
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
}