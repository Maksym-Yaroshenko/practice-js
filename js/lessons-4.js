// ЗАДАЧА 1
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

class User {
  constructor({ name, age, numberOfPosts }) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
  }

  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }
}

const mango = new User({
  name: "mango",
  age: 25,
  numberOfPosts: 4,
});

console.log(mango);
console.log(mango.getInfo());
