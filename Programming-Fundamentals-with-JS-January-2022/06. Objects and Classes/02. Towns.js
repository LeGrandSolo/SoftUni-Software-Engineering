function towns(towns) {
    for (let eachTown of towns){
        eachTown = eachTown.split(' | ');
        let townAsObj = {town: eachTown[0], latitude : eachTown[1], longitude : eachTown[2]};
        townAsObj.latitude = Number(townAsObj.latitude).toFixed(2);
        townAsObj.longitude = Number(townAsObj.longitude).toFixed(2);
        console.log(townAsObj);
    }
}