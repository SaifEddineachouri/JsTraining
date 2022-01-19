const firstName = "Seif Eddine" ;
const lastName = "Achouri";
const age = 21 ;
const str = "Hello how Are you Today";
const tags = "Web design , Web dev , Graphic Design";
let val ;

//Concatenation 
val = firstName + " " + lastName ;

//Append
val ="Seif Eddine " ;
val +="Achouri" ;

val = "Hello , My name is "+firstName+'and I am '+age ;

// Escaping '' \
val = 'that\'s awesome , I can\'t wait '

//Length
val =  firstName.length;

//Concat
val =  firstName.concat(' ',lastName);

//change Case
val =  firstName.toUpperCase();
val =  firstName.toLowerCase();

// Index
// get Character with a index
val = firstName[2] ;

// indexOf()
val = firstName.indexOf('i'); //Se/i/f
val = firstName.lastIndexOf('i'); //Edd/i/ne

// charAt()
val =  firstName.charAt(2);

//get Last Character
val = firstName.charAt(firstName.length-1) ;

// Substring()
val = firstName.substring(5,6); //Eddine

// Slice() similar to Substring() but work with arrays
val = firstName.slice(5,firstName.length);
val = firstName.slice(-6); // from the end 

// Split()
val  = str.split(' ') ; //split from  every space
val = str.split(''); // split by char
val = tags.split(',');

// Replace()
val = str.replace('Hello','Hi');

// Includes()
val = str.includes('Hello');

console.log(val);