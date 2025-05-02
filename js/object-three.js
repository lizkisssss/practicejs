// Об’єкт user
const user = {
    // name: 'John',
    // age: 30,
    email: 'john@example.com'
  }

const{name="MAX",age=29,email:useremail} = user
console.log(name,age,useremail)

// Об’єкт movie
const movie = {
    title: 'The Shawshank Redemption',
    director: {
      name: 'Frank Darabont',
      nationality: 'American'
    },
    actors: ['Tim Robbins', 'Morgan Freeman'],
    release_year: 1994,
    ratings: {
      imdb: 9.3,
      rotten_tomatoes: 90
    }
  }

const {title, director: {name: directorName, nationality: directorNationality}, actors:[actorTim, actorMorgan], ratings: {imdb, rotten_tomatoes}} = movie;
console.log(title, directorName, directorNationality, actorTim, actorMorgan , imdb, rotten_tomatoes)

// Об’єкт books
const books = {
    count: 3,
    list: [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
      },
      {
        title: '1984',
        author: 'George Orwell',
        year: 1949
      }
    ]
  }
  
  
//   const{count, list: [{title, author, year}, killBook, _1984]} = books;
//   console.log(count, title, author, year, killBook, _1984);

// Дано масив об’єктів
const friends = [
    { name: "Mango", online: false },
    { name: "Kiwi", online: true },
    { name: "Poly", online: false },
    { name: "Ajax", online: false },
  ];
  
  // Написати функція яка буде отримувати масив
  // та ім’я друга якого потрібно знайти
  function findFriendByName(friends, nameToFind) {
    for (const { name } of friends) {
      if (name === nameToFind) {
        return "Знайшли друга";
      }
    }
    return "не Знайшли друга";
  }
  
  console.log(findFriendByName(friends, "Poly"));
  console.log(findFriendByName(friends, "Chelsy"));

// Написати функцію яка буде повертати масив всіх імен друзів

function getAllNames (friends) {
    const names = [];
    for (const friend of friends){
        names.push(friend.name)
    }
    return names;
}

console.log(getAllNames(friends));

// Написати функ,яка буде повертати масив імен друзів які онлайн

function getOnlineFriends (friends) {
    const onlineFriendsName = [];
    for (const friend of friends) {
        if (friend.online) {
            onlineFriendsName.push(friend.name);
        }
    }
    return onlineFriendsName
}
console.log(getOnlineFriends(friends));
  
// Написати функцію яка буде повертати масив імен друзів які офлайн

function getOfflineFriends (friends) {
    const offlineFriendsName = [];
    for (const {online, name} of friends) {
        if (!online) {
            offlineFriendsName.push (name);
        }
    }
    return offlineFriendsName;
}

console.log(getOfflineFriends(friends));

const musicLibrary = {
    count: 2,
    artists: [
      {
        name: 'The Beatles',
        albums: [
          {
            title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
            year: 1967,
            tracks: [
              { title: 'With a Little Help from My Friends', duration: '2:44' },
              { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
              { title: 'A Day in the Life', duration: '5:33' }
            ]
          },
          {
            title: 'Abbey Road',
            year: 1969,
            tracks: [
              { title: 'Come Together', duration: '4:19' },
              { title: 'Something', duration: '3:01' },
              { title: 'Here Comes the Sun', duration: '3:06' }
            ]
          }
        ]
      },
      {
        name: 'Pink Floyd',
        albums: [
          {
            title: 'The Wall',
            year: 1979,
            tracks: [
              { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
              { title: 'Comfortably Numb', duration: '6:23' },
              { title: 'Hey You', duration: '4:40' }
            ]
          },
          {
            title: 'Dark Side of the Moon',
            year: 1973,
            tracks: [
              { title: 'Speak to Me/Breathe', duration: '3:58' },
              { title: 'Time', duration: '7:06' },
              { title: 'Money', duration: '6:22' }
            ]
          }
        ]
      }        
    ]
}

// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }
// const cart = {
//   items: [],
//   getItems() {},
//   add(product) {},
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

const cart = {
	items: [],
	getItems() {
		return this.items
	},
	add(product) {
		this.items.push(product)
		return 'The product was added'
	},
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1){
        if (this.items[i].name === productName) {
        // console.log("Знайшли продукт");
            this.items.splice(i, 1)
        }
    }
    return "this product was deleted"
  },
	clear() {
        this.items = []
        return "card was cleared"
    },
	countTotalPrice() {},
	increaseQuantity(productName) {},
	decreaseQuantity(productName) {},
}
// console.log(cart.getItems())
// console.table(cart.getItems());

console.log(cart.add({ name: '🍎', price: 50 }))
console.log(cart.add({ name: '🍇', price: 70 }))
console.log(cart.add({ name: '🍋', price: 60 }))
console.log(cart.add({ name: '🍓', price: 110 }))

console.log(cart.getItems());
console.log(cart.remove('🍎'));
console.log(cart.getItems());
console.log(cart.clear());
console.log(cart.getItems());