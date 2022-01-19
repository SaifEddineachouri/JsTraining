const name = 'seif';
const age = 21 ;
const job = 'web Developer' ;
const city = 'Tunis' ;

let html ;

// Without template strings (ES5)

html = '<ul>' +
            '<li> Name :'+ name +'</li>'+
            '<li> Age :'+ age +'</li>'+
            '<li> Job :'+ job +'</li>'+
            '<li> City :'+ city +'</li>'+
        '</ul>'

function hello(){
    return 'hello' ;
}

// With template strings (ES6)
html = `<ul>
            <li> Name : ${name} </li>
            <li> Age : ${age} </li>
            <li> Job : ${job} </li>
            <li> City : ${city} </li>
            <li>${2+2}</li>
            <li>${hello()}</li>
            <li>${ age > 20 ? `Over 20` : `Under 20`}</li>
        </ul>` ;

document.body.innerHTML =  html ;