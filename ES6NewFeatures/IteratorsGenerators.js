// function nameIterator(names) {
//     let nextIndex = 0 ;

//     return {
//         next : function() {
//             return nextIndex < names.length ? 
//             {value : names[nextIndex++] , done:false}:
//             {done : true}
//         }
//     }
// }

// const  namesArr = ['Jack','Jill','John'];

// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// // Generator Example
// function* sayNames() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const names = sayNames() ;

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());


// ID Creator
function* createIDS(){
    let index = 0 ;
    while (true) {
        yield index ++ ;
    }
}

const  gen = createIDS();

console.log(gen.next().value);