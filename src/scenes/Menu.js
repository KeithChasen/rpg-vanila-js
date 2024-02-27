class Menu extends Scene {

    button1 = { x: 0, y: 0, w: 0, h: 0, selected: false, textColor: 'black', color: 'white' };
    button2 = { x: 0, y: 0, w: 0, h: 0, selected: false, textColor: 'black', color: 'white' };
    button3 = { x: 0, y: 0, w: 0, h: 0, selected: false, textColor: 'black', color: 'white' };

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
            selected: false,
            text: 'New Game',
            textColor: 'black'
        };

        this.button2 = {
            x: cnvW / 3 + 10,
            y: cnvH / 4 + 10 + 100,
            w: cnvW / 4 - 20,
            h: cnvH / 10,
            color: 'white', 
            selected: false,
            text: 'Resume',
            textColor: 'black'
        }

        this.button3 = {
            x: cnvW / 3 + 10,
            y: cnvH / 4 + 10,
            w: cnvW / 4 - 20,
            h: cnvH / 10,
            color: 'white', 
            selected: false,
            text: 'Save',
            textColor: 'black'
        }

        this.button4 = {
            x: cnvW / 3 + 10,
            y: cnvH / 4 + 10 + 100,
            w: cnvW / 4 - 20,
            h: cnvH / 10,
            color: 'white', 
            selected: false,
            text: 'Return',
            textColor: 'black'
        }

        this.button5 = {
            x: cnvW / 3 + 10,
            y: cnvH / 4 + 10 + 200,
            w: cnvW / 4 - 20,
            h: cnvH / 10,
            color: 'white', 
            selected: false,
            text: 'Exit',
            textColor: 'black'
        }

        this.addEventListeners();
    }

    controlButton(e, button) {
        if (
            e.clientX > button.x && e.clientX < button.x + button.w
            && e.clientY > button.y && e.clientY < button.y + button.h
        ) {
            button.color = 'grey';
            button.textColor = 'yellow';
            button.selected = true;
        } else {
            if (button.color !== 'white') {
                button.color = 'white';
                button.textColor = 'black';
            }

            if (button.selected) {
                button.selected = false;
            }
        } 
    }

    mouseMoveEvent = e => {
        if (this.gameEngine.gameRunning) {
            this.controlButton(e, this.button3);
            this.controlButton(e, this.button4);
            this.controlButton(e, this.button5);
        } else {
            this.controlButton(e, this.button1);
            this.controlButton(e, this.button2);
        }
    }

    mouseDownEvent = () => {
        if (
            this.button1.selected && 
            this.gameEngine.currentScene !== 'game' &&
            !this.gameEngine.gameRunning
        ) {
            console.log('start game')

            this.gameEngine.changeScene('game');
        }
    }

    addEventListeners() {
        document.onmousemove = this.mouseMoveEvent;
        document.onmousedown = this.mouseDownEvent;
    }

    drawMenuButton({ x, y, w, h, color, text, textColor }) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, w, h);
        this.ctx.fillStyle = color;
        this.ctx.fill();

        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = textColor;
        this.ctx.fillText(text, x + 10, y + 50);
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

        if (this.gameEngine.gameRunning) {
            this.drawMenuButton(this.button3);
            this.drawMenuButton(this.button4);
            this.drawMenuButton(this.button5);
        } else {
            this.drawMenuButton(this.button1);
            this.drawMenuButton(this.button2);
        }
    }
}