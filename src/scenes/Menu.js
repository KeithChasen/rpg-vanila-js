class Menu extends Scene {

    button1 = { x: 0, y: 0, w: 0, h: 0};
    button2 = { x: 0, y: 0, w: 0, h: 0};
    button3 = { x: 0, y: 0, w: 0, h: 0};

    constructor(canvas, context, engine) {
        super(canvas, context, engine);

        const cnvW = this.cnv.width;
        const cnvH = this.cnv.height;

        this.button1 = {
            x: cnvW / 3 + 10,
            y: cnvH / 4 + 10,
            w: cnvW / 4 - 20,
            h: cnvH / 10,
            color: 'white'
        };

        this.button2 = {
            x: cnvW / 3 + 10,
            y: cnvH / 4 + 10 + 100,
            w: cnvW / 4 - 20,
            h: cnvH / 10,
            color: 'white'
        }

        this.button3 = {
            x: cnvW / 3 + 10,
            y: cnvH / 4 + 10 + 200,
            w: cnvW / 4 - 20,
            h: cnvH / 10,
            color: 'white'
        }

        this.addEventListeners();
    }

    addEventListeners() {
        document.onmousemove = e => {
            if (
                e.clientX > this.button1.x && e.clientX < this.button1.x + this.button1.w
                && e.clientY > this.button1.y && e.clientY < this.button1.y + this.button1.h
            ) {
                this.button1.color = 'grey'
            } else if (this.button1.color !== 'white') {
                this.button1.color = 'white'
            }

            if (
                e.clientX > this.button2.x && e.clientX < this.button2.x + this.button2.w
                && e.clientY > this.button2.y && e.clientY < this.button2.y + this.button2.h
            ) {
                this.button2.color = 'grey'
            } else if (this.button2.color !== 'white') {
                this.button2.color = 'white'
            }

            if (
                e.clientX > this.button3.x && e.clientX < this.button3.x + this.button3.w
                && e.clientY > this.button3.y && e.clientY < this.button3.y + this.button3.h
            ) {
                this.button3.color = 'grey'
            } else if (this.button3.color !== 'white') {
                this.button3.color = 'white'
            }
        }
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