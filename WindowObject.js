// Windows Methods / Objects / Properties

// // Alert 
// alert('Hello World');

// // Prompt 
// const input = prompt("enter a value");
// alert (input) ;

// // Confirm
// if(confirm('Are u  sure')){
//     console.log('Yes');
// }else{
//     console.log('No');
// }

let val ;

// Outer Height and Width
val = window.outerHeight;
val = window.outerWidth;

// Inner Height and Width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollX;
val = window.scrollY;

// Location  Object
val =  window.location ;
val =  window.location.hostname;
val =  window.location.port;
val =  window.location.href;
val =  window.location.search;


// Redirect 
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History Object
// window.history.go(-2);
// val = window.history.length;

// Navigation Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appCodeName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val); 