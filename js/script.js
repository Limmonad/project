"use strict";

const a = prompt("Какую модель телефона смотрели за последнее время", ""),
     b = +prompt ("На сколько баллов по 10-ти бальной школе оцениваете её"),
     c = prompt("Какую модель телефона смотрели за последнее время", ""),
     d = +prompt ("На сколько баллов по 10-ти бальной школе оцениваете её");


const databaseTelephone = {
     manufacturedandMarks: {},
};
if ((b >= 1 && b <=10) && (d >= 1 && d <=10)){
     databaseTelephone.manufacturedandMarks[a] = b;
     databaseTelephone.manufacturedandMarks[c] = d;
     
}
else {
     alert("Ошибка,впишите значения по 10-ти бальной школе");
}
console.log(databaseTelephone);