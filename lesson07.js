"use strict";
const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const day = document.querySelector(".days");
const today = new Date();
const days = function () {
  week.forEach((item, i) => {
    let newdiv = document.createElement("div");
    if (i === +today.getDay() - 1) {
      console.log(today.getDay());
      newdiv.classList.add("today");
      newdiv.textContent = week[i];
    }
    if (item == "Суббота" || item == "Воскресенье") {
      // Если выходные то
      newdiv.classList.add("italic");
      newdiv.textContent = week[i];
    } else {
      newdiv.textContent = week[i];
    }
    day.appendChild(newdiv);
  });
};

days();
