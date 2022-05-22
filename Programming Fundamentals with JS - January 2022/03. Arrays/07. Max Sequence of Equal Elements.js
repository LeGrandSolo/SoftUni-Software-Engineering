function maxSeq(arr) {
    let seqNum = 0;
    let tempSeqNum = 0;
    let pervSeqNum = 0;
    let seqArr = [];
    let isBiggestSeq = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] || arr[i] == arr[i - 1]) {
            tempSeqNum++
            if (tempSeqNum > pervSeqNum){
                if(seqArr[0] != arr[i]) seqArr = []
                seqArr.push(arr[i])
                isBiggestSeq = true
            }
        }else {
            if (isBiggestSeq) {
                pervSeqNum = tempSeqNum
                isBiggestSeq = false
            }
            tempSeqNum = 0
        }
    }
    console.log(seqArr.join(' '));
}
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3])