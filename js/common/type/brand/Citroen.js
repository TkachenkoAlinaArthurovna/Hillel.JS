class Citroen extends Hatchback {
    constructor(transmission, maxCargo, trunk, cruiseControl){
        super(transmission, maxCargo, trunk)
        this.cruiseControl = cruiseControl;
    }
}

const citroen = new Citroen('avto', 2, true, true)

console.log(citroen)
console.log(citroen.getType())