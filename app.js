function modifyArray(array1) {
  const newArray = [...array1]
  newArray[3] = newArray[3] ** 2
  return newArray
}

const array1 = [1, 2, 3, 4, 5];
const modifiedArray = modifyArray(array1);

console.log(array1); // [1, 2, 3, 4, 5]
console.log(modifiedArray); // [1, 2, 3, 16, 5]
