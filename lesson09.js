"use strict";

// переменные
const getFormatA = document.querySelector(".format-a");
const getFormatB = document.querySelector(".format-b");
let numberDay;
let todayWeekDay;
let numberYear;
let numberMonth;
let numberMinutes;
let numberHours;
let numberSeconds;
let hour;
let minute;
let second;
let dateFormatA;
let dateFormatB;

let decOfHours = ["час", "часа", "часов"];
let decOfMinutes = ["минута", "минут", "минуты"];
let decOfSeconds = ["секунда", "секунд", "секунды"];

let weekDays = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

// Объявление функций

let declensionOfHours = function (word) {
  if (word === 0 || (word >= 5 && word <= 20)) {
    hour = decOfHours[2];
  } else if (word === 1 || word === 21) {
    hour = decOfHours[0];
  } else {
    hour = decOfHours[1];
  }
};

let declensionOfMinutes = function (word) {
  if (
    word === 0 ||
    (word >= 5 && word <= 20) ||
    (word >= 25 && word <= 30) ||
    (word >= 35 && word <= 40) ||
    (word >= 45 && word <= 50) ||
    (word >= 55 && word <= 60)
  ) {
    minute = decOfMinutes[1];
  } else if (
    word === 1 ||
    word === 21 ||
    word === 31 ||
    word === 41 ||
    word === 51
  ) {
    minute = decOfMinutes[0];
  } else {
    minute = decOfMinutes[2];
  }
};

let declensionOfSeconds = function (word) {
  if (
    word === 0 ||
    (word >= 5 && word <= 20) ||
    (word >= 25 && word <= 30) ||
    (word >= 35 && word <= 40) ||
    (word >= 45 && word <= 50) ||
    (word >= 55 && word <= 60)
  ) {
    second = decOfSeconds[1];
  } else if (
    word === 1 ||
    word === 21 ||
    word === 31 ||
    word === 41 ||
    word === 51
  ) {
    second = decOfSeconds[0];
  } else {
    second = decOfSeconds[2];
  }
};

let start = function () {
  todayWeekDay = new Date();
  numberDay = todayWeekDay.getDay();
  numberMonth = todayWeekDay.getMonth();
  numberYear = todayWeekDay.getFullYear();
  numberHours = todayWeekDay.getHours();
  numberMinutes = todayWeekDay.getMinutes();
  numberSeconds = todayWeekDay.getSeconds();
};

let today = new Date().toLocaleString("ru", {
  month: "long",
  day: "numeric",
});

let ifLessThanTen = function (num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};
// вызов функций

start();
declensionOfHours(numberHours);
declensionOfMinutes(numberMinutes);
declensionOfSeconds(numberSeconds);

dateFormatA =
  "Сегодня " +
  weekDays[numberDay] +
  ", " +
  today +
  " " +
  numberYear +
  " года, " +
  numberHours +
  " " +
  hour +
  " " +
  numberMinutes +
  " " +
  minute +
  " " +
  numberSeconds +
  " " +
  second;

dateFormatB =
  ifLessThanTen(numberDay) +
  "." +
  ifLessThanTen(numberMonth) +
  "." +
  ifLessThanTen(numberYear) +
  " - " +
  ifLessThanTen(numberHours) +
  "." +
  ifLessThanTen(numberMinutes) +
  "." +
  ifLessThanTen(numberSeconds);

//мусорный блок

getFormatA.innerHTML = dateFormatA;
getFormatB.innerHTML = dateFormatB;
