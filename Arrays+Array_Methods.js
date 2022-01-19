// Create Some Arrays 

// Array of numbers
const numbers = [20 , 21 , 25 ,50 ,60] ;
// Array of numbers Second Method
const numbers2 = new Array(22,27,80,100);
// Array of Strings
const fruits = ['Apple','Banana','Orange','Pear'];
// Mixed Array
const mixed = [22,'Hello',true,undefined,null,{a:1,b:2,c:3}, new Date()];

let val ;

// Array Length
val = numbers.length;

// Check if is Array
val = Array.isArray(numbers);

// Get Value
val =  numbers[3];
val =  numbers[0];

// Change Array Value just one item
numbers[0] = 100 ;

//find index of value
val = numbers.indexOf(100) 

//Mutating Array
// Add to the End
numbers.push(250) ;

// Add to the Front
numbers.unshift(120);

// take off from the end
numbers.pop();

// take off from the front .
numbers.shift();

// splice values
numbers.splice(0,1);

// reverse an Array
numbers.reverse();

// Concatinate an array 
val =  numbers.concat(numbers2);

// // Sort Array
// val = fruits.sort();
// val = numbers.sort();

// // use the "compare function" ASC sort
// val = numbers.sort(function(x,y){
//     return x - y;
// })

// // use the "compare function" DESC sort
// val =  numbers.sort(function(x,y){
//     return y - x ;
// })

function over30(num){
    return num>30 ;
}

val = numbers.find(over30);

console.log(numbers);
console.log(val);
