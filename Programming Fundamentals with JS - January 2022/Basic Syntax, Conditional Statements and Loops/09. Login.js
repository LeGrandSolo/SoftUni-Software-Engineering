function login(input) {
    let user = input [0];
    let userReverse = user.split('').reverse().join('')
    for (let pass = 1; pass < input.length; pass++){
        if (pass == 4) {
            console.log(`User ${user} blocked!`);
            break;
        }
        else if (input[pass] == userReverse) {
            console.log(`User ${user} logged in.`);
        }else{
            console.log('Incorrect password. Try again.');
        }
    }
}
login(['Acer','login','go','let me in','recA'])