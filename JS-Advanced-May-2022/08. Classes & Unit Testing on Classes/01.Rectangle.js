class Rectangle {
  constructor(width, height, color) {
    this._width = width;
    this._height = height;
    this._color = color;
  }
  calcArea(){
    return this.width * this.height;
  }
  set _width(value) {
    if (typeof value !== "number") {
      throw TypeError("Please enter a number as a value of width");
    }
    this.width = value;
  }
  set _height(value) {
    if (typeof value !== "number") {
      throw TypeError("Please enter a number as a value of height");
    }
    this.height = value;
  }
  set _color(value) {
    if (typeof value !== "string") {
      throw TypeError("Please enter a string as a value of color");
    }
    this.color = value;
  }
}
let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
