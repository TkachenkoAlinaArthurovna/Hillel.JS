class ControlBall {
    constructor(level, lifeCallback, clickCallback) {
        this.size = 100 / level;
        this.speed = 2 * level;
        this.interval = 50;
        this.counter = 0;
        this.lifeCallback = lifeCallback;
        this.clickCallback = clickCallback;
    }
    init() {
        this.generateBall();
        this.move();
    }
    generateBall() {
        this.ball = new Ball(this.size, this.generateX())
        this.ball.addEventListener('click', () => {
            this.clickHandler();
        })
    }

    clickHandler() {
        this.destroy();
        if (this.clickCallback && typeof this.clickCallback == 'function') {
            this.clickCallback();
        }
    }

    generateX() {
        return Math.ceil(Math.random() * window.innerWidth) - this.size
    }

    destroy() {
        this.ball.remove();
        clearInterval(this.moveInterval);
        delete this;
    }

    move() {
        let y = 0;
        this.moveInterval = setInterval(() => {
            y += this.speed;
            this.ball.style.top = `${y}px`;
            if (y > window.innerHeight - this.size) {
                this.destroy();
                this.ballCrash();
            }
        }, this.interval)

    }
    ballCrash() {
        if (this.lifeCallback && typeof this.lifeCallback == 'function') {
            this.lifeCallback();
        }
    }
}