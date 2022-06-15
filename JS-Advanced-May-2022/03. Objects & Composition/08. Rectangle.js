function rectangle(width, height, color) {
    let rectAsObj = { width, height, color, calcArea };
    rectAsObj.color =
        rectAsObj.color[0].toLocaleUpperCase() +
        rectAsObj.color.substring(1, rectAsObj.color.length);
    function calcArea() {
        return this.width * this.height;
    }
    return rectAsObj;
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
