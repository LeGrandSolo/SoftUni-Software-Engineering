function solve(numOfSteps, footLengthInM, speedInKMH) {
    let distanceInKm = (footLengthInM * numOfSteps) / 1000;
    let timeInSec = 3600 * (distanceInKm / speedInKMH) + 60 * Math.floor(distanceInKm / 0.5);
    let timeInMin = Math.floor(timeInSec / 60);
    timeInSec -= timeInMin * 60;
    timeInSec = Math.round(timeInSec);
    let timeInHour = Math.floor(timeInMin / 60);
    timeInMin -= timeInHour * 60;
    console.log(`${String(timeInHour).padStart(2, '0')}:${String(timeInMin).padStart(2, '0')}:${String(timeInSec).padStart(2, '0')}`);
}
solve(4000, 0.60, 5);