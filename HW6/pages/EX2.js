let arr1 = [7, 5, 6];
let arr2 = [1, 4, 2, 3];

function descending(arr1, arr2) {
  let array = arr1.concat(arr2);
  array.sort((a, b) => {
    return b - a;
  });
  return array;
}

console.log(descending(arr1, arr2));
