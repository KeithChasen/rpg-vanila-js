class Vector {
    x = 0.0;
    y = 0.0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    normalize() {
        if (this.x === 0 && this.y === 0) return;

        const m = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));

        this.x = this.x / m;
        this.y = this.y / m;
    }
}