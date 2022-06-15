function adAstra(str) {
    let pattern = /([#|])(?<foodName>[A-Za-z\s]+)\1(?<expDate>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,4}|10000)\1/g;
    let matched = pattern.exec(str);
    let totalKcal = 0;
    let result = [];
    while (matched != null) {
        totalKcal += Number(matched.groups.calories);
        result.push(`Item: ${matched.groups.foodName}, Best before: ${matched.groups.expDate}, Nutrition: ${matched.groups.calories}`);
        matched = pattern.exec(str);
    }
    console.log(`You have food to last you for: ${Math.floor(totalKcal / 2000)} days!`);
    console.log(result.join('\n'));
}