function secretChat(input) {
    let secretMessage = input.shift();
    for (let instruction of input) {
        if (instruction == 'Reveal') {
            break;
        }
        instruction = instruction.split(':|:');
        let command = instruction[0];
        switch (command) {
            case 'InsertSpace':
                let newMess = secretMessage.substring(0, instruction[1]) + ' ' + secretMessage.substring(instruction[1]);
                secretMessage = newMess;
                console.log(secretMessage);
                break;
            case 'Reverse':
                if (secretMessage.includes(instruction[1])) {
                    let cutOutText = secretMessage.substring(secretMessage.indexOf(instruction[1]), secretMessage.indexOf(instruction[1]) + instruction[1].length);
                    secretMessage = secretMessage.substring(0, secretMessage.indexOf(cutOutText)) + secretMessage.substring(secretMessage.indexOf(cutOutText) + cutOutText.length);
                    cutOutText = cutOutText.split('').reverse().join('');
                    secretMessage += cutOutText;
                    console.log(secretMessage);
                } else {
                    console.log('error');
                }
                break;

            case 'ChangeAll':
                let regex = new RegExp(instruction[1], 'g');
                secretMessage = secretMessage.replace(regex, instruction[2]);
                console.log(secretMessage);
                break;

            default:
                break;
        }
    }
    console.log('You have a new text message: ' + secretMessage);
}