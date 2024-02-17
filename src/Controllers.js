class Controllers {
    up = false;
    down = false;
    left = false;
    right = false;

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

        // console.table(this)
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

        // console.table(this)
    }

    addEventListeners() {
        document.onkeydown = e => this.keyDownListener(e);
        document.onkeyup = e => this.keyUpListener(e)
    }
}