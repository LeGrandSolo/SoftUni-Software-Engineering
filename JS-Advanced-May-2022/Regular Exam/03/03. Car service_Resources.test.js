const { expect } = require("chai");
const { carService } = require("./03. Car service_Resources");
describe("carService", function () {
  describe(".isItExpensive(issue)", () => {
    it("checks if value of param is Engine or Transmission", () => {
        expect(carService.isItExpensive('Engine')).to.equal("The issue with the car is more severe and it will cost more money");
        expect(carService.isItExpensive('Transmission')).to.equal("The issue with the car is more severe and it will cost more money");
        expect(carService.isItExpensive("Tires")).to.equal("The overall price will be a bit cheaper");
    });
  });
  describe(".discount (numberOfParts, totalPrice)", () => {
    it("returns 15% if 2 < numberOfParts <= 7, or returns 30% if 7 < numberOfParts", () => {
        expect(carService.discount(2, 1500)).to.equal("You cannot apply a discount");
        expect(carService.discount(3, 1500)).to.equal(`Discount applied! You saved ${0.15 * 1500}$`);
        expect(carService.discount(7, 1500)).to.equal(`Discount applied! You saved ${0.15 * 1500}$`);
        expect(carService.discount(8, 1500)).to.equal(`Discount applied! You saved ${0.3 * 1500}$`);
    });
    it("validates input", () => {
        expect(()=>carService.discount('2', 1500)).to.throw("Invalid input");
        expect(()=>carService.discount(2, '1500')).to.throw("Invalid input");
        expect(()=>carService.discount('2', '1500')).to.throw("Invalid input");
        expect(()=>carService.discount('2', '1500')).to.throw("Invalid input");
        expect(()=>carService.discount([2], 1500)).to.throw("Invalid input");
        expect(()=>carService.discount(2, [1500])).to.throw("Invalid input");
        expect(()=>carService.discount(null, 1500)).to.throw("Invalid input");
        expect(()=>carService.discount(2, null)).to.throw("Invalid input");
    });
  });
  describe(".partsToBuy (partsCatalog, neededParts) ", () => {
    it("returns 15% if 2 < numberOfParts <= 7, or returns 30% if 7 < numberOfParts", () => {
        expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }, {part: "engine", price: 1230 }], ["blowoff valve", "coil springs"])).to.equal(145 + 230);
    });
    it("validates input", () => {
        expect(()=>carService.partsToBuy(2, 1500)).to.throw("Invalid input");
        expect(()=>carService.partsToBuy('2', 1500)).to.throw("Invalid input");
        expect(()=>carService.partsToBuy(2, '1500')).to.throw("Invalid input");
        expect(()=>carService.partsToBuy('2', '1500')).to.throw("Invalid input");
        expect(()=>carService.partsToBuy('2', '1500')).to.throw("Invalid input");
        expect(()=>carService.partsToBuy([2], 1500)).to.throw("Invalid input");
        expect(()=>carService.partsToBuy(2, [1500])).to.throw("Invalid input");
        expect(()=>carService.partsToBuy(null, 1500)).to.throw("Invalid input");
        expect(()=>carService.partsToBuy(2, null)).to.throw("Invalid input");
    });
  });
});
