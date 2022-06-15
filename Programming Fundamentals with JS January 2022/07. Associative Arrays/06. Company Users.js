function companyUsers(array) {
    let companies = {};
    for (let companyAndEmployee of array) {
        companyAndEmployee = companyAndEmployee.split(' -> ');
        if (!companies.hasOwnProperty(companyAndEmployee[0])) {
            companies[companyAndEmployee[0]] = [];
        }
        if (!companies[companyAndEmployee[0]].includes(companyAndEmployee[1])) {
            companies[companyAndEmployee[0]].push(companyAndEmployee[1])
        }
    }
    let sorted = Object.keys(companies);
    sorted = sorted.sort((a, b) => a.localeCompare(b));
    for (let company of sorted) {
        console.log(company);
        for (let id of companies[company]){
            console.log(`-- ${id}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    )