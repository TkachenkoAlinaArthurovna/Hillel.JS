<<<<<<< Updated upstream

=======
const worker = {
    name: '',
    surname: '',
    role: 'worker',
    rate: 0,
    days: 0,
    getSalary: () => {
        return this.rate * this.days
    },
    getSocialPackage: () => {},
    timeOff: timeOff()
}

administrator(worker) {
    role: 'administrator',
    addCashier: () => {},
    addConsultant: () => {},
    getSocialPackage: () => {
        if (worker.role == administrator) {
            return [];
        }

    }
}

consultant(worker) {
    role: 'consultant',
    doProductInfo: () => {},
    getSocialPackage: () => {
        if (worker.role == consultant) {
            return [];
        }
    }
}

cashier(consultant) {
    role: 'cashier',
    doSale: () => {},
    getSocialPackage: () => {
        if (worker.role == cashier) {
            return null
        }
    }
}

const timeOff = () => {
    var timeOffCount = 0;
    return ({
        add: (days) => timeOffCount + days,
        remove: (days) => timeOffCount - days,
        getTimeOffCount: () => timeOffCount
    })
}
>>>>>>> Stashed changes
