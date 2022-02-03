let re ;
// re = /hello/; // sensitive
re = /hello/i ; // i = case insensitive
// re = /hello/g ; // Global Search

// console.log(re);
// console.log(re.source);

// // exec() - Return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// // Test() - Returns true or false if it match
// const test = re.test('Hello');
// console.log(test);

// // match() - Return result array or null
// const str = 'Hello There' ;
// const result = str.match(re);
// console.log(result);


// // Search() - returns index of the first match if not found returns -1
// const  str = 'Seif Hello there ' ;
// const  result = str.search(re);
// console.log(result);


// Replace() - return new string with some or all matches of a pattern

const  str = 'Hello There';
const  newStr = str.replace(re,'hi');
console.log(newStr);

