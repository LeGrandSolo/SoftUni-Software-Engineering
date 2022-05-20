function solve(speed, area) {
    let speedLimit;
    let speedLimitSpeedDiff;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        default:
            break;
    }
    speed <= speedLimit ? 0 : speedLimitSpeedDiff = speed - speedLimit;
    if (speedLimitSpeedDiff == undefined) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else{
        let status;
        if (speedLimitSpeedDiff <= 20 ) {
            status = 'speeding';
        }else if (speedLimitSpeedDiff <= 40 ) {
            status = 'excessive speeding';
        }else{
            status = 'reckless driving';
        }
        console.log(`The speed is ${speedLimitSpeedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}
solve(21, 'residential')