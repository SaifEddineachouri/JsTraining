// const  sayHello = function () {
//     console.log('Hello')
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// const sayHello = () => console.log('Hello');
 
// const sayHello = () => 'Hello' ;

// const sayHello = function(){
//     return 'Hello';
// }

// Return Object

// const  sayHello = () => ({msg : 'Hello'});
// console.log(sayHello());

// Single Param does not need parenthesis
// const  sayHello = name => console.log(`Hello ${name}`);

// // Multiple params need parenthesis
// const sayHello = (firstName,lastName) => console.log(`${firstName} ${lastName}`);

// sayHello('Seif','Achouri');


const  users = ['seif','mohamed','zied','ahmed'];

// const nameLengths = users.map(function (name) {
//     return name.length;
// });

// const nameLengths = users.map((name) => {
//     return name.length;
// });

const  nameLengths = users.map (name => name.length);

console.log(nameLengths);


