// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// // Джаз, Блюз
// // Джаз, Блюз, Рок-н-ролл
// // Джаз, Классика, Рок-н-ролл
// // Классика, Рок-н-ролл
// // Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");

// styles.splice(1,1,"Классика");
// console.log(styles);
// // const firstElement = styles.shift()
// // console.log(firstElement);
// styles.unshift("rap", "raggy");
// console.log(styles);

// Напишіть ф-цію logItems(array) ,
// яка буде получати масив і використовуючи цикл for ,
// який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива
// ['Mango', 'Poly', 'Ajax']
// з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const users = ["Mango", "Poly", "Ajax"];
// function logItems(array) {
//   let usersElements = "";
//   for (let i = 0; i < array.length; i += 1) {
//     usersElements += `${i} - ${users[i]}`;
//   }
//   return usersElements;
// }
// const result = logItems(users);
// console.log(result);

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// function findSmallestNumber(numbers) {
//   let total = numbers[0];
//   for (let number of numbers) {
//     if (number < total) {
//       total = number;
//     }
//   }
//   return total;
// }

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
// const str = "ротатор";//true
// const newString = "Hello";//false

// const newStr = str.split("").reverse().join("");
// console.log(newStr === str);

// const newIng = newString.split("").reverse().join("");
// console.log(newIng === newString);

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage()
// яка приймає довільну кількість аргументів і повертає їх середнє значення
// .Всі аргументи будуть тільки числовими

function calculateAverage() {
  const newLogin = Array.from(arguments);
  console.log(newLogin);
  let result = 0;
  for (const newFirst of newLogin) {
    result += newFirst;
  }
  return (result / newLogin.length).toFixed(1);
}

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
console.log(calculateAverage(14, 8, 78.4, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 101.2, 36)); // 23.2
