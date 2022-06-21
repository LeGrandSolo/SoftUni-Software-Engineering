function solve() {
  class Balloon {
    constructor(color, hasWeight) {
      this.color = color;
      this.hasWeight = hasWeight;
    }
  }
  class PartyBalloon extends Balloon {
    constructor(color, hasWeight, ribbonColor, ribbonLength) {
      super(color, hasWeight);
      this.ribbonColor = ribbonColor;
      this.ribbonLength = ribbonLength;
    }
    get ribbon() {
      return { color: this.ribbonColor, length: this.ribbonLength };
    }
  }
  class BirthdayBalloon extends PartyBalloon {
    constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
      super(color, hasWeight, ribbonColor, ribbonLength);
      this._text = text;
    }
    get text() {
      return this._text;
    }
  }
  return { Balloon, PartyBalloon, BirthdayBalloon };
}
let classes = solve();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
