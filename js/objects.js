const myObject = {
    name: "Lisa",
    age: 14,
    occupation: "student",
    city: "Kherson",
    friends: ["Kris", "Alina"]
  }

  const addres = "Beresteiska, 54"
const color = "color"

const myObject1 = {
  name: "Kate",
  age: 32,
  occupation: "teacher",
  city: "Kyiv",
  friends: ["Kris", "Alina"],
  addres,
  [color]: "green"
};
console.log(myObject1);

// 1. 
//  Оголоси змінну apartment і задай ій об'єкт, 
// який описує квартиру з наступними характеристиками:

// descr - рядок, що містить опис, 
// значення "Spacious apartment in the city center";
// rating - число, що містить рейтинг, значення 4;
// price - число, що містить ціну, значення 2153;
// tags - масив рядків, що містить метаінформацію,
//  значення ["premium", "promoted", "top"].

// 2. 
// Доповни об'єкт квартири властивістю owner, 
// значенням якого буде об'єкт з інформацією про власника.
// Додай об'єкту owner наступні властивості:

// name - рядок, що містить ім'я власника, значення "Henry";
// phone - рядок, що містить номер телефону, значення "982-126-1588";
// email - рядок, що містить пошту, значення "henry.carter@aptmail.com"

const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner:{
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
    changePrice(newPrice){
      this.price = newPrice;
      return `price change to ${this.price}`;
    },

isRatingGood(){
  if (this.rating > 8) {
    return true
  }
  else {
    return false
  }
}, 

addNewTag (newTag) {
  this.tags.push(newTag)
}

}

apartment.addNewTag("bestPrice")
console.log(apartment.tags);

console.log(apartment)
console.log(apartment.price)
console.log(apartment.changePrice(1128))
console.log(apartment.isRatingGood)
console.log(apartment.tags)

// console.log(apartment.rating);
// console.log(apartment?.owner?.email);
// console.log(apartment["tags"].length);
// console.log(apartment["tags"][0]);
// console.log(apartment["tags"][apartment["tags"].length - 1]);

// 3
// Доповни код, оновивши значення властивостей об'єкта apartment:
// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".

apartament.price = 5000;
apartament.rating = 4.7;
apartament.owner.name = "Henry Sibola";
apartament.tags.push("trusted")

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Jamaica';
apartment.location.city = 'Kingston';

const myObject2 = {
  name: "Kate",
  age: 30,
  city: "Kyiv",
occupation: "designer",
increaseAge(age) {
  this.age = age
  console.log(`increase age to ${age}` )
},
changeOccupation(position) {
  this.occupation = position;
}
} 

myObject.increaseAge(31);
// myObject.age = 31;

myObject.changeOccupation("teacher")
console.log(myObject2);

// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }
const cart = {
  items: [],
  getItems() {
    return this.items
  },
  add(product) {
    this.items.push(product)
  },
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
console.log(cart.getItems());
console.table(cart.getItems());

console.log(cart.add({ name: '🍎', price: 50 }));
console.log(cart.add({ name: '🍇', price: 70 }));
console.log(cart.add({ name: '🍋', price: 60 }));
console.log(cart.add({ name: '🍓', price: 110 }));

console.log(cart.getItems());
console.log(cart.add({ name: '🍓', price: 110 }));
console.table(cart.getItems());

console.log(cart.remove('🍋'));
console.table(cart.getItems());