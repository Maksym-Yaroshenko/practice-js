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

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const result = this.items.indexOf(item);
    if (result === -1) {
      return;
    } else {
      this.items.splice(result, 1);
    }
  }
}

const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
items.addItem("Манго");
items.removeItem("Ківі");

console.log(items);
