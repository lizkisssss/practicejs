const backDrop = document.querySelector(".js-backdrop");
const openModalButton = document.querySelector('button[data-action="open-modal"]');
const closeModalButton = document.querySelector('button[data-action="close-modal"]');

// console.log(backDrop);
// const modalDiv = document.querySelector(".modal");
// console.log(modalDiv);
// console.log(openModalButton);
// console.log(closeModalButton);

const onButtonModalOpen = (event) => {
    document.body.classList.add("show-modal");
    document.addEventListener("keydown", onEscPress);
};

const onButtonModalClose = (event) => {
    document.body.classList.remove("show-modal");
    document.removeEventListener("keydown", onEscPress);
};

const onBackDropClick = (event) => {
    // console.log(event.target)
    // console.log(event.currentTarget)
    if(event.target === event.currentTarget){
        onButtonModalClose();
    }
    
};

openModalButton.addEventListener("click" , onButtonModalOpen);

closeModalButton.addEventListener("click" , onButtonModalClose);

backDrop.addEventListener("click" , onBackDropClick);

const onEscPress = (event) => {
    if(event.code === "Escape"){
//      console.log("тикнули на Esc")
        onButtonModalClose()
    }
//    console.log(event.code);
};

// Завдання:

const colors = ["red", "green", "yellow", "orange", "purple", "pink"];

const circule = document.querySelector(".circle");
const currentColor = circule.style.backgroundColor = "lightblue";

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const onCircleOver = (event) => {
  circule.style.backgroundColor = getRandomColor();
}

const onCircleOut = (event) => {
  circule.style.backgroundColor = currentColor;
}

const onCircleMove = (event) => {
    // setInterval(onCircleMove , 1000)
    // circule.style.backgroundColor = getRandomColor
    setBackgroundColor()
}

function setBackgroundColor(){
    circule.style.backgroundColor =  getRandomColor();
}

circule.addEventListener("mousemove", onCircleOver);
circule.addEventListener("mouseover", onCircleOver);
circule.addEventListener("mouseout", onCircleOut);
// -Коли клієнт наводить мишку на кружечок,
// він повинен змінювати свій колір на якийсь інший випадковий колір.
// -Коли мишка йде з кружечка,
// він повинен повертатися до свого початкового кольору.
// -Додатково, зробіть так, щоб під час руху мишки над кружечком
// (без клікання), колір кружечка плавно змінювався
// від початкового до нового випадкового кольору.

// 1)Знайдіть елемент - document.querySelectorAll('.circle').
// 2)запам'ятайте його початковий колір у змінній
// 3)створіть функцію для генерації випадкового RGB кольору
// 4)Для кружечка додайте слухачі подій:
// mouseover: мишка наводиться на el змініть його на випадковий колір
// mouseout: мишка йде з кружечка, поверніть до початкового кольору.
// mousemove: Коли мишка рухається над кружечком,
// змінюйте його колір(setInterval)
// function getRandomColor() {
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   return colors[randomIndex];
// }