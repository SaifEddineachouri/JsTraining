const person = {
    firstName : 'Seif',
    lastName : 'Achouri',
    age : 23 ,
    email : 'seifachouri@gmail.com' ,
    hobbies : ['music','sports'] ,
    address : {
        city : 'Tunis',
        State : 'TN'
    },
    getBirthYear : function(){
        return 2022 - this.age ;
    }
}

let val;
val = person ;

// Get Specific Value
val = person['firstName'];
//Or
val =  person.firstName ;
val = person.lastName ;
val = person.email ;
val = person.hobbies[0];
val = person.address.State ;
val = person.getBirthYear();

console.log(val);

const  people = [
    {name : 'seif' , age: 23},
    {name : 'ahmed' , age : 24},
    {name : 'john', age : 26}
];

for(let i = 0 ; i < people.length ;i++){
    console.log(people[i].name);
}