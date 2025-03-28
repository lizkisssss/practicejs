// 1. 
// Створити функцію hello1(), 
// яка при визові буде вертати текст “Привіт JavaScript”.

const hello = function(){
    return "Привіт JavaScript";
}
console.log(hello());

// 2. 
// Напишіть функцію hello2(),
//  яка при виклику буде приймати змінну name (наприклад, «Василь») 
//  і виводити рядок (в нашому випадку «Привіт, Василь»).

const hello2 = function(name){
    return"Привіт" + name 
}
const name = 'Василь';
console.log(hello2(name))

/* 3
Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. 
Вона приймає два параметри, 

orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
pricePerItem - другий параметр, ціна одиниці товару.
Функція повинна повертати загальну суму покупки - 
результат множення кількості товарів на ціну одного.

Виклик calculateTotalPrice(5, 100) повертає 500 */

const calculateTotalPrice = function (orderedQuantity, pricePerItem) {
    return orderedQuantity * pricePerItem
};
console.log(calculateTotalPrice(5, 100));

// 4. 
// Напишіть функцію mul(n, m), яка приймає два аргументи
//  і повертає добуток, суму і різницю цих аргументів. 
//  Перевірте її роботу.
const mul = function(n, m){
    const sum = n + m;
    const minus = n - m;
    const multiplay = n * m;
    return [sum, minus, multiplay];
}
console.log(mul(10, 5));

//     Задачка
/*створи функцію calculateTax, щоб вона повертала суму податку - результат множення суми на податкову ставку.
що приймає два параметри:
amount - число, сума від якої потрібно обчислити податок. 
Обов'язковий параметр.
taxRate - число, податкова ставка. Необов'язковий параметр. 
// За замовчуванням його значення має бути 0.2. */

const calculateTax = function(amount , taxRate=0.2){
    console.log();
    return amount*taxRate;
}
console.log(calculateTax(100));
 
calculateTax(100, 0.1);  
calculateTax(200, 0.1);  
calculateTax(100, 0.2); 

// 2. напиши функцію, яка буде перевіряти чи є продукт на складі
// приймає storage масив з продуктами та
// item продукт, який потрібно знайти.
// Використовуй пошук в масиві за доп методу includes
// якщо є товар повертати повідомлення 
// `${item} is available to order!`
// якщо немає  "Sorry! We are out of stock!";

const checkStorage = function(storage, item) {
    let convertItem = item.toLowerCase();
    if (storage.includes(item)) {
        console.log(`${item} is avaliable to order`);
        return;
    } else{
        console.log("Sorry! We are out of stock!");
        return
    };
};

checkStorage(["apple", "plum", "pear"], "pLuM");