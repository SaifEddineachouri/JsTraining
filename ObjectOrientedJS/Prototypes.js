// Object Prototype
// Person Prototype

// Person Constructor
function Person(firstName , lastName , dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob) ;

    // this.getAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff) ;
    //     return Math.abs(ageDate.getUTCFullYear() - 1970) ;
    // }
}


// Calculate age 
Person.prototype.getAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff) ;
    return Math.abs(ageDate.getUTCFullYear() - 1970) ;
}

// Get Full Name
Person.prototype.getFullName= function(){
    return `${this.firstName} ${this.lastName}`;
}

// Marry Get Married
Person.prototype.getMarried = function(newLastName){
    this.lastName = newLastName ; 
}



const  john =  new Person('John','BenFoulen','05-05-1999');
const marry = new Person('Marry','benFoule','March 20 1999');


console.log(marry);
console.log(john.getAge());
console.log(john.getFullName());
console.log(marry.getFullName());
marry.getMarried('Achy');
console.log(marry.getFullName());

console.log(marry.hasOwnProperty('firstName'));
console.log(marry.hasOwnProperty('getFullName'));
