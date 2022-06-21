(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n, this.length);
    };
    Array.prototype.take = function(n){
        return this.slice(0, n);
    };
    Array.prototype.sum = function(){
        return this.reduce((pV, cV)=>pV+cV,0);
    };
    Array.prototype.average = function () {
        return this.reduce((pV, cV)=>pV+cV) / this.length;
    };
})();
let arr = [12,32,2,1,2];
console.log(arr.last());