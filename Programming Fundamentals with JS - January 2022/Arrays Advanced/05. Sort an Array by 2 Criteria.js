function sortBy2Criteria(array) {
    let firstComparison = (a, b) =>{
        let result = a.length - b.length;
        if (result > 0 || result < 0) {
            return result;
        }else{
            if(b[0].toUpperCase() == b[0] && a[0].toUpperCase() != a[0]){
                return 1;
            }else if(a[0].toUpperCase() == a[0] && b[0].toUpperCase() != b[0]){
                return -1;
            }
            result = a.localeCompare(b);
            return result;
        }
    }
    array.sort(firstComparison);
    for (let name of array) {
        console.log(name);
    }
}
sortBy2Criteria(['Isacc', 'Theodor', 'Jack','lek', 'Harrison', 'George'])