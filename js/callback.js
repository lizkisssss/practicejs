// const hello = () => "Hello JavaScript";
//     console.log(hello);

// const hello2 = (name) => "Hello" + name;

// const hello = () => return `hello ${name}`

// 1. Зробити функцію для фільтрації масиву чисел згідно переданого callbake


const array = [1, 3, 2, 5, 4];


// const filter = (arr) =>{
//   let filteredArray = []
//   for(const number of arr){
//     if(number > 2){
//       filteredArray.push(number)
//     }
//   }
//   return filteredArray
// }

// filter(array)

// console.log(filter(array))

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
// const filterNum = (array, callback) => {
//     let filteredNumbers = [];
//     for(const number of array){
//         const passTest = callback(number);
//         if(passTest){
//             filteredNumbers.push(number);
//         }
//     }
//     return filteredNumbers;
// }
// const f1 = (number) => {
// return number < 4;
// }
// console.log(filterNum(arr, f1));
// const f2 = (number) => {
//     return number < 3;
//     }

    // const filter = (array, test) => {
    //   const filteredArray = [];
    
    //   for (const el of array) {
    //     // console.log(el);
    //     const passed = test(el);
    
    //     if (passed) {
    //       filteredArray.push(el);
    //     }
    //   }
    
    //   return filteredArray;
    // };

    // const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const callback1 = (value) => value >= 3;

//const r1 = filter(arr, (value) => value >= 3);
// console.log(r1);

// const callback2 = (value) => value <= 4;

//const r2 = filter(arr, (value) => value <= 4);
// console.log(r2);

/*   1.
Напишіть функцію, яка приймає на вхід масив чисел 
і повертає новий масив, в якому кожний елемент є 
квадратом відповідного елементу вхідного масиву.
Знайдіть суму елементів масиву 
з використанням колбек-функції */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
function squardeAndSum (array) {
    let newArray = []
    for(const num of array){
      newArray.push(num**2)
    }
    let sum = 0;
    for(const num of newArray){
      sum += num;
    }
    return sum
}
console.log(squardeAndSum(arr))