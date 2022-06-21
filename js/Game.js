class Game extends Level {
    constructor() {
        super();
        this.interval = 1000;
        this.balls = [];
        this.life = 5;
    }
    start() {
        let startGame = document.querySelector('.start');
        startGame.addEventListener('click', () => {
            this.balls = [];
            this.intervalStart = setInterval(() => {
                const controlBall = new ControlBall(this.level, this.lifeCallback.bind(this), this.clickCallback.bind(this));
                controlBall.init();
                this.balls.push(controlBall)
            }, this.interval)
        })
    }

    clickCallback() {
        this.countClick();
    }

    lifeCallback() {
        this.life--;
        let countLife = document.querySelector('.life')
        countLife.innerHTML = `Life:${this.life}`;
        if (this.life < 0) {
            this.gameOver();
            alert('Loss!!!')
        }
    }

    gameOver() {
        this.balls.forEach(el => el.destroy())
        clearInterval(this.intervalStart)
    }
}