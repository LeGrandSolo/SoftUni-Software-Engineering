function phoneShop(input) {
    let phones = input.shift().split(', ');
    for (let command of input) {
        command = command.split(' - ');
        if (command[0] != 'End') {
            switch (command[0]) {
                case 'Add':
                    if (!phones.includes(command[1])) {
                        phones.push(command[1]);
                    }
                    break;
                case 'Remove':
                    if (phones.includes(command[1])) {
                        phones.splice(phones.indexOf(command[1]), 1);
                    }
                    break;
                case 'Bonus phone':
                    let oldAndNewPhones = command[1].split(':');
                    if (phones.includes(oldAndNewPhones[0])) {
                        phones.splice(phones.indexOf(oldAndNewPhones[0]) + 1, 0, oldAndNewPhones[1]);
                    }
                    break;
                case 'Last':
                    if (phones.includes(command[1])) {
                        let phone = phones.splice(phones.indexOf(command[1]), 1);
                        phones.push(phone);
                    }
                    break;
                default:
                    break;
            }
        }
    }
    console.log(phones.join(', '));
}
phoneShop((["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"])
);
phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"]);
phoneShop((["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"])
)
