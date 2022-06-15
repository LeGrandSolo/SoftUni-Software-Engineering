function solve() {
    let heroes = {mage,fighter};
    function mage(name) {
        let hero = {name, mana : 100, health : 100, cast(spell){
            this.mana -= 1;
            console.log(`${this.name} cast ${spell}`);
        }};
        return hero;
    }
    function fighter(name) {
        let hero = {name, stamina : 100, health : 100, fight(){
            this.stamina -= 1;
            console.log(`${this.name} slashes at the foe!`);
        }};
        return hero;
    }
    return heroes;
}
let create = solve();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');

const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);

