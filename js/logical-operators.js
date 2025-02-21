// 1
// напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2
const x1 = 10;
const x2 = 30;
const number = 45;
const lieOrNot = number < x1;
console.log(lieOrNot);
const lieOrNot2 = number < x1;
console.log(lieOrNot2);
const lieOrNot3 = number < x1 && number < x2;
console.log(lieOrNot3);
const lieOrNot4 = number < x1 || number > x2;
console.log(lieOrNot4);

// Напиши скрипт який перевіряє можливість відкрити чат з користувачем. 
// Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати
const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isFriend && isOnline && isDnd;
console.log(canOpenChat);

// 3
// Напиши скрипт перевірки підписки користувача під час доступу до контенту. 
// Є три типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip.
// const sub = 'free';
const sub = 'free';
// const sub = 'vip';
const canAccessContent = sub === "vip" || sub === "pro";
console.log(canAccessContent);

// 1. зробити дві змінні: 
// ПЕРШУ - <myFavoriteGameName> зі значенням вашої улюбленої гри(наприклад "minecraft")
// та ДРУГУ - <myFavoriteGameText> зі значенням рядка = "my favorite game's name" 
// 2.
// За доромогою властивості або метода рядка 
// отримати ОСТАННІЙ символ змінної <myFavoriteGameName>
// та записати це значення у ТРЕТЮ змінну <lastCharacter>.
// 3.
// Зробити перетворення значення змінної <lastCharacter> 
// на ВЕЛИКУ(заглавну літеру).
// 4.
// Вивести в консоль повідомлення, використовуючи 
// значення ВСІХ ТРЬОХ змінних у такому форматі:
// "The last letter in <myFavoriteGameText> "<myFavoriteGameName>" is "<lastCharacter>" !" 
// Використовуйте шаблонний рядок!!
// приклад рядка, що має вийти
// The last letter in my favorite game's name "minecraft" is "T" !

// Задача в залежності від підписки виводити вартість
// "free" 0;
// "pro"100;
// "premium" 500;
//  погане значення "Invalid subscription type"

let cost;
const subscription = "premium";
if(subscription === "free"){
    cost = 0;
}

else if(subscription === "pro"){
    cost = 100;
}

else if(subscription === "premium"){
    cost = 500
}

else{
    console.log("Invaild subscription type");
}
console.log(cost);

//1  Що буде в консолі
if ("0") {
      console.log( 'Привіт' );
    }
  // 2
// Використовуючи if..else, напишіть код, що отримує число  
  // і потім виводить повідомлення на екран:

  // 1, якщо значення більше нуля,
  // -1, якщо меньше нуля,
  // 0, якщо дорівнює нулю.
  const userNumber = -3;
    if (userNumber > 0 ) {
        console.log(1)
    }
    else if (userNumber < 0){
        console.log(-1)
    }

    else if (userNumber === 0){
        console.log(userNumber);
    }
    else{
        console.log("Invalid subscription type")
    }
console.log();

//   Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, 
//   в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”
// const userInput = "jnoik";
const userInput = "EcMAScriPt";

if (userInput.toLowerCase() === "ECMAScript".toLowerCase()){
    console.log('Правильно!')
}
else {
    console.log('Ви не знаєте? ECMAScript!')
}

const num1 = 15;
const num2 = 10;
let biggerNumber;

if (num1 > num2){
    biggerNumber = num1
}
else{
    biggerNumber = num2
}
console.log(biggerNumber);

let type;
const age = 20;

if(age > 18){
    type = "adult"
} else{type = "child"}

console.log(type);