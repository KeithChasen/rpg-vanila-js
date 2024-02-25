class Menu extends Scene {
    doAction(action) {
        if (action === 'up') {
            // go up in the menu
        }

        if (action === 'down') {
            // go down in the menu
        }

        if (action === 'select') {
            // select item in menu
            // change scene

            //! this.gameEngine.changeScene();
        }
    }

    run() {
        if (!this.ctx) return ;
        
        this.ctx.beginPath();
        this.ctx.rect(
            this.cnv.width / 4,
            this.cnv.height / 4,

            this.cnv.width / 4,
            this.cnv.height / 4,
        );
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
    }
}