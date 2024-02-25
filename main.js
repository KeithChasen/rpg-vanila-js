console.log('works!')

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gameEngine = new GameEngine(canvas, context);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const animate = () => {
    requestAnimationFrame(animate);

    if (context && canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        gameEngine.run();
    }
    
}

animate();

