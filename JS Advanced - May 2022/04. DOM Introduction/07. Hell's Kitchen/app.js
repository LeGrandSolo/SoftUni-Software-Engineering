function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      const restaurants = {};
      for (let token of input) {
         let numOfWorkers = 0;
         let workerSalaryTotal = 0;
         token = token.split(' - ');
         let [restName, workers] = token;
         //PizzaHut / Peter 500, George 300, Mark 800
         workers = workers.split(', ');
         for (const worker of workers) {
            let [name, salary] = worker.split(' ');
            salary = Number(salary);
            if (!restaurants.hasOwnProperty(restName)) {
               restaurants[restName] = {};
            }
            restaurants[restName][name] = salary;
            numOfWorkers++;
            workerSalaryTotal += salary;
            if (!restaurants[restName].biggestSalary || restaurants[restName].biggestSalary < salary) {
               restaurants[restName].biggestSalary = salary;
            }
         }
         if (!restaurants[restName].numOfWorkers) {
            restaurants[restName].numOfWorkers = 0;
         }
         if (!restaurants[restName].workerSalaryTotal) {
            restaurants[restName].workerSalaryTotal = 0;
         }
         restaurants[restName].workerSalaryTotal += workerSalaryTotal;
         restaurants[restName].numOfWorkers += numOfWorkers;
         restaurants[restName].avrSalary = restaurants[restName].workerSalaryTotal / restaurants[restName].numOfWorkers;
      }
      let highestAvr = 0;
      let currHighest;
      for (const restaurant in restaurants) {
         if (highestAvr < restaurants[restaurant].avrSalary) {
            highestAvr = restaurants[restaurant].avrSalary;
            currHighest = restaurant;
         }
      }
      let bestRestOutput = document.querySelector('#bestRestaurant p');
      bestRestOutput.textContent = `Name: ${currHighest} Average Salary: ${restaurants[currHighest].avrSalary.toFixed(2)} Best Salary: ${restaurants[currHighest].biggestSalary.toFixed(2)}`;
      delete restaurants[currHighest].workerSalaryTotal;
      delete restaurants[currHighest].numOfWorkers;
      delete restaurants[currHighest].biggestSalary;
      delete restaurants[currHighest].avrSalary;
      let sorted = Object.entries(restaurants[currHighest]).sort((a, b) => b[1] - a[1]);
      let strWorkersOutput = '';
      sorted.forEach(x => {
         strWorkersOutput += `Name: ${x[0]} With Salary: ${x[1]} `;
         return strWorkersOutput;
      })
      strWorkersOutput = strWorkersOutput.substring(0, strWorkersOutput.length - 1);
      let bestRestWorkerOutput = document.querySelector('#workers p');
      bestRestWorkerOutput.textContent = strWorkersOutput;
   }
}