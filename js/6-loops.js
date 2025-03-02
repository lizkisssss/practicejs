// Вивести в консоль числа від 1 до 5 всіма циклами

const sum =  5;

for(let i=1; i<=sum; i +=1){
    // console.log(i)
}

let index=1
while(index<=sum){
    console.log(index)
    index += 1;
}

// 2
// Переписати на while

// for (let number = 0; number < 5; number += 1) {
//     console.log(`Число ${number}`);
// }

let number = 0;
while(number<=5){
    console.log(number)
    number +=1;
}

// 3
//   Доповни код таким чином, щоб у змінну w записувалося
//  перше число у проміжку від start до end, 
// яке ділиться на 5 без остачі

const start = 6;
const end = 17;
let w;
for(let index = start; index < end; index +=1){
    if(index % 5===0){
    w=index;
    break
    }
}
console.log(w)

// 4
// Виведіть в консоль всі непарні числа від 10 до 20 
// за допомогою циклу for

for (let i = 10; i<=20; i +=1 ){
//    if(i%2===0) {
//        console.log("Парне число")
//        continue
//    }
//    console.log("ne parni", i);

if(i % 2 !== 0){
    console.log("ne parni", i);
}
}

// Напиши цикл, який пропонує в prompt ввести число, більше 100.
// Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.
let userNumber;
do{
    userNumber= prompt('Введіть число більше 100.');

} while (userNumber<100);

console.log(userNumber);


// Напиши скрипт який підраховує загальну суму зп працівників. 
// Кількість робітників зберігається в змінній employees.
// ЗП кожного працівника це випадкове число від 500 до 5000. 
// Записати суму в змінну totalSalary і вивести в на сторінку.

// // 1 змінні
const minSalary = 500;
const maxSalary = 5000;
const employees = 12;
let totalSalary = 0;
for (let i = 0; i < employees; i += 1) {
  const salary = Math.random() * (maxSalary - minSalary) + minSalary;
  console.log(`Зарплата працівника номер ${i + 1}`, Math.floor(salary));
  totalSalary += Math.floor(salary);
}
console.log(totalSalary);