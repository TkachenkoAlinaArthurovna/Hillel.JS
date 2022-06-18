class Car {
    constructor(transmission, maxCargo) {
        this.transmission = transmission;
        this.maxCargo = maxCargo;
    }
    getType() {
        if (this.maxCargo < 2) {
            return 'passenger car';
        } else return 'truck';
    }
}