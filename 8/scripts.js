// Написать функцию asyncTimeout. 
// Функция должна принимать значения timeout, 
// по завершении которого возвращает зарезолвленный промис. 
// Пример работы:


const asyncTimeout = async (timeout) => {
    return await new Promise((res, rej) => {
        setTimeout(() => res('wow'), timeout);
    })
}


setTimeout(() => console.log(3), 2000);

console.log(1);

asyncTimeout(1000).then((res) => console.log(2, res));