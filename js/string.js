const guestName = "Mango";
const roomNumber = 207;

// const greeting ="Welcome" + guestName + ", your room number is" + roomNumber + "!"

const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting)

// Оголоси змінну message і запиши в неї повідомлення про покупку.
//  "You picked <назва товару>, price per item is <ціна товару> credits"

const message = `You picked <назва товару>, price per item is <ціна товару> credits`;
const products = "Телефон";
const price = 7000;
console.log(`You picked ${products}, price per item is ${price} credits`);

// 6 Отримати  останній символ :
const fruit = 'апельсин';
const lenght = fruit.length;
const lastSumbol = lenght - 1;
console.log(lastSumbol);
console.log(fruit[lastSumbol]);

// 7 чи містить фраза "Jason Neis" це слово "jAsOn" має бути так
// Здійсни перевірку незалежно від регістру
const frase = "Jason Neis".toLowerCase();
console.log(frase)
const word = "jAsOn".toLowerCase();
console.log(word);
console.log(frase.includes(word));

// 8 "styles.css", перевірити чи закінчується на ".css", ".js"
const fileName = "style.css";
console.log(fileName.endsWith('.css'));
console.log(fileName.endsWith('.js'));

// Створити скрипт, який буде отримувати від користувача число
// (кількість хвилин) і буде виводити рядок в форматі часу як результат. 

// Наприклад 80 виведе 01:20 
//          450 =>     07:30

const nubmer = 123;
const hours = Math.floor(nubmer / 60)
const minutes = nubmer % 60;
const modHours = String(hours).padStart(2, 0)
const modMinutes = String(minutes).padStart(2, 0)
const phraseForTime = `${modHours}:${modMinutes}`
console.log(phraseForTime);

// const 

// скільки хв в годині? 
// як вирахувати кількість годин з хвилин? n / 60
// який метод округлить число до меншого? round or flor
// який метод додасть на перед символи&  7  =>  07 padStart