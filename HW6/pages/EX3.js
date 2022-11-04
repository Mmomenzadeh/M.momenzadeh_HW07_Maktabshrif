let furits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Lemons",
  "Blackberries",
  "Apple",
  "Mango",
];

function noRepeat(array) {
  let newarray = [new Set([...array])];
  return newarray;
}

console.log(noRepeat(furits));
