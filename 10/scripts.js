// Обновите функцию promiseStack, таким образом, 
// чтобы она принимала второй необязательный аргумент 
// отвечающий за количество параллельно обрабатываемых промисов.
// Результатом выполнения данного кода должно быть следующее:
// через 4 секунды в консоль выведется одновременно две “1”
// еще через 2 секунды одновременно две “2”
// еще через 1 секунду одновременно две “3”
// еще через 3 секунды “4”

const asyncTimeout = (timeout) => new Promise(res => {
  setTimeout(() => {
      res();
  },timeout);
});

function promiseStack(promises, count = 1) {
  return new Promise((resolve, reject) => {
    const results = [];
    let running = 0;
    let index = 0;

    const executeNext = () => {
      if (running < count && index < promises.length) {
        running++;
        promises[index]()
          .then((result) => {
            results[index] = result;
            running--;
            if (index < promises.length) {
              executeNext();
            }
            if (running === 0 && index === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
        index++;
        executeNext();
      }
    };

    executeNext();
  });
}

promiseStack([
  () => asyncTimeout(4000).then(() => console.log(1)),
  () => asyncTimeout(4000).then(() => console.log(1)),
  () => asyncTimeout(2000).then(() => console.log(2)),
  () => asyncTimeout(2000).then(() => console.log(2)),
  () => asyncTimeout(1000).then(() => console.log(3)),
  () => asyncTimeout(1000).then(() => console.log(3)),
  () => asyncTimeout(3000).then(() => console.log(4)),
], 2);