class Menu extends Scene {

    button1 = { x: 0, y: 0, w: 0, h: 0, selected: false };
    button2 = { x: 0, y: 0, w: 0, h: 0, selected: false };
    button3 = { x: 0, y: 0, w: 0, h: 0, selected: false };

    constructor(canvas, context, engine) {
        super(canvas, context, engine);

        const cnvW = this.cnv.width;
        const cnvH = this.cnv.height;

        this.button1 = {
            x: cnvW / 3 + 10,
            y: cnvH / 4 + 10,
            w: cnvW / 4 - 20,
            h: cnvH / 10,
            color: 'white',
            selected: false
        };

        this.button2 = {
            x: cnvW / 3 + 10,
            y: cnvH / 4 + 10 + 100,
            w: cnvW / 4 - 20,
            h: cnvH / 10,
            color: 'white', 
            selected: false
        }

        this.button3 = {
            x: cnvW / 3 + 10,
            y: cnvH / 4 + 10 + 200,
            w: cnvW / 4 - 20,
            h: cnvH / 10,
            color: 'white', 
            selected: false
        }

        this.addEventListeners();
    }

    controlButton(e, button) {
        if (
            e.clientX > button.x && e.clientX < button.x + button.w
            && e.clientY > button.y && e.clientY < button.y + button.h
        ) {
            button.color = 'grey'
            button.selected = true;
        } else {
            if (button.color !== 'white') {
                button.color = 'white'
            }

            if (button.selected) {
                button.selected = false;
            }
        } 
    }

    addEventListeners() {
        document.onmousemove = e => {
            this.controlButton(e, this.button1);
            this.controlButton(e, this.button2);
            this.controlButton(e, this.button3);
        }

        document.onmousedown = () => {
            if (this.button1.selected) {
                console.log('start game')

                this.gameEngine.changeScene('game');
            }
        }
        document.onmouseup = () => {}
    }

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

    drawMenuButton({ x, y, w, h, color }) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, w, h);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

    run() {
        if (!this.ctx) return;

        const cnvW = this.cnv.width;
        const cnvH = this.cnv.height;
        
        this.ctx.beginPath();
        this.ctx.rect(
            cnvW / 3,
            cnvH / 4,
            cnvW / 4,
            cnvH / 2,
        );
        this.ctx.fillStyle = 'black';
        this.ctx.fill();

        this.drawMenuButton(this.button1);
        this.drawMenuButton(this.button2);
        this.drawMenuButton(this.button3);
    }
}