function gladiatorInventory(array) {
    let inventory = array
        .shift()
        .split(' ');
    for (let command of array) {
        command = command.split(' ')
        let keyWord = command.shift();
        switch (keyWord) {
            case 'Buy':
                if (!inventory.includes(command[0])) {
                    inventory.push(command[0]);
                }
                break;
            case 'Trash':
                if (inventory.includes(command[0])) {
                    inventory.splice(inventory.indexOf(command[0]), 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(command[0])) {
                    let equipment = inventory.splice(inventory.indexOf(command[0]), 1);
                    inventory.push(equipment[0]);
                }
                break;
            case 'Upgrade':
                command = command[0].split('-');
                if (inventory.includes(command[0])) {
                    let indexOfEquipment = inventory.indexOf(command[0])
                    let equipment = inventory[indexOfEquipment];
                    inventory.splice(indexOfEquipment + 1, 0, `${equipment}:${command[1]}`);
                }
                break;
            default:
                break;
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
)
gladiatorInventory(['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V'])