function ages(age) {
    if (0 <= age) {
        if (2 >= age) console.log('baby')
        else if (13 >= age) console.log('child')
        else if (19 >= age) console.log('teenager')
        else if (65 >= age) console.log('adult')
        else if (65 < age) console.log('elder')
    } else console.log('out of bounds')
}