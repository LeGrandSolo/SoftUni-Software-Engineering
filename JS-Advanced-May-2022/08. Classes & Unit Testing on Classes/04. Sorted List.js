class List {
  constructor(num) {
    this.list = [];
    this.size = 0;
  }
  add(num) {
    if (typeof num !== "number") {
      throw TypeError("Please enter a number");
    }
    this.list.push(num);
    this.list.sort((a, b) => a - b);
    this.size++;
    return new List();
  }
  remove(index) {
    if (!Number.isInteger(index) || index < 0 || index > this.list.length - 1) {
      throw TypeError("Please enter valid index");
    }
    this.list.splice(index, 1);
    this.list.sort((a, b) => a - b);
    this.size --;
    return new List();
  }
  get(index) {
    if (!Number.isInteger(index) || index < 0 || index > this.list.length - 1) {
      throw TypeError("Please enter valid index");
    }
    return this.list[index];
  }
}
let list = new List();
console.log(list.hasOwnProperty("size"));
list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
