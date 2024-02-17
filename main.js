console.log('works!')

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const game = new Game();
game.init(canvas, context);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const animate = () => {
    requestAnimationFrame(animate);

    if (context && canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        game.run();
    }
    
}

animate();

