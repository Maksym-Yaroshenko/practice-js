// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = "false";
// const keys = Object.keys(user);
// for (let key of keys) {
//     console.log(`${key}: ${user[key]}`)
// }

// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ


//  const salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
// };
// function sumOfSalaries(salaries) {
//      const names = Object.values(salaries);
//     let sum = 0;
//     for (let name of names) {
//         sum += name;
//     }
//     return sum
// }
     
// console.log(sumOfSalaries(salaries));

// ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень;
// mult() -перемножує значення збережені і повертає результат;

//  const calculator = {
//  a: null,
//  b: null,

//      read() {
//          this.a = prompt("введіть a");
//          this.b = prompt("введіть b");
//      },

//      sum() {
//          return Number(this.a) + Number(this.b);
//   },

//      mult() {
//          return this.a * this.b;
//   },
// };


// calculator.read();
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());

// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

// function letMeSeeYourName(callback) {
//     const name = prompt("введіть своє імя");
//     callback(name)
// }
// function greet(name) {
//     alert(name);
// }
// letMeSeeYourName(greet)

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, showProduct);

// function makeProduct(name, price, showProduct) {
//     const product = { name, price, id: Date.now() }
//     showProduct(product);
// }
// function showProduct(product) {
//     console.log(product);
// }


const scientists = [
    {
      name: "Albert",
      surname: "Einstein",
      born: 1879,
      dead: 1955,
      id: 1,
    },
    {
      name: "Isaac",
      surname: "Newton",
      born: 1643,
      dead: 1727,
      id: 2,
    },
    {
      name: "Galileo",
      surname: "Galilei",
      born: 1564,
      dead: 1642,
      id: 3,
    },
    {
      name: "Marie",
      surname: "Curie",
      born: 1867,
      dead: 1934,
      id: 4,
    },
    {
      name: "Johannes",
      surname: "Kepler",
      born: 1571,
      dead: 1630,
      id: 5,
    },
    {
      name: "Nicolaus",
      surname: "Copernicus",
      born: 1473,
      dead: 1543,
      id: 6,
    },
    {
      name: "Max",
      surname: "Planck",
      born: 1858,
      dead: 1947,
      id: 7,
    },
    {
      name: "Katherine",
      surname: "Blodgett",
      born: 1898,
      dead: 1979,
      id: 8,
    },
    {
      name: "Ada",
      surname: "Lovelace",
      born: 1815,
      dead: 1852,
      id: 9,
    },
  
    {
      name: "Lise",
      surname: "Meitner",
      born: 1878,
      dead: 1968,
      id: 11,
    },
    {
      name: "Sarah E.",
      surname: "Goode",
      born: 1855,
      dead: 1905,
      id: 10,
    },
    {
      name: "Hanna",
      surname: "Hammarström",
      born: 1829,
      dead: 1909,
      id: 12,
    },
];
//   1)получити масив вчених які народились у 19ст;

// const result = scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900).map(scientist => `${scientist.name} ${scientist.surname}`)
// console.log(result)

// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;

// const result = scientists.reduce((a, b) => a + (b.dead - b.born), 0);
// console.log(result / scientists.length)

// 3) відсортувати по алфавіту;

// const result = [...scientists];
// result.sort((a, b) => (a.name > b.name) ? -1 : 1);
// console.log(result)

// 4)відсортувати по кількості прожитих років;

// const result = scientists.toSorted((a, b) => (a.dead - a.born) - (b.dead - b.born));
// console.log(result)

// 5)відфільтрувати, хто народився в 15,16,17ст;

//  const result = scientists.filter(scientist => scientist.born >= 1400 && scientist.born < 1700).map(scientist => `${scientist.name} ${scientist.surname}`)
// console.log(result)

// 6)знайти рік народження Albert Einstein;

// const result = scientists.find((santist) => santist.name === "Albert" && santist.surname === "Einstein");
// console.log(result.born)