// Реализуйте функцию pipe. 
// Она должна принимать неопределенное количество функций-обработчиков 
// и возвращать функцию, которая будет прогонять принимаемый параметр через все обработчики, 
// а на выходе вернет результат работы. 
// Функции-обработчики должны вызываться справа налево.

const pipe = (...func) => init => {
    return func.reduceRight((currentValue, currentFunc) => {
        return currentFunc(currentValue);
    }, init);
}

const fillUser = pipe (
    (user) => ({ ...user, lastName: "Pass" }),
    (user) => ({ ...user, age: 29 }),
    (user) => ({ ...user, city: "Boston" }),
);

console.log(fillUser());

