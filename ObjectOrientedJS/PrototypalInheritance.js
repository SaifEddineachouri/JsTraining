// Person Constructor

function Person(firstName , lastName) {
    this.firstName = firstName;
    this.lastName = lastName ;
}

// Greeding 
Person.prototype.greeting = function() {

    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('john','Doe');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName,lastName , phoneNumber , memberShip) {
   
    Person.call(this,firstName,lastName);

    this.phoneNumber = phoneNumber ;
    this.memberShip = memberShip ;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer ;

// Create Customer
const customer1 =  new Customer('seif','achouri','555-555-555','Standard');

console.log(customer1);

Customer.prototype.greeting = function() {
    console.log(`Hello There ${customer1.firstName} ${customer1.lastName} Welcome to the Company`);
}
console.log(customer1.greeting());