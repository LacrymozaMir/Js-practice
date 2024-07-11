// Реализуйте, на выбор, один из методов массива: map, sort, filter.

// [].myMap((item, index, arr) => {});
// [].myFilter((item, index, arr) => {});
// [].mySort((a, b) => {});
// [].mySort();

Array.prototype.myMap = function(callback) {
    const result = [];
    // this здесь является самим массивом, к которому обращаемся

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;

}


let arr1 = [1, 2, 4, 6];
let roots = arr1.myMap(item => Math.sqrt(item));
let double = arr1.myMap(item => item += 1);


console.log(roots);
console.log(double);




