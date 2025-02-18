function myMap(array, callback) {
  if (!Array.isArray(array)) {
    console.log("Первый аргумент должен быть массивом");
  }
  if (typeof callback !== "function") {
    console.log("Второй аргумент должен быть функцией");
  }

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

const numbers = [1, 2, 3, 4];

console.log(myMap(numbers, (item) => item + 1));
