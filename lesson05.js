let arr = ["245", "424", "123123", "223123", "324324", "34566", "657757"];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  broken = arr[i].split("");
  if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
    console.log(arr[i]);
  }
}
