function cutAndReverse(str) {
    let firstHalf = str.substring(0, str.length / 2);
    console.log(firstHalf.split('').reverse().join(''));
    let secondHalf = str.substring(str.length / 2);
    console.log(secondHalf.split('').reverse().join(''));
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')