function myForEach(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("Первый аргумент должен быть массивом");
      }
      if (typeof callback !== "function") {
        throw new Error("Второй аргумент должен быть функцией");
      }

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const numbers = [1, 2, 3, 4];

myForEach(numbers, (item, index, arr) => {
    console.log(item, index, arr)
});

