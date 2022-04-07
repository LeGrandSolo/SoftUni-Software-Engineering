function loadingBar(percent) {
    percent == 100? console.log(`100% Complete!\n[${bar(100).join('')}]`) :
    console.log(`${percent}% [${bar(percent).join('')}]\nStill loading...`);
    function bar(percent) {
        let arr = new Array(10);
        arr.fill('.');  
        for(let index = 0; index < Math.floor(percent / 10); index++){
            arr[index] = '%';
        }
        return arr;
    }
}
loadingBar(50)