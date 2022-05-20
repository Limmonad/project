"use strict";

// const burger = 5;
// const fries = 0;
// if (burger && fries){
//      console.log("Я наелся");
// }

// console.log(burger && fries); //Это выражение вернуло нам правду.



// console.log((burger === 3 && cola && fries));

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && '121esadscads');
// if (burger === 3 && cola === 1 && fries){
//      console.log("Все сыты");
// } else {
//      console.log("Мы уходим идём в другой заведение");
// }


const burger = 0;
const fries = 0;
const cola = 0;
if (burger || cola || fries){ //Есть хотя бы бургеры в меню
     console.log("Все сыты");
} else {
     console.log("Мы уходим идём в другой заведение");
}
 
console.log (burger || cola || fries);

let johnReport, alexReport, samReport, mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport)