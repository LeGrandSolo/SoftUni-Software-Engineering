function heroesOfCodeAndLogic(input) {
    let commands = { castSpell, takeDamage, recharge, heal }
    let party = {};
    let numberOfHeroes = Number(input.shift());
    putHeroesInParty(party, numberOfHeroes, input);
    while (input[0] != 'End') {
        let tokens = input.shift().split(' - ');
        let [name, p1, p2, p3] = tokens;
        name = name[0].toLocaleLowerCase() + name.substring(1);
        let command = commands[name];
        command(p1, p2, p3, party);
    }
    function putHeroesInParty(obj, numberOfHeroes, source) {
        let currentNum = 1;
        while (currentNum <= numberOfHeroes) {
            let [hero, health, mana] = source[0].split(' ');
            [health, mana] = [Number(health), Number(mana)];
            obj[hero] = [health, mana];
            source.shift()
            currentNum++;
        }

    }
    function castSpell(heroName, manaNeeded, spellName, obj) {
        if (obj[heroName][1] >= manaNeeded) {
            console.log(`${heroName} has successfully cast ${spellName} and now has ${obj[heroName][1] - manaNeeded} MP!`);
            obj[heroName][1] -= manaNeeded;
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
    }
    function takeDamage(heroName, damage, attacker, obj) {
        damage = Number(damage);
        if (obj[heroName][0] > damage) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${obj[heroName][0] - damage} HP left!`);
            obj[heroName][0] -= damage;
        } else {
            delete obj[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    }
    function recharge(heroName, amount, empty, obj) {
        amount = Number(amount);
        let pervMana = obj[heroName][1];
        obj[heroName][1] += amount;
        if (obj[heroName][1] > 200) {
            obj[heroName][1] = 200;
            amount = 200 - pervMana;
        }
        console.log(`${heroName} recharged for ${amount} MP!`);
    }
    function heal(heroName, amount, empty, obj) {
        amount = Number(amount);
        let pervHealth = obj[heroName][0];
        obj[heroName][0] += amount;
        if (obj[heroName][0] > 100) {
            obj[heroName][0] = 100;
            amount = 100 - pervHealth;
        }
        console.log(`${heroName} healed for ${amount} HP!`);
    }
    for (let hero in party) {
        console.log(hero);
        console.log('  HP: ' + party[hero][0]);
        console.log('  MP: ' + party[hero][1]);
    }
}
heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);
console.log('------');
heroesOfCodeAndLogic(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',
])