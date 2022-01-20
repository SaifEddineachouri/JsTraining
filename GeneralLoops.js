// // For Loop
// for(let i=0 ; i < 10 ; i++){
    

//     if(i === 2){
//         console.log('2 is My Favorite Number');
//         continue;
//     }
 
//     if(i === 5){
//         console.log('Stop the Loop');
//         break ;
//     }

//     console.log(`Number ${i}`);
// }

// // While Loop

// let i=0 ;
// while(i < 10){
//     console.log(' Number '+i);
//     i++;
// }


// // Do While Loops 1 time No matter What
// let i = 100;
// do {
//     console.log(' Number '+i);
//     i++ ;
// }while(i < 10 ) ;

// Loop Through Arrays
const cars = ['Ford','Honda','Toyota'];

// // For Loop
// for(let i = 0 ; i < cars.length ; i++){
//     console.log(cars[i]);
// }

// For Each Loop
// cars.forEach(function(car){
//     console.log(car);
// })

// Or
// cars.forEach(function(car,index,array){
//      console.log(`${index} : ${car}`);
//      console.log(array);
// });



// // Map 
// const users = [
//     {id : 1 , name : 'seif'},
//     {id : 2 , name : 'ahmed'},
//     {id : 3 , name : 'john'},
//     {id : 4 , name : 'sarra'}
// ];

// const ids = users.map(function (users) {
//     return users.id
// })

// console.log(ids);



// For In Loop
const user = {
    firstName : 'Seif',
    lastName : 'Achouri',
    age : 22 
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}