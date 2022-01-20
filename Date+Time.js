let val ;

const today = new Date();
let Birthday =  new Date('12/05/1999 11:25:00');
Birthday =  new Date('December 05 1999');
Birthday =  new Date('12/05/1999');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //amount of seconds

Birthday.setMonth(10);
Birthday.setDate(15);
Birthday.setFullYear(1998);
Birthday.setHours(16);
Birthday.setMinutes(20);
Birthday.setSeconds(25);

console.log(Birthday) ;