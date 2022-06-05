function attachEventsListeners() {
    let ratiosInM = {
        km: (u, inM) => {
            if (inM) {
                return u / 1000;
            } else {
                return u * 1000;
            }
        },
        m: (u, inM) => {
            return u;
        },
        cm: (u, inM) => {
            if (inM) {
                return u / 0.01;
            } else {
                return u * 0.01;
            }
        },
        mm: (u, inM) => {
            if (inM) {
                return u / 0.001;
            } else {
                return u * 0.001;
            }
        },
        mi: (u, inM) => {
            if (inM) {
                return u / 1609.34;
            } else {
                return u * 1609.34;
            }
        },
        yrd: (u, inM) => {
            if (inM) {
                return u / 0.9144;
            } else {
                return u * 0.9144;
            }
        },
        ft: (u, inM) => {
            if (inM) {
                return u / 0.3048;
            } else {
                return u * 0.3048;
            }
        },
        inc: (u, inM) => {
            if (inM) {
                return u / 0.0254;
            } else {
                return u * 0.0254;
            }
        }
    }
    let button = document.getElementById('convert');
    button.addEventListener('click', convert);
    function convert(e) {
        let distance = Number(document.getElementById('inputDistance').value);
        let inputValue = document.getElementById('inputUnits').value;
        let outputValue = document.getElementById('outputUnits').value;
        //in is reserved word, in = inc
        if (inputValue == 'in') {
            inputValue = 'inc'
        }
        if (outputValue == 'in') {
            outputValue = 'inc'
        }
        let meters = ratiosInM[inputValue](distance, false);
        let inUnit = ratiosInM[outputValue](meters, true);
        document.getElementById('outputDistance').value = inUnit;
    }
}