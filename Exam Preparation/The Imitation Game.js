function imitationGame(input) {
    let secretMessage = input.shift();
    let currCommand = input.shift();
    while (currCommand != 'Decode') {
        let tokens = currCommand.split('|');
        let [commandName, p1, p2] = tokens;
        if (commandName == 'Move') {
            secretMessage = secretMessage.substring(p1) + secretMessage.substring(0, p1);
        } else if (commandName == 'Insert') {
            secretMessage = secretMessage.substring(0, p1) + p2 + secretMessage.substring(p1);
        } else if (commandName == 'ChangeAll') {
            let regex = new RegExp(p1, 'g');
            secretMessage = secretMessage.replace(regex, p2);
        }
        currCommand = input.shift();
    }
    console.log(`The decrypted message is: ${secretMessage}`);
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