class GameEngine {

    canvas;
    context;

    game;
    menu;


    scenes = [
        'menu',
        'game'
    ];

    currentScene = 'menu';

    constructor(canvas, context) {
        // set event listeners for global window
        // ESC -> to run menu screen

        this.canvas = canvas;
        this.context = context;

        this.game = new Game();
        this.menu = new Menu(canvas, context, this);

    }

    changeScene(scene) {
        if (scene === 'game') {
            this.currentScene = 'game';
            this.game.init(this.canvas, this.context);
        }
    }

    run() {
        if (this.currentScene === 'game') {
            this.game.run();
        }

        if (this.currentScene === 'menu') {
            // console.log('menu running')
            this.menu.run();
        }
    }
}