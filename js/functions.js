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

// 1
// Напиши функцію logItems(items) для перебора і логування масива

const logItems = function(arr){
    for(const item of arr) {
        console.log(item)
    }
}

logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
logItems([1, 2, 3, 4, 5]);

//   2
// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення
//  'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення
//  'Користувач [логін] знайдено.'

const loginToFind = 'aj4xth3m4n';
const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];

const findLogin = function(loginsarrey, loginToFind){
    for(const login of loginsarrey){
        if(login === loginToFind){
            return 'Користувач [логін] знайдено.'
        }
    }
    return 'Користувач [логін] знайдено.'
}

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scut

// Напиши функцию slugify(string) яка отримує рядок
// і повертає URL-slug. Заголовок статті складається
// тільки з букв та пропусків

const slugify = function(string){
    const formatedString = string.toLowerCase();
    const arr = formatedString.split(" ");
    return arr.join("-");
}
console.log(slugify("Top 10 benefits of React framework"));
console.log(slugify("Azure Static Web Apps are Awesome"));
console.log(slugify("Technical writing tips for non-native English speakers"));

//  Напиши функцію яка повертає середнє значення з масиву чисел:
//  У цій функції ми передаємо масив чисел в якості параметру,
//  обчислюємо їхню суму та повертаємо середнє значення.
const array = [1, 3, 2, 5, 4];
const calculateAverage = function(arr){
  let total= 0;
  for(const number of arr){
    total += number;
  }
 return total/arr.length;

}
 console.log(calculateAverage(array));