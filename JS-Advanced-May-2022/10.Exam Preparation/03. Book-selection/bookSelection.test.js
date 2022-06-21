const { expect } = require("chai");
const { bookSelection } = require("./bookSelection");
describe("Tests …", function () {
  describe("bookSelection", () => {
    it("has .isGenreSuitable method, which accepts two parameters: string and number", () => {
      expect(() => bookSelection.isGenreSuitable("str", 123)).not.to.throw();
    });
    it("if .isGenreSuitable first param is (Thriller) or (Horror) and second param is <= 12 returns age restriction otherwise return that book is suitable", () => {
      expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal(
        "Books with Thriller genre are not suitable for kids at 12 age"
      );
      expect(bookSelection.isGenreSuitable("Horror", 2)).to.equal(
        "Books with Horror genre are not suitable for kids at 2 age"
      );
      expect(bookSelection.isGenreSuitable("Comedy", 2)).to.equal(
        `Those books are suitable`
      );
    });
    it("has .isItAffordable method which accepts (num , num)", () => {
      expect(() => bookSelection.isItAffordable(123, 123)).not.to.throw();
      expect(
        () => bookSelection.isItAffordable("123", 123),
        `Doesn't throw proper error mess`
      ).to.throw("Invalid input");
      expect(
        () => bookSelection.isItAffordable(123, "123"),
        `Doesn't throw proper error mess`
      ).to.throw("Invalid input");
    });
    it(".isItAffordable tells if it is affordable and returns money left", () => {
      expect(bookSelection.isItAffordable(123, 123)).to.equal(
        `Book bought. You have 0$ left`
      );
      expect(bookSelection.isItAffordable(123, 143)).to.equal(
        `Book bought. You have 20$ left`
      );
      expect(bookSelection.isItAffordable(143, 123)).to.equal(
        "You don't have enough money"
      );
    });
    it("has .suitableTitles method which accepts (arr , str)", () => {
      expect(() =>
        bookSelection.suitableTitles(
          [
            { title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Turbulent Times", genre: "Historic" },
          ],
          "Historic"
        )
      ).not.to.throw();
      expect(() =>
        bookSelection.suitableTitles(
          [
            { title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Turbulent Times", genre: "Historic" },
          ],
          2
        )
      ).to.throw();
      expect(() =>
        bookSelection.suitableTitles(
          [
            { title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Turbulent Times", genre: "Historic" },
          ],
          ["Historic"]
        )
      ).to.throw();
      expect(() =>
        bookSelection.suitableTitles(
          { title: "The Da Vinci Code", genre: "Thriller" },
          "Historic"
        )
      ).to.throw();
      expect(
        () => bookSelection.suitableTitles("123", 123),
        `Doesn't throw proper error mess`
      ).to.throw("Invalid input");
      expect(
        () => bookSelection.suitableTitles(123, "123"),
        `Doesn't throw proper error mess`
      ).to.throw("Invalid input");
    });
    it("has .suitableTitles method which accepts (arr , str)", () => {
      expect(
        bookSelection
          .suitableTitles(
            [
              { title: "The Da Vinci Code", genre: "Thriller" },
              { title: "Turbulent Times", genre: "Historic" },
              { title: "KGB in Bulgaria", genre: "Historic" },
            ],
            "Historic"
          )
          .join(" ")
      ).to.equal("Turbulent Times KGB in Bulgaria");
    });
  });
});
