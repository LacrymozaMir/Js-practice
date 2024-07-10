// Напишите функцию, которая будет устанавливать значение в объекте, по переданному пути. 
// Сигнатура функции должна быть следующей function ([“user”, “name”], “Sam”, obj). 
// После вызова функции, для поля obj.user.name должно быть установлено значение “Sam”.

let obj = {};

const fillingObj = (arr, value, obj) => {
    let currentStep = obj;

    for (let i = 0; i < arr.length - 1; i++) {
        const key = arr[i];

        if (!(key in currentStep)) {
            currentStep[key] = {};
        }

        currentStep = currentStep[key];
    }

    currentStep[arr[arr.length - 1]] = value;
    
}

fillingObj(["user", "name", "id"], "Sam", obj);
console.log(obj);
