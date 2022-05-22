function vacation(num, group, day) {
    num = Number(num)
    let total = 0;
    let studentFri = 8.45;
    let studentSaur = 9.8;
    let studentSun = 10.46;
    let businessFri = 10.9;
    let businessSatur = 15.6;
    let businessSun = 16;
    let regularFri = 15;
    let regularSatur = 20;
    let regularSun = 22.5;
    if (group === 'Students') {
        switch (day) {
            case 'Friday':
                total = num * studentFri;
                break;
            case 'Saturday':
                total = num * studentSaur;
                break;
            case 'Sunday':
                total = num * studentSun;
                break;
            default:
                break
        }
        if (num >= 30) total *= 0.85
    }
    if (group === 'Business') {
        if (num >= 100) num -= 10;
        switch (day) {
            case 'Friday':
                total = num * businessFri;
                break;
            case 'Saturday':
                total = num * businessSatur;
                break;
            case 'Sunday':
                total = num * businessSun;
                break;
            default:
                break
        }
    }
    if (group === 'Regular') {
        switch (day) {
            case 'Friday':
                total = num * regularFri;
                break;
            case 'Saturday':
                total = num * regularSatur;
                break;
            case 'Sunday':
                total = num * regularSun;
                break;
            default:
                break
        }
        if (num >= 10 && num <= 20) total *= 0.95;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(12,
    "Regular",
    "Sunday"
)

