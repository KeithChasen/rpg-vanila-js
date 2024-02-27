class Controllers {
    up = false;
    down = false;
    left = false;
    right = false;

    exit = false;

    constructor() {
        this.addEventListeners() 
    }

    keyDownListener = e => {
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            this.left = true;
        }

        if (e.key === 'ArrowRight' || e.key === 'd') {
            this.right = true;
        }

        if (e.key === 'ArrowUp' || e.key === 'w') {
            this.up = true;
        }

        if (e.key === 'ArrowDown' || e.key === 's') {
            this.down = true;
        }

        if (e.key === 'Escape') {
            this.exit = true;
        }
    }

    keyUpListener = e => {
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            this.left = false;
        }

        if (e.key === 'ArrowRight' || e.key === 'd') {
            this.right = false;
        }

        if (e.key === 'ArrowUp' || e.key === 'w') {
            this.up = false;
        }

        if (e.key === 'ArrowDown' || e.key === 's') {
            this.down = false;
        }

        if (e.key === 'Escape') {
            this.exit = false;
        }
    }

    addEventListeners() {
        document.onkeydown = e => this.keyDownListener(e);
        document.onkeyup = e => this.keyUpListener(e)
    }
}