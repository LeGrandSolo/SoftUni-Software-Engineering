function oddOccurrences(input) {
    input = input.split(' ');
    let wordOccurrances = new Map();
    input.forEach(element => {
        if (!wordOccurrances.has(element.toLowerCase())) {
            wordOccurrances.set(element.toLowerCase(), 0);
        }
        wordOccurrances.set(element.toLowerCase(), wordOccurrances.get(element.toLowerCase()) + 1);
    });
    let result = [];
    for (let word of wordOccurrances) {
        if (word[1] % 2 != 0) {
            result.push(word[0])
        }
    }
    console.log(result.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')