function myForEach(array, callback) {
    if (!Array.isArray(array)) {
       console.log('Первый аргумент должен быть массивом');
       
    }
    if (typeof callback !== 'function') {
        console.log('Второй аргумент должен быть массивом');
    }

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const numbers = [1, 2, 3, 4];

myForEach(numbers, (item, index, arr) => {
    console.log(item, index, arr)
});

