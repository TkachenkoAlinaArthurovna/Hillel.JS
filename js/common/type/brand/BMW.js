class BMW extends Sedan {
    constructor(transmission, maxCargo, luke, typeFuel) {
        super(transmission, maxCargo, luke)
        this.typeFuel = typeFuel;
    }
    getTypeRefueling() {
        if (this.typeFuel === 'petrol') {
            return 'petrol refueling';
        } 
        if (this.typeFuel === 'electricity') {
            return 'electro refueling';
        }
    }
}