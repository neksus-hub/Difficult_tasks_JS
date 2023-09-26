"use strict";
let lang = prompt("Укажите значение ru или en");

// метод if
if (lang === "ru") {
  console.log(
    "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
  );
} else if (lang === "en") {
  console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else if (lang != "ru" && lang != "en") {
  console.log("Что-то пошло не так!");
}

// метод switch
switch (lang) {
  case "ru":
    console.log(
      "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
    );
    break;
  case "en":
    console.log(
      "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
    );
    break;
  default:
    console.log("Что-то пошло не так");
}
