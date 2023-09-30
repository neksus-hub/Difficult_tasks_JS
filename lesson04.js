let ThisString = prompt("Введите строку");
let notAString = +prompt("Введите число");
let withoutSpaces;
let withDots;

function parseStringOrNot(argument) {
  if (typeof argument !== "string") {
    alert("Это не строка!");
  } else {
    withoutSpaces = argument.trim();
    alert("Cтрока без пробелов: " + withoutSpaces);
  }
  if (argument.length > 30) {
    withDots = withoutSpaces.slice(0, 10) + "...";
    alert(withDots);
  }
}

parseStringOrNot(ThisString);
