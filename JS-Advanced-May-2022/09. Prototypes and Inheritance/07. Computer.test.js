const { expect } = require("chai");
const { createComputerClasses } = require("./07. Computer");
describe("CreateComputerClasses", () => {
  it("Laptop throws error if passed battery is not instance of Battery", () => {
    let classes = createComputerClasses();
    let Laptop = classes.Laptop;
    let Keyboard = classes.Keyboard;
    let keyboard = new Keyboard("Energy", 3);
    expect(
      () => new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", keyboard)
    ).to.throw();
  });
  it("Desktop throws error if monitor or keyboard are not instances of Monitor and Keyboard", () => {
    let classes = createComputerClasses();
    let Desktop = classes.Desktop;
    let Monitor = classes.Monitor;
    let Battery = classes.Battery;
    let Keyboard = classes.Keyboard;

    let battery = new Battery("Energy", 3);
    let keyboard = new Keyboard("Energy", 3);
    let monitor = new Monitor("Energy", 3, 5);
    expect(
      () => new Desktop("JAR Computers", 3.3, 8, 1, keyboard, battery)
    ).to.throw();
    expect(
      () => new Desktop("JAR Computers", 3.3, 8, 1, battery, monitor)
    ).to.throw();
  });
  it("throws at abstr", () => {
    let classes = createComputerClasses();
    expect(() => new classes.Computer("a", 5, 1, 2)).to.throw();
  });
});
