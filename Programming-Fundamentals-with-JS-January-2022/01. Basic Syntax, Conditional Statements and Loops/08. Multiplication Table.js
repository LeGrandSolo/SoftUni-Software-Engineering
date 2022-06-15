function multTable(num) {
    num = Number(num);
    for(i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${num * i}`);
    }
}
multTable(5)