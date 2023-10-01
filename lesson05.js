let arr = ["245", "424", "123123", "223123", "324324", "34566", "657757"];
const n = 100;

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  broken = arr[i].split("");
  if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
    console.log(arr[i]);
  }
}

for (let i = 1; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      console.log("Простое число: " + i + " Делители: " + "1" + " и " + j);
    }
  }
}
