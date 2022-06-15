function passValidator(pass) {
    if (isPassLengthValid(pass) && hasOnlyLettersAndDigits(pass) && hasTwoDigits(pass)) {
        console.log('Password is valid');
    } else {
        if (!isPassLengthValid(pass)) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!hasOnlyLettersAndDigits(pass)) {
            console.log('Password must consist only of letters and digits');
        }
        if (!hasTwoDigits(pass)) {
            console.log('Password must have at least 2 digits');
        }
    }
    function isPassLengthValid(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    function hasOnlyLettersAndDigits(pass) {
        let hasSomethingElse = false;
        for (let index = 0; index < pass.length; index++) {
            let uniCodeValue = pass.charCodeAt(index);
            if (!((uniCodeValue >= 48 && uniCodeValue <= 57) ||
                (uniCodeValue >= 65 && uniCodeValue <= 90) ||
                (uniCodeValue >= 97 && uniCodeValue <= 122))) {
                    hasSomethingElse = true;
            }
        }
        if (!hasSomethingElse) {
            return true;
        }else{
            return false;
        }
    }
    function hasTwoDigits(pass) {
        let digitNumber = 0;
        for (let index = 0; index < pass.length; index++) {
            let uniCodeValue = pass.charCodeAt(index);
            if (uniCodeValue >= 48 && uniCodeValue <= 57) {
                digitNumber++;
            }
        }
        if (digitNumber >= 2) {
            return true;
        } else {
            return false;
        }
    }
}
passValidator('logIn')
passValidator('MyPass123')
passValidator('Pa$s$s')