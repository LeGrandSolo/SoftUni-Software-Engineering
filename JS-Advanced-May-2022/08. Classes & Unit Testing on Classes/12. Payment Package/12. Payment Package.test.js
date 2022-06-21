const { expect } = require("chai");
const { PaymentPackage } = require("./12. Payment Package");
describe("PaymentPackage", () => {
  it(".name getter and setter work if input is valid", () => {
    let packageInst = new PaymentPackage("name", 21);
    expect(() => packageInst).not.to.throw();
    expect(packageInst.name).to.equal("name");
    expect(() => (packageInst.name = "newName")).not.to.throw();
    expect(packageInst.name).to.equal("newName");
  });
  it(".name setter throw error on invalid input", () => {
    let packageInst = new PaymentPackage("name", 21);
    expect(() => packageInst).not.to.throw();
    expect(packageInst.name).to.equal("name");
    expect(() => (packageInst.name = 32)).to.throw();
    expect(() => (packageInst.name = ["name"])).to.throw();
    expect(() => (packageInst.name = "")).to.throw();
    expect(() => (packageInst.name = { name: "name" })).to.throw();
    expect(packageInst.name).to.equal("name");
  });
  it(".value getter and setter work if input is valid", () => {
    let packageInst = new PaymentPackage("name", 21);
    expect(() => packageInst).not.to.throw();
    expect(packageInst.value).to.equal(21);
    expect(() => (packageInst.value = 11)).not.to.throw();
    expect(packageInst.value).to.equal(11);
  });
  it(".value setter throw error on invalid input", () => {
    let packageInst = new PaymentPackage("name", 21);
    expect(() => packageInst).not.to.throw();
    expect(packageInst.value).to.equal(21);
    expect(() => (packageInst.value = "32")).to.throw();
    expect(() => (packageInst.value = -32)).to.throw();
    expect(() => (packageInst.value = { 12: 12 })).to.throw();
    expect(() => (packageInst.value = [16])).to.throw();
    expect(packageInst.value).to.equal(21);
  });
  it(".VAT getter and setter work if input is valid and have default value of 20", () => {
    let packageInst = new PaymentPackage("name", 21);
    expect(() => packageInst).not.to.throw();
    expect(packageInst.VAT).to.equal(20);
    expect(() => (packageInst.VAT = 11)).not.to.throw();
    expect(packageInst.VAT).to.equal(11);
  });
  it(".VAT setter throw error on invalid input", () => {
    let packageInst = new PaymentPackage("name", 21);
    expect(() => packageInst).not.to.throw();
    expect(packageInst.VAT).to.equal(20);
    expect(() => (packageInst.VAT = -32)).to.throw();
    expect(() => (packageInst.VAT = "32")).to.throw();
    expect(() => (packageInst.VAT = [16])).to.throw();
    expect(packageInst.VAT).to.equal(20);
  });
  it(".active getter and setter work if input is valid and have default value of true", () => {
    let packageInst = new PaymentPackage("name", 21);
    expect(() => packageInst).not.to.throw();
    expect(packageInst.active).to.be.true;
    expect(() => (packageInst.active = false)).not.to.throw();
    expect(packageInst.active).to.be.false;
  });
  it(".active setter throw error on invalid input", () => {
    let packageInst = new PaymentPackage("name", 21);
    expect(() => packageInst).not.to.throw();
    expect(packageInst.active).to.be.true;
    expect(() => (packageInst.active = "32")).to.throw();
    expect(() => (packageInst.active = 12)).to.throw();
    expect(packageInst.active).to.be.true;
  });
  it(".toString returns overview of the instance", () => {
    let packageInst = new PaymentPackage("name", 21);
    expect(() => packageInst).not.to.throw();
    expect(packageInst.toString().includes(packageInst.name)).to.be.true;
    expect(packageInst.toString().includes(packageInst.value)).to.be.true;
    expect(
      packageInst
        .toString()
        .includes(
          packageInst.value + packageInst.value * (packageInst.VAT / 100)
        )
    ).to.be.true;
    expect(packageInst.toString().includes(packageInst.VAT)).to.be.true;
    expect(packageInst.toString().includes("(inactive)")).to.be.false;
    expect(() => (packageInst.active = false)).not.to.throw();
    expect(packageInst.toString().includes("(inactive)")).to.be.true;
  });
});
