// Sets - Store unique values of  any type

const  set1 =  new Set();

// Add values to  set 

set1.add(100);
set1.add('A string');
set1.add({name  :' seif'});
set1.add(true);
// unique values 
set1.add(100);

const  set2 =  new Set([1,true,'string',{name : 'seif'}]);

console.log(set2);

// Get  count
console.log(set2.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50+50));
console.log(set1.has({name : 'seif'}));

console.log({name : 'seif'} === {name : 'seif'});

// hello  is primitive value
console.log('hello' === 'hello');

// Delete from set
set1.delete(100);
console.log(set1);

// Iterate through sets
// For ... of

for(let item of set1){
    console.log(item);
}
 // Or
for(let item of set1.values()){
    console.log(item);
}

set1.forEach((item)=>{
    console.log(item);
});

// Convert  sets into arrays

const  setArr = Array.from(set1);
console.log(setArr);