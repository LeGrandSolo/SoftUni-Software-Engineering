function imitationGame(input) {
    let secretMess = input.shift();
    let command = input.shift();
    while (command != 'Decode') {
        let [commandName, p1, p2] = command.split('|');
        if (commandName == 'Move') {
            p1 = Number(p1);
            secretMess = secretMess.substring(p1) + secretMess.substring(0, p1);
        } else if (commandName == 'Insert') {
            p1 = Number(p1);
            secretMess = secretMess.substring(0, p1) + p2 + secretMess.substring(p1);
        } else if (commandName == 'ChangeAll') {
            while (secretMess.includes(p1)) {
                secretMess = secretMess.replace(p1, p2);
            }
        }
        command = input.shift()
    }
    console.log('The decrypted message is: ' + secretMess);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
);
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
)