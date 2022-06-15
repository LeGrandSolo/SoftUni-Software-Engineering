const { expect } = require("chai");
const { mathEnforcer } = require("./04.Math Enforcer");
describe("Math Enforcer Object", () => {
  it("Has own property addFive", () => {
    expect(typeof mathEnforcer.addFive).to.equal("function");
  });
  it("Returns number plus 5", () => {
    expect(mathEnforcer.addFive(6)).to.equal(11);
    expect(mathEnforcer.addFive(-6)).to.equal(-1);
    expect(mathEnforcer.addFive(3.14151512242352312344512412431)).to.be.closeTo(
      8.14,
      0.1
    );
  });
  it("Returns undefined if non-num is passed", () => {
    expect(mathEnforcer.addFive("6")).to.be.undefined;
    expect(mathEnforcer.addFive([6])).to.be.undefined;
  });
  it("Has own property subtractTen", () => {
    expect(typeof mathEnforcer.subtractTen).to.equal("function");
  });
  it("Returns number minus 10", () => {
    expect(mathEnforcer.subtractTen(11)).to.equal(1);
    expect(
      mathEnforcer.subtractTen(13.14151512242352312344512412431)
    ).to.be.closeTo(3.14, 0.1);
    expect(mathEnforcer.subtractTen(-6)).to.equal(-16);
  });
  it("Returns undefined if non-num is passed", () => {
    expect(mathEnforcer.subtractTen("6")).to.be.undefined;
    expect(mathEnforcer.subtractTen([6])).to.be.undefined;
  });
  it("Has own property sum", () => {
    expect(typeof mathEnforcer.sum).to.equal("function");
  });
  it("Returns the sum of the numbers", () => {
    expect(
      mathEnforcer.sum(13.54251512242352312344512412431, 10.3211231241234)
    ).to.be.closeTo(23.84, 0.1);
    expect(mathEnforcer.sum(-6,-20)).to.equal(-26);
    expect(mathEnforcer.sum(6,-20)).to.equal(-14);
    expect(mathEnforcer.sum(11, 10)).to.equal(21);
    expect(mathEnforcer.sum(11, -10)).to.equal(1);
  });
  it("Returns undefined if non-num is passed", () => {
    expect(mathEnforcer.sum("6", 6)).to.be.undefined;
    expect(mathEnforcer.sum([6], 6)).to.be.undefined;
    expect(mathEnforcer.sum(6, "6")).to.be.undefined;
    expect(mathEnforcer.sum(6, [6])).to.be.undefined;
    expect(mathEnforcer.sum("6", "6")).to.be.undefined;
  });
});
