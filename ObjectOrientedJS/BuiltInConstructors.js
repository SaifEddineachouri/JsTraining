// String 

const name1 = 'seif' ;
const name2 = new String('seif');

// name2.foo = 'bar';

console.log(name1);
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

if(name2 === 'seif'){
    console.log('Yes');
} else {
    console.log('No');
}

// Numbers
const Num1 = 5 ;
const Num2 = new Number(5);

// console.log(typeof Num2);


// Boolean
const bool1 = true ;
const bool2 = new Boolean(true);

// console.log(typeof bool2);

// Function

const getSum1 = function(x,y) {
    return x+y ;
}

const getSum2 = new Function('x','y','return 1+1') ;
// console.log(getSum2(1,1));


// Object 
const john = {name : 'john'} ;
console.log(john);
const john2 = new Object({name : 'john'});
console.log(john2);


// Arrays 
const arr1 = [1,2,3] ;
console.log(arr1)
const arr2 = new Array(1,2,3);
console.log(arr2);

// Regular Expressions
const  reg1 = /\w+/ ;
console.log(reg1);
const reg2 = new RegExp('\\w+');
console.log(reg2);
