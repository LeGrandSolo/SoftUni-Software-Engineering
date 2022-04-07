function employees(array) {
    let employees = {fullName : undefined, nameLength : undefined};
    for (let employee of array){
        employees.nameLength = employee.length;
        employees.fullName = employee;
        console.log(`Name: ${employees.fullName} -- Personal Number: ${employees.nameLength}`)
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )