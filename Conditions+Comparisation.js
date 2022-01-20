// if (condition){
//     do Something 
// }else{
//     do Something else 
// }

const  id = '100' ;

// // Equal To
// if(id == 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// // Not Equal To
// if(id != 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// // Equal To Value & Type
// if(id === 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }


// // Not Equal To Value & Type
// if(id !== 100){
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// if(id){
//     console.log(`the Id is ${id}`);
// } else {
//     console.log('No Id');
// }
// //Or
// // test  if Undefined
// if(typeof id !== 'undefined'){
//     console.log(`the id is ${id}`);
// } else {
//     console.log('No Id');
// }

// Greater or Less Than

// if(id >= 200){
//     console.log('Correct');
// } else {
//     console.log('InCorrect');
// }

// If Else

// const color = 'red' ;
// if(color === 'red'){
//     console.log('Color is Red');
// } else if(color === 'blue'){
//     console.log('Color is Blue');
// } else {
//     console.log('Color is not red or blue');
// }

//Logical Operators
const  name = 'Steve' ;
const  age = 21 ;

// AND &&
if(age > 0 && age< 12){
    console.log(`${name} is a Child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a Teenager`);
} else {
    console.log(`${name} is an  adult `);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} is not Allowed for the Race`);
} else {
    console.log(`${name} is registered for the race`);
}

// Ternary Operator
console.log(id === 100 ? 'Correct' : 'Incorrect'); // test on  value + type 

// Without Braces
if(id === 100) 
    console.log('Correct');
else 
    console.log('Incorrect');