function solve() {
    document.querySelector('button').addEventListener('click', convert);
    const options = document.querySelector('#selectMenuTo');
    let optionBinery = document.createElement('option');
    let optionHexa = document.createElement('option');
    [optionBinery.value, optionBinery.textContent] = ['binary' , 'Binary'];
    console.log(optionBinery.value);
    [optionHexa.value, optionHexa.textContent] = ['hexadecimal', 'Hexadecimal'];
    options.appendChild(optionBinery);
    options.appendChild(optionHexa);
    optionBinery.id = 'optBin';
    optionHexa.id = 'optHex';
    function convert(e) {
        let decimalNum = Number(document.querySelector('input').value);
        let optionBinery = document.querySelector('#optBin');
        let optionHexa = document.querySelector('#optHex');
        let output = document.getElementById('result');
        if (optionBinery.selected) {
            let binaryNum = '';
            while (decimalNum >= 1) {
                binaryNum += decimalNum % 2;
                decimalNum = Math.floor(decimalNum / 2);
            }
            output.value = binaryNum.split('').reverse().join('');
        }
        if (optionHexa.selected) {
            let hecaNum = '';
            let correspLett = {
                10: 'A',
                11: 'B',
                12: 'C',
                13: 'D',
                14: 'E',
                15: 'F'
            }
            while (decimalNum / 16 >= 1) {
                if (decimalNum % 16 > 9) {
                    hecaNum += correspLett[decimalNum % 16];
                } else if (decimalNum % 16 <= 9 && decimalNum % 16 !== 0) {
                    hecaNum += decimalNum % 16;
                } else {
                    hecaNum += 0;
                }
                decimalNum = Math.floor(decimalNum / 16);
            }
            if (decimalNum % 16 > 9) {
                hecaNum += correspLett[decimalNum % 16];
            } else if (decimalNum % 16 <= 9 && decimalNum % 16 !== 0) {
                hecaNum += decimalNum % 16;
            }
            output.value = hecaNum.split('').reverse().join('');
        }
    }
}