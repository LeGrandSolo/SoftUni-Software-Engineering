function solve(a, b) {
    for (let n = Math.min(a, b); n > 0; n--) {
        if (a % n == 0 && b % n == 0) {
            return n;
        }
    }
}