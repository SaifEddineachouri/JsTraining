const personPrototypes = {
    greeting: function() {
        return `Hello There ${this.firstName} ${this.lastName}`;
    },
    getMarried : function (newLastName) {
        this.lastName = newLastName ;
    }
}


const marry = Object.create(personPrototypes);
marry.firstName = 'marry'; 
marry.lastName = 'Williams' ;
marry.age = 30 ;

console.log(marry);

marry.getMarried('Johnny');
console.log(marry.greeting());

const brad = Object.create(personPrototypes , {
    firstName : { value : 'Brad'},
    lastName : { value : 'Achy'},
    age : { value : 30}
});

console.log(brad);

console.log(brad.greeting());