"use strict";
// console.log('arr' + " - object ");
// console.log (4 + +"5");


// let incr = 10,
// decr = 10;

// incr++;
// decr--;
// console.log (incr);
// console.log(decr);

function  fak(n){
    let rez = 0;
    for (let i = 1;i < n;i++){
            rez = n * i;
    }
    return rez;
    
}
 
let n = +prompt("Введите число","123");
console.log(fak(n));

