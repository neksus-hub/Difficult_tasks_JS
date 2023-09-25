let num = 266219;
let array = ("" + num).split("").map(Number); // разделил число на массив цифр
let initVal = 1; // стартовое значение массива
for (let i = 0; i < array.length; ++i) {
  // обозначил массив
  initVal *= array[i]; // на каждой итерации умножаю эл-т массива на предыдущий
}
console.log(array); // вывел массив
console.log(initVal); // вывел результат умножения эл-тов массива
initVal **= 3; // возвел в 3 степень
console.log(initVal); // вывел р-т умн-я в 3-ую степень
console.log(String(initVal).slice(0, 2)); // вывел первые два эл-та плученного числа
