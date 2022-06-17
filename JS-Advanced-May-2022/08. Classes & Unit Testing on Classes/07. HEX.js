class Hex {
  constructor(number) {
    this.valueInHex = number.toString(16).toLocaleUpperCase();
  }
  valueOf() {
    return parseInt(this.valueInHex, 16);
  }
  toString() {
    return "0x" + this.valueInHex;
  }
  plus(number) {
    let result;
    typeof number === "number"
      ? (result = parseInt(this.valueInHex, 16) + number)
      : (result =
          parseInt(this.valueInHex, 16) + parseInt(number.valueInHex, 16));
    return new Hex(result);
  }
  minus(number) {
    let result;
    typeof number === "number"
      ? (result = parseInt(this.valueInHex, 16) - number)
      : (result =
          parseInt(this.valueInHex, 16) - parseInt(number.valueInHex, 16));
    return new Hex(result);
  }
  parse(string) {
    return parseInt(string, 16);
  }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));
