class Person {

    constructor(firstName , lastName , dob){
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}` ; 
    }

    getAge(){
        const diff = Date.now()- this.birthday.getTime();
        const ageDate = new Date (diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970 );
    }

    getMarried(newLastName){
        this.lastName = newLastName ;
    }

    static addNumbers(x,y){
        return x+y ;
    }

}

const  Marry =  new Person('Marry','Johnson','12-05-1999');

console.log(Marry.greeting());
console.log(Marry.getAge());
Marry.getMarried('Achy');

console.log(Marry);
console.log(Person.addNumbers(2,5));

