// Напишите функцию для поверхностного сравнения двух объектов. 
// Поверхностное сравнение объектов - это процесс сравнения ключей объекта и их значений, 
// без учета уровня вложенности. То есть значение с типом object, 
// никогда не будет равен точно такому же значению с типом object, т.к. 
// ссылки на эти значения будут отличаться.

function shallowEquals(obj1, obj2) {

    let len = Object.keys(obj1).length;

    if (len != Object.keys(obj2).length) {
        return console.log(false);;
    }

    for(let i = 0; i < len; i++){
        if (Object.keys(obj1)[i] == Object.keys(obj2)[i]) {
            if (Object.values(obj1)[i] == Object.values(obj2)[i]) {
                continue;
            } else return console.log(false);;
        } else return console.log(false);;
    }

    return console.log(true);


}

shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" }); // true
shallowEquals({ a: 0 }, { a: undefined }); // false
shallowEquals({ a: {} }, { a: {} }); // false
shallowEquals({ a: [] }, { a: [] }); // false
shallowEquals({ a: () => {} }, { a: () => {} }); // false