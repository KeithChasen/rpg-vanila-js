class GameEngine {
    canvas;
    context;

    game;
    menu;

    controls;

    gameRunning = false;

    currentScene = 'menu';

    constructor(canvas, context) {
        // set event listeners for global window
        // ESC -> to run menu screen

        this.canvas = canvas;
        this.context = context;

        this.controls = new Controllers();
        
        this.menu = new Menu(canvas, context, this);
    }

    changeScene(scene) {
        if (scene === 'game') {
            this.gameRunning = true;

            this.currentScene = 'game';

            this.game = new Game();

            this.game.init(
                this.canvas, 
                this.context,
            );
        }

        if (scene === 'pause-menu') {
            this.gameRunning = true;

            this.currentScene = 'menu';
        }
    }

    update() {
        if (this.controls.exit && this.currentScene !== 'menu') {
            console.log('should open menu')

            this.changeScene('pause-menu')
        }
    }

    run() {
        if (this.currentScene === 'game' && this.controls) {
            this.game.run(this.controls);
            return;
        }

        else if (this.currentScene === 'menu') {
            this.menu.run();
            return;
        }
    }
}