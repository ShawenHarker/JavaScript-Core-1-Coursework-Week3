// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
 function multiplyNumbers (number) {
     return number * 100;
 }

 let multipliedNumbers = numbers.map(multiplyNumbers);
//  console.log(multipliedNumbers);

let multipliedNumbers1 = numbers.map(function multiplyNumbers1(num) {
    return num * 100;
})
// console.log(multipliedNumbers1);

let multipliedNumbers2 = numbers.map(function (num) {
    return num * 100;
})
// console.log(multipliedNumbers2);

let multipliedNumbers3 = numbers.map(num => {
    return num * 100;
}) 
// console.log(multipliedNumbers3);

let multipliedNumbers4 = numbers.map((num) => num * 100);
console.log(multipliedNumbers4);