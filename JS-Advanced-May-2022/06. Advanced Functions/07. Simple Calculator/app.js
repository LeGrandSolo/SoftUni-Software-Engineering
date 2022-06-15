function calculator() {
    return { init, add, subtract };
    function init(selector1, selector2, selectorResult){
        this.selector1 = document.querySelector(selector1);
        this.selector2 = document.querySelector(selector2);
        this.selectorResult = document.querySelector(selectorResult);
    }
    function add(){
        this.selectorResult.value = Number(this.selector1.value) + Number(this.selector2.value);
    }
    function subtract(){
        this.selectorResult.value = Number(this.selector1.value) - Number(this.selector2.value);
    }
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




