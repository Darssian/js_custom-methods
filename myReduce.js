function myReduce(array, callback, acc) {
    if (!Array.isArray(array)) {
      throw new Error("Первый аргумент должен быть массивом");
    }
    if (typeof callback !== "function") {
      throw new Error("Второй аргумент должен быть функцией");
    }
  
    let accTrue = acc !== undefined;
    if (!accTrue) {
      if (array.length === 0) {
        throw new Error("Пустой массив без начального значения");
      }
      acc = array[0];
    }
  
    for (let i = accTrue ? 0 : 1; i < array.length; i++) {
      acc = callback(acc, array[i]);

    }
    
    return acc;
  }

const numbers = [1, 2, 3, 4];


console.log(myReduce(numbers, ((acc, item) => acc + item), 30));
