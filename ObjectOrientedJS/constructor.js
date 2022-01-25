// Person Constructor 
function Person(name,dob) {
    this.name = name;
    // this.age = age;
    // Person initia
    // console.log(this);
    this.birthday = new Date(dob);

    this.getAge = function() {

        const diff = Date.now() - this.birthday.getTime();
        console.log(diff);
        const ageDate = new Date(diff);
        console.log(ageDate);
        return Math.abs(ageDate.getUTCFullYear() - 1970 );
    
    }
}

// window object 
// console.log(this);


// const brad = new Person('brad',36) ;
// const john = new Person('john',30) ;

// console.log(brad.name,brad.age);
// console.log(john.name,john.age);


const brad = new Person('brad','09-09-1999');
console.log(brad);

console.log(brad.getAge());
