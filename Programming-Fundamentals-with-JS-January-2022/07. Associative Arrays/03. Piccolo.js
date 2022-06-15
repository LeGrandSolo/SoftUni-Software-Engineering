function piccolo(input) {
    let parkingLot = new Set();
    for (let car of input) {
        car = car.split(', ');
        switch (car[0]) {
            case 'IN':
                parkingLot.add(car[1]);
                break;
            case 'OUT':
                parkingLot.delete(car[1]);
                break;
            default:
                break;
        }
    }
    if (parkingLot.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
        let parking = Array.from(parkingLot);
        parking = parking.sort();
        for (let car of parking) {
            console.log(car);
        }
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)