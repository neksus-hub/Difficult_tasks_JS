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

//многомерный массив
let days = {
  // Массив с днями недели
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

const getDay = (lang) => {
  return days[lang];
};

console.log(getDay(lang));
