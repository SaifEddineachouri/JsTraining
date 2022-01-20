// Function  declarations

function greet(firstName='Seif Eddine',lastName='Achouri'){

    // // ES5
    //     if(typeof firstName === 'undefined'){
    //         firstName = 'Seif Eddine';
    //     }

    //     if(typeof lastName === 'undefined'){
    //         lastName = 'Achouri' ;
    //     }

    // // ES6 put default values in  the function parameters

    // console.log('Hello');
    return 'Hello '+ firstName + ' ' + lastName;
}

// // Call the function
// console.log(greet());


// Function Expresions

 const square = function (x) {
     return x*x;
 };
// console.log(square(3));

// Or Pass default value in the function  parameter
const square2 = function (x=2){
    return x*x;
}
// console.log(square2());

// IIFEs : Function  decalre and run  in  the same time 
// Declaration
// (function(){
//     console.log('IIFe Run');
// }())

// (function(name){
//     console.log(`Hello , ${name}`);
// }('Seif'));

// Property Methods
const toDo = {
    add : function(){
        console.log('Add toDo ...');
    },
    edit : function(id){
        console.log(`Edit toDo ${id}`);
    }
}

toDo.delete = function(){
    console.log('Delete toDo ...');
}

toDo.add();
toDo.edit(12);
toDo.delete();