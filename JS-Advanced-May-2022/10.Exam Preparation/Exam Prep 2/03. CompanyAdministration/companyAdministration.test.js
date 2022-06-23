const { expect } = require("chai");
const { companyAdministration } = require("./companyAdministration");
describe("companyAdministration", () => {
  it("Throws error when non programer position is passed and validates years of experiance", () => {
    expect(() =>
      companyAdministration.hiringEmployee("Ivan", "Construction Worker", 12)
    ).to.throw(`We are not looking for workers for this position.`);
    expect(
      companyAdministration.hiringEmployee("Todor", "Programmer", 2)
    ).to.equal(`Todor is not approved for this position.`);
    expect(
      companyAdministration.hiringEmployee("Gosho", "Programmer", 3)
    ).to.equal(`Gosho was successfully hired for the position Programmer.`);
    expect(
      companyAdministration.hiringEmployee("Svetlin", "Programmer", 15)
    ).to.equal(`Svetlin was successfully hired for the position Programmer.`);
  });
  it("Validates input and calculates salary", () => {
    expect(() => companyAdministration.calculateSalary("12")).to.throw(
      "Invalid hours"
    );
    expect(() => companyAdministration.calculateSalary(-5)).to.throw(
      "Invalid hours"
    );
    expect(() => companyAdministration.calculateSalary([12])).to.throw(
      "Invalid hours"
    );
    expect(() => companyAdministration.calculateSalary(undefined)).to.throw(
      "Invalid hours"
    );
    expect(() => companyAdministration.calculateSalary(null)).to.throw(
      "Invalid hours"
    );
    expect(companyAdministration.calculateSalary(150)).to.equal(150 * 15);
    expect(companyAdministration.calculateSalary(161)).to.equal(
      161 * 15 + 1000
    );
    expect(companyAdministration.calculateSalary(160)).to.equal(160 * 15);
  });
  it("Validates input, modifies employee' array and returns it joined by ', '", () => {
    expect(
      companyAdministration.firedEmployee(["Atanas", "Georgi", "Stoqn"], 2)
    ).to.equal("Atanas, Georgi");
    expect(() =>
      companyAdministration.firedEmployee(["Atanas", "Georgi", "Stoqn"], -1)
    ).to.throw("Invalid input");
    expect(() =>
      companyAdministration.firedEmployee(["Atanas", "Georgi", "Stoqn"], 5)
    ).to.throw("Invalid input");
    expect(() =>
      companyAdministration.firedEmployee(["Atanas", "Georgi", "Stoqn"], "1")
    ).to.throw("Invalid input");
    expect(() => companyAdministration.firedEmployee("Atanas", 1)).to.throw(
      "Invalid input"
    );
    expect(() => companyAdministration.firedEmployee(null, 1)).to.throw(
      "Invalid input"
    );
    expect(() => companyAdministration.firedEmployee(undefined, 1)).to.throw(
      "Invalid input"
    );
  });
});
