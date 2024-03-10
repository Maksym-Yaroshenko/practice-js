// ЗАДАЧА 1
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

// class User {
//   constructor({ name, age, numberOfPosts }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }
// }

// const mango = new User({
//   name: "mango",
//   age: 25,
//   numberOfPosts: 4,
// });

// console.log(mango);
// console.log(mango.getInfo());

// ЗАДАЧА 2
// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     const result = this.items.indexOf(item);
//     if (result === -1) {
//       return;
//     } else {
//       this.items.splice(result, 1);
//     }
//   }
// }

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// items.addItem("Манго");
// items.removeItem("Ківі");

// console.log(items);

// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement

// js/

// import car from "./date/car.js"

// const product = document.querySelector(".js-goods");
// function productCar({ name, img, price, description }) {
//   const productElement = document.createElement("li");
//   const productTitle = document.createElement("h2");
//   productTitle.textContent = name;
//   const productImage = document.createElement("img");
//   productImage.src = img;
//   productImage.alt = name;
//   productImage.width = 300;
//   const productPrice = document.createElement("p");
//   productPrice.textContent = price;
//   const productDescription = document.createElement("p");
//   productDescription.textContent = description;
//   productElement.append(productTitle, productImage, productPrice, productDescription);
//   return productElement;
// }
// const elements = car.map(productCar);
// console.log(elements)
// product.append(...elements);

// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// html/

// <div class="container">
//     <h2 class="title">Скільки коштує мясо на шашлик :) ?</h2>
//     <form class="form">
//         <label for="price">Ціна грн</label>
//         <input type="text" id="price" name="price" value="50">
//         <label for="quantity">Кількість<span class="amount">1</span>кг </label>
//         <input type="range" id="quantity" name="quantity" value="1" min="1" , max="20">
//     </form>
//     <p class="text-right total"></p>//ТУТ ФІНАЛЬНА ЦІНА ТОВАРУ
// </div>

// const form = document.querySelector(".form");
// const inputPrice = document.querySelector("#price");
// const amount = document.querySelector(".amount");
// const quantity = document.querySelector("#quantity");
// const textRight = document.querySelector(".text-right");

// function calculator(event) {
//   const price = inputPrice.value;
//   const amountOfMeat = quantity.value;
//   // console.log(price);
//   // console.log(amountOfMeat);
//   const total = price * amountOfMeat;
//   textRight.textContent = total;
//   event.preventDefault();
// }

// function quantityTotal() {
//   const amountOfMeat = quantity.value;
//   amount.textContent = amountOfMeat;
// }

// // calculator();

// form.addEventListener("submit", calculator);
// form.addEventListener("input", quantityTotal);

// // 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ ,
// //  ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// // 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const container = document.querySelector(".container");

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// const color = randomRgbColor();
// container.style.backgroundColor = color;
