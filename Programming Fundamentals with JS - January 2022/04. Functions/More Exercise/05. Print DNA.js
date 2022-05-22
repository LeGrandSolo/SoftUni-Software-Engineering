function printDnA(num) {
    let arr = `**AT** *C--G* T----T *A--G* **GG** *A--T* C----G *T--T* **AG** *G--G*`.split(' ');
    for (let index = 0; index < num; index++) {
        let i = index;
        if(i >= 10) {
            i = 0;
        }
        console.log(arr[index]);
    }
}
printDnA(11)