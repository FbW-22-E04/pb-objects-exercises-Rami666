//1
const data = { a: 1 };
//write your code here 

const isPlainObject = (element) => typeof element === 'object' && !Array.isArray(element) && element !== null;
console.log(isPlainObject(data)); // true

//2
const data2 = { a: 1, b: 2 };
const makePairs = (object) => {
    const result = [];
  
    for (const prop in object) {
      if (object.hasOwnProperty(prop)) {
        result.push([prop, object[prop]]);
      }
    }
  
    return result;
  };
console.log(makePairs(data2)); 


//3
const data3 = { a: 1, b: 2 };
const without = (object, ...args) => {
    const newObject = { ...object };
  
    args.forEach((arg) => {
      delete newObject[arg];
    });
  
    return newObject;
  };
console.log(without(data3, 'b'));


//4
const data4 = { a: 1, b: undefined };
const data40 = { a:undefined };
const isEmpty = (object) => {
    const objectKeys = Object.keys(object);
    if (objectKeys.length === 0) {
      return true;
    }
  
    return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
  };
console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true 

//5
const data5 = { a: 1, b: 1 };  
const data51 = { a: 1, b: 1 };  
const data52 = { a: 1, b: 2 };
const isEqual = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);
  
    if (firstObjKeys.length !== secondObjKeys.length) {
      return false;
    }
  
    return !firstObjKeys.filter((key) => firstObj[key] !== secondObj[key]).length;
//write your code here 
console.log(isEqual(data5, data51)); // true  
console.log(isEqual(data5, data52)); // false

//6
const data6 = { a: { b: [1, 2, 3] } }
//write your code here 
console.log(invoke(data6, 'a.b', 'splice', [1, 2])) // [2, 3]


//7
const data7 = { a: { b: undefined } };
//write your code here 
console.log(isEmptyDeep(data7));


//8
const data8 = { a: 1, b: { c: 1 } };  
const data81= { a: 1, b: { c: 1 } };  
const data82= { a: 1, b: { c: 2 } };
//write your code here 
console.log(isEqualDeep(data8, data81));// true  
console.log(isEqualDeep(data8, data82)); // false  


//9
const data9 = { a: 1, b: 2 };  
const data91 = { c: 1, b: 2 };
//write your code here 
console.log(intersection(data9, data91)); // { b: 2 }


//10
const data10 = { a: 1, b: { c: 3 } };  
const data11 = { c: 1, b: { c: 3 } };
//write your code here 
console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }