function solve(input) {
    let furniture = [];
    let totalSpend = 0;
    let pattern = /(?:\s|^)>>([A-Za-z\s]+)<<(\d+(?:.\d+)?)!(\d+)\b/g;
    console.log(`Bought furniture: `);
    for (let token of input) {
        if (token == 'Purchase') {
            break;
        }
        let match = pattern.exec(token);
        if (match != null) {
            console.log(match[1]);
            totalSpend += Number(match[2]) * Number(match[3]);
            match = pattern.exec(input);
        }
    }

    if (furniture.length > 0) {
        furniture.forEach(element => {
            console.log(element);
        });
    }
    console.log('Total money spend: ' + totalSpend.toFixed(2));
}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase', '>>Sofa<<312.23!3']
)