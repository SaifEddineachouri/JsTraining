// Destructuring Assignement

let a,b ;

[a,b] = [100,200];

console.log(a);
console.log(b);

//Rest Patern 
[a,b,c, ...rest] = [100,200,300,400,500];

({a,b} = {a:100,b:200,c:300,d:400,e:500});
({a,b,...rest} = {a:100,b:200,c:300,d:400,e:500})
console.log(rest);

// // Array  Destructiong
// const  people = ['John','Beth','Mike'];

// const [person1,person2,person3] = people ;
// console.log(person1 , person2 , person3);

function getPeople() {
    return ['John','Beth','Mike'];
}

[person1,person2,person3] = getPeople();

console.log(person1,person2,person3);

// Object Destructuring
const  person = {
    name : 'John Doe',
    age : 32 ,
    city : 'miami',
    gender : 'male'
}

// // Old ES5 
// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender;


// New ES6 
const {name,age,city,gender} = person ; 

console.log(name,age,city,gender);