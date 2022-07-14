class Fishka {
    constructor(element,startPosition = 36){
        this.element = element;
        this.currentPosition = startPosition;
    }
    
    move(value){
        this.currentPosition = this.currentPosition  + 100 * value;
        this.element.style.left = this.currentPosition +'px'; 
    }
}