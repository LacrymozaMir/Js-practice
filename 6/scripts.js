// 7) Напишите упрощенную версию для нативного типа данных Set, MySet. 
// Ваша реализация должна предоставлять методы add, has, delete, clear и свойство size. 
// При создании MySet принимает только массив, если передать другое значение, 
// то необходимо выдавать ошибку, что переданное значение не поддерживается. 
// Способы реализации методов произвольные. Пример работы MySet

// const mySet = new MySet([ 0, 1, 2, 3]);

// console.log(mySet); // { 0, 1, 2, 3, size: 4 }
// console.log(mySet.size); // 4
// console.log(mySet.has(6)); // false

// mySet.add(4);
// console.log(mySet); // { 0, 1, 2, 3, 4, size: 5 }

// mySet.delete(2);
// console.log(mySet); // { 0, 1, 2: 3, 3: 4, size: 4 }

// mySet.clear();
// console.log(mySet); // { size: 0 }


class mySet {
    constructor(arr) {
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++){
                    if (arr[i] === arr[j]) {
                        console.log('not all elements are unique')
                        return;
                    }
                }
            }

            this.arr = arr;
        } else console.log('its not array!') 
    }

    add(elem) {
        if (!this.arr.includes(elem)) {
            this.arr.push(elem);
            return this.arr;
        }
        else return;
    }

    has(elem) {
        if (this.arr.includes(elem)) return true;
        else return false; 
    }

    clear() {
        this.arr.splice(0, this.arr.length);
    }

    delete(elem) {
        if (this.arr.includes(elem)) {
            let index = this.arr.indexOf(elem);
            this.arr.splice(index, 1);
            return true;
        } else return false;
    }



}


let set = new mySet([1,2,3,4,5]);
let set1 = new mySet([1,1,1]);

set.add(5);
console.log(set.has(5));
console.log(set);

set.delete(5);

set.clear();

console.log(set);