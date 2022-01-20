// Global Scope 

var a = 1;
let b = 2 ;
const c = 3;

// function test() {
//     var a = 5;
//     let b = 6 ;
//     const c = 7;
//     console.log('Function Scope' ,a,b,c);
// }

// test();

if(true){
    // Block Scope
    var a = 5;
    let b = 6 ;
    const c = 7;
    console.log('Function Scope' ,a,b,c); 
}

for(var a =0 ; a<10 ; a++){
    console.log(`Loop ${a}`);
}

console.log('Global Scope ',a,b,c);