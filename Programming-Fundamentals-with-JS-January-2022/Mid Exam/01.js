function cookingMasterclass(input) {
    let budget = input.shift();
    let students = input.shift();
    let flourPrice = input.shift();
    let eggPrice = input.shift();
    let apronPrice = input.shift();
    let apronNumber = 0;
    let flourPackages = 0;
    let totalPrice = 0;
    for (let student = 1; student <= students; student++) {
        flourPackages++;
        apronNumber++;
        totalPrice += eggPrice * 10;
        totalPrice += flourPrice;
        if (flourPackages % 5 == 0 && flourPackages != 0) {
            totalPrice -= flourPrice;
        }
    }
    apronNumber = Math.ceil(apronNumber * 1.2);
    totalPrice += apronNumber * apronPrice;
    console.log(totalPrice <= budget? `Items purchased for ${totalPrice.toFixed(2)}$.` : `${(totalPrice - budget).toFixed(2)}$ more needed.`)
}
cookingMasterclass([50
    , 2
    , 1.0
    , 0.10
    , 10.0
])
cookingMasterclass([100
    , 25
    , 4.0
    , 1.0
    , 6.0
])
cookingMasterclass([946, 
    20, 
    12.05, 
    0.42, 
    27.89]) 
    