class Company {
  #invalidInputs = ["", undefined, null];
  constructor() {
    this.departments = {};
    this.#invalidInputs = ["", undefined, null];
  }
  addEmployee(name, salary, position, department) {
    if (
      this.#invalidInputs.includes(name) ||
      this.#invalidInputs.includes(salary) ||
      this.#invalidInputs.includes(position) ||
      this.#invalidInputs.includes(department)
    ) {
      throw TypeError("Invalid input!");
    }
    if (salary < 0) {
      throw TypeError("Invalid input!");
    }
    if (!this.departments.hasOwnProperty([department])) {
      this.departments[department] = [];
      this.departments[department]["allSalariesCombined"] = 0;
    }
    this.departments[department].push({ name, salary, position });
    this.departments[department]["allSalariesCombined"] += salary;
    return `New employee is hired. Name: ${name}. Position: ${position}`
  }
  bestDepartment() {
    let bestAvrgSal = 0;
    let departWithBestAvrgSal;
    for (const depart in this.departments) {
      let avrgSal =
        this.departments[depart].allSalariesCombined /
        this.departments[depart].length;
      if (bestAvrgSal < avrgSal) {
        bestAvrgSal = avrgSal;
        departWithBestAvrgSal = depart;
      }
    }
    let sorted = this.departments[departWithBestAvrgSal].sort((a, b) => {
      if (a.salary === b.salary) {
        return (a.name).localeCompare(b.name);
      }
      return b.salary - a.salary;
    });
    let outputString = `Best Department is: ${departWithBestAvrgSal}\nAverage salary: ${bestAvrgSal.toFixed(2)}`;
    for (const worker of sorted) {
      outputString += `\n${worker.name} ${worker.salary} ${worker.position}`;
    }
    return outputString;
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());