function parseStringOrNot(txt) {
  if (typeof txt !== "string") return "Передана не строка";
  return txt.trim().length > 30 ? `${txt.trim().slice(0, 30)}...` : txt.trim();
}

console.log(
  parseStringOrNot("    Ехал Грека через реку, видит Грека в реке рак     ")
);
console.log(parseStringOrNot(10));
