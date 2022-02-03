const user = {email : 'seifachouri@gmail.com'};

// Produce an error
try {
    // // Produce a Reference Error
    // myFunction();

    // // Produce a TypeError
    // null.myFunction();

    // // Produce Syntax Error
    // eval('Hello World');

    // // Produce a URIError
    // decodeURIComponent('%');

    if(!user.name){
        throw new SyntaxError('User has no  name');
    }

}catch(e){
    console.log(`User Error ${e.message}`);
    console.log(e);
    // console.log(`${e.name} : Its Null Stupid `);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
    // console.log(e instanceof TypeError);

}finally {
    console.log('Finally  runs reguardless of results ...');
}

// with try catch Program  continue Execution  the other code

console.log('Hello ... ');