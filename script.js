let num = 266219;
let array = ("" + num).split("").map(Number);
let initVal = 1;
for (let i = 0; i < array.length; ++i) {
  initVal *= array[i];
}
console.log(array);
console.log(initVal);
initVal **= 3;
console.log(initVal);
console.log(typeof initVal);
