function extensibleObject() {
  const obj = {
    extend(objToInheritFrom) {
      for (const property in objToInheritFrom) {
        if (typeof objToInheritFrom[property] !== 'function') {
            obj[property] = objToInheritFrom[property];
        }else{
            Object.getPrototypeOf(obj)[property] = objToInheritFrom[property];
        }
      }
    },
  };
  return obj;
}
const myObj = extensibleObject();
const template = { 
    extensionMethod: function doSth() {}, 
    extensionMethod1: function doSthDiff() {}, 
    extensionProperty: 'someString' 
  };  
myObj.extend(template);
console.log('');