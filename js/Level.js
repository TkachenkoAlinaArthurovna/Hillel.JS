class Level {
    constructor() {
        this.level = 1;
        this.stepLevel = 10;
        this.counter = 0;
    }

    countClick() {
        this.counter++
        let numerator = document.body.querySelector('.numerator')
        numerator.innerHTML = `Level ${this.level}: ball ${this.counter}`;
        if (this.counter >= this.stepLevel) {
            this.level++
            this.counter = 0;
            if (this.level > 3) {
                this.gameOver();
                alert('You are Win!!!')
            }
        }
    }
}