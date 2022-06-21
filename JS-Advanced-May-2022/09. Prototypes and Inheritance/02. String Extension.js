(function solve() {
  String.prototype.ensureStart = function (_str) {
    if (this.startsWith(_str)) {
      return this.toString();
    }
    return _str + this.toString();
  };
  String.prototype.ensureEnd = function (_str) {
    if (this.endsWith(_str)) {
      return this.toString();
    }
    return this.toString() + _str;
  };
  String.prototype.isEmpty = function () {
    if (this.toString() === "") {
      return true;
    }
    return false;
  };
  String.prototype.truncate = function (_n) {
    if (_n < 4) {
      return ".".repeat(_n);
    }
    if (this.toString().length <= _n) {
      return this.toString();
    } else {
      let lastIndexOfWhiteSpace = this.substring(0, _n - 2).lastIndexOf(" ");
      if (lastIndexOfWhiteSpace !== -1) {
        return this.substring(0, lastIndexOfWhiteSpace) + "...";
      } else {
        return this.substring(0, _n - 3) + "...";
      }
    }
  };
  String.format = function (_str, ..._params) {
    _params.forEach((element, i) => {
      _str = _str.replace(`{${i}}`, element);
    });
    return _str;
  };
})();
let str = "my string";
str = str.ensureStart("my");
console.log(typeof str);
str = str.ensureStart("hello ");
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(9);
console.log(str);
str = str.truncate(5);
console.log(str);
str = str.truncate(3);
console.log(str);
str = String.format("The {0} {1} fox", "quick", "brown");
console.log(str);
str = String.format("jumps {0} {1}", "dog");
console.log(str);
