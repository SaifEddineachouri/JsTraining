// // document.getElementsByClassName
// // Generally  selector
// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// console.log(items[0]);
// items[0].style.color='red';
// items[1].textContent='Hello World';

// // more specific selector
// const listItems= document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color='red';
// lis[1].textContent='Hello World';

// // convert  html  collection  to  array  
// lis = Array.from(lis);
// //Reverse array 
// lis.reverse();
// //loop into  array  elemnts 
// lis.forEach(function(li,index){
//     console.log(li.className);
//     li.textContent=`${index} : Hello`;
// });
// // output the reverse of the array
// console.log(lis);

// document.querySelectorAll 

const items =  document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (item , index) {
    item.textContent =`${index} : Hello`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven=document.querySelectorAll('li:nth-child(even');

liOdd.forEach(function (li) {
    li.style.background = '#ccc';
});

// liEven.forEach(function (li) {
//     li.style.background='#ddd';
// });


for (let i = 0; i < liEven.length;i++) {
    liEven[i].style.background='#ddd'
    
}

console.log(items);