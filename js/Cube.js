class Cube {
    constructor(element){
        this.element = element;
        this.value = 0;
        this.min = 1;
        this.max = 6;
    }
    random(){
        return Math.floor(this.min + Math.random() * (this.max + 1 - this.min))
    }
    generate(){
        this.value = this.random();
        this.element.src = `img/${this.value}.png`;  
    }
}