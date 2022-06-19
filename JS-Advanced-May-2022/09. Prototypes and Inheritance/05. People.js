function solve() {
  class Employee {
    #indexOfTask;
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.tasks = [];
      this.salary = 0;
      this.#indexOfTask = 0;
    }
    work() {
      if (this.#indexOfTask < this.tasks.length) {
        console.log(this.tasks[this.#indexOfTask]);
        this.#indexOfTask++;
      } else {
        this.#indexOfTask = 0;
        this.work();
      }
    }
    collectSalary() {
      console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
    getSalary() {
      return this.salary;
    }
  }
  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(`${this.name} is working on a simple task.`);
    }
  }
  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(`${this.name} is working on a complicated task.`);
      this.tasks.push(`${this.name} is taking time off work.`);
      this.tasks.push(`${this.name} is supervising junior workers.`);
    }
  }
  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.tasks.push(`${this.name} scheduled a meeting.`);
      this.tasks.push(`${this.name} is preparing a quarterly report.`);
    }
    getSalary() {
      return this.salary + this.dividend;
    }
  }
  return { Employee, Junior, Senior, Manager };
}
const classes = solve();
const junior = new classes.Junior("Ivan", 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
const sinior = new classes.Senior("Alex", 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
const manager = new classes.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
