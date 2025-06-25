// 1. Напишіть скрипт зміни кольору кнопки при натискані на неї.

// const colorsArr = ["red", "green", "blue", "yellow", "orange", "pink"]
// const changeColorButton = document.querySelector(".js-btn");
// const onButtonChangeColorClick = (event) =>{
//     console.log("Click");
//     const btn = e.currentTarget;
//     const colorIdx = Math.round(Math.random() * (colorsArr.length - 1) + 1);
//     // console.log(colorIdx);
//     btn.style.backgroundColor = colorsArr[colorIdx - 1]
// Math.round(Math.random() * (colorsArr.length - 1) + 1)
// };
// changeColorButton.addEventListener("click", onButtonChangeColorClick);

// 2. Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку ‘Додати стилі’.
// const button = document.querySelector(".js-add-style-btn");
// const text = document.querySelector(".text");

// const onButtonChangeColorClick = () => {
//     // console.log("click!");
//     // if(text.classList.contsins("text-update")) {
//     //     text.classList.remove()
//     // } else {
//     //     text.classList.add("text-update")
//     // }
//     // console.log(text.classList)
//     text.classList.toggle("text-update")
// }
// button.addEventListener("click", onButtonClickAddClass)

// 4. Створити форму, після сабміту виводити на екран 
// повідомлення ‘Ви зареєструвалися успішно! Дякую!’

const formElement = document.querySelector(".form");
const messageEl = document.querySelector(".greating");

const formHandler = (event) => {
    event.preventDefault()
    const {name, surname} = event.currentTarget.elements;
    // console.log(name, surname); 
    messageEl.textContent = `${name.value} ${surname.value} Ви зареєструвалися успішно! Дякую!`;
    // console.log("Ви зареєструвалися успішно! Дякую!")
    forElement.reset()
    setTimeout(() => (messageEl.style.display = "block"), 500);
    setTimeout(() => (messageEl.style.display = "none"), 2500);
};
formElement.addEventListener("submit" , formHandler);
