function inventory(array) {
    let heroes = [];
    for (let hero of array) {
        let heroObj = {};
        hero = hero.split(' / ');
        let heroName = hero.shift();
        let heroLevel = Number(hero.shift());
        hero = hero.join('');
        heroObj.hero = heroName;
        heroObj.level = heroLevel;
        heroObj.items = hero;
        heroes.push(heroObj);
        // console.log(`Hero: ${heroObj.hero}\nlevel => ${heroObj.level}\nItems => ${heroObj.items}`);
    }
    heroes.sort((a, b) => a.level - b.level)
    for (let hero of heroes) {
        console.log(`Hero: ${hero.hero}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)