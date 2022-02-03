// Maps = key , value pairs - can use any  type as a key or value 

const map1 =  new Map();

// Set  keys
const  key1 = 'some String',
       key2 = {},
       key3 = function() {}


// Set map  values by  key 
map1.set(key1, ' Value of key  1');
map1.set(key2, ' Value of key  2');
map1.set(key3, ' Value of key  3');

// Get values by key
console.log(map1.get(key1),map1.get(key2),map1.get(key3));

// Count values
console.log(map1.size);

// Iterating through Maps
// Loop using for ... of to  get keys and values
for(let [key,value] of map1){
    console.log(`${key} = ${value}`);
}

// Iterate keys only
for(let key  of map1.keys()){
    console.log(key);
}

// Iterate values only 
for(let value of map1.values()){
    console.log(value);
}

// Loop with  forEach
map1.forEach((key,value)=>{
    console.log(`${key} : ${value}`);
});


// Convert To Arrays
// Create an  array of the key value pairs
const keyValArray = Array.from(map1);
console.log(keyValArray);

// Create an  array of the values
const ValArray =  Array.from(map1.values());
console.log(ValArray);

// Create an  array of the Keys
const KeyArray =  Array.from(map1.keys());
console.log(KeyArray);