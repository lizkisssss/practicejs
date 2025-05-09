const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
  
// Використовуючи 👆 масив об’єктів виконай наступні завдання:
//map()
// Отримати масив імен всіх гравців
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)

const playerPoints = players.map((player) => {
    return {...player, points: player.points * 1.1};
});
console.log(playerPoints);

// Збільшити кількість годин гравця по id. Переписати на тернарник
const playerNames = players.map((player) => player.name);
// const playerNames = players.map(({name}) => name);
console.log(`Name all players: ${playerNames}`);

const ubdatedPlayerHours = players.map((player) => {
    if(player.id === 'player-2'){
      // player.timePlayed = player.timePlayed + 100;
      return {...player, timePlayed: player.timePlayed + 100,};
    }
    return player;
  })
  console.log(ubdatedPlayerHours);
  console.log(players);
// Отримати масив всіх гравців онлайн

//filter()
// Отримати масив всіх гравців онлайн

const playersOnline = players.filter((player) => player.online);
console.log(playersOnline)
// Отримати масив всіх гравців офлайн

const playersOfline = players.filter((player) => !player.online);
console.log(playersOfline)
// Отримати масив всіх гравців офлайн
// Отримати масив всіх хардкорних гравців з часом більше 250

const bestPlayers = players.filter((player) => player.timePlayed > 250);
console.log(bestPlayers)
//Find()
// Знайти гравця по id
// Знайти гравця по імені
//every()
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн