function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let distance = (x1, y1, x2, y2) => {
        let distanceX = Math.pow(x2 - x1, 2);
        let distanceY = Math.pow(y2 - y1, 2);
        let distance = Math.pow(distanceX + distanceY, 0.5)
        return distance;
    }
    let isInt = (num) =>{
        if(num % 1 == 0){
            return true;
        }else{
            return false;
        }
    }
    console.log(isInt(distance(x1, y1, 0, 0))? `{${x1}, ${y1}} to {${0}, ${0}} is valid`:
    `{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    console.log(isInt(distance(x2, y2, 0, 0))? `{${x2}, ${y2}} to {${0}, ${0}} is valid`:
    `{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    console.log(isInt(distance(x1, y1, x2, y2))? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`:
    `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
pointsValidation([3, 0, 0, 4])