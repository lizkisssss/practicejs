// Отримайте доступ до списку. Додайте жовтий колір фону

const navListElement = document.querySelector('.site-nav');
const navLink = document.querySelectorAll('.site-nav__link');

console.log(navListElement);
console.log(navLink);

// Змінюємо фон першого елемента на червоний, а фон всього списку на зелений
navListElement.style.backgroundColor = "green";
navListElement.firstElementChild.style.backgroundColor = "red";

// Змінюємо колір тексту посилання на зелений, а його fontStyle на italic
const liLink = document.querySelector('.site-nav li a[href="/"]');
liLink.style.fontStyle = "italic";
console.log(liLink);