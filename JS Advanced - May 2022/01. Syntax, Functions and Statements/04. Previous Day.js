function solve(year, month, date) {
    let prevDate = new Date(year, month - 1, --date);
    console.log(`${prevDate.getFullYear()}-${prevDate.getMonth() + 1}-${prevDate.getDate()}`);
}
solve(2016, 9, 30);
solve(2016, 10, 1);