function revealWords(words, template) {
    words = words.split(', ');
    for (let word of words) {
        template = template.replace('*'.repeat(word.length), word);
    }
    console.log(template);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');