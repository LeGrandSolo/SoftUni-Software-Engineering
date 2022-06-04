function generateReport() {
    let checkBoxes = document.querySelectorAll('thead tr th input');
    let indexesOfCheckedAndNames = {};
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            indexesOfCheckedAndNames[checkBoxes[i].parentElement.textContent] = i;
        }
    }
    let rows = document.querySelectorAll('tbody tr');
    let objects = [];
    for (const row of rows) {
        let colms = row.querySelectorAll('td');
        let newObj = {};
        for (const property in indexesOfCheckedAndNames) {
            newObj[property.toLowerCase().trim()] = colms[indexesOfCheckedAndNames[property]].textContent;
        }
        if (Object.keys(newObj).length > 0) {
            objects.push(newObj);
        }
    }
    let output = document.getElementById('output');
    output.textContent = JSON.stringify(objects);
}