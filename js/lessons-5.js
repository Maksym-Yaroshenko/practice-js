// // ЗАДАЧА 1
// // Створити сторінку з двома кнопками: "Старт" та "Стоп". При кліці на кнопку "Старт" розпочинається безперервний цикл, який кожну секунду змінює фоновий колір сторінки на випадковий шестнадцятковий колір та вимикає кнопку "Старт" до завершення циклу. Коли натискається кнопка "Стоп", цикл зупиняється, і кнопка "Старт" стає доступною для подальших кліків. Для реалізації використовується HTML для створення сторінки з кнопками та JavaScript код для взаємодії з цими елементами та виконання зазначених функцій.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const btnStart = document.querySelector("button[data-start]");
// const btnStop = document.querySelector("button[data-stop]");
// const text = document.querySelector(".text");

// btnStart.addEventListener("click", handleClickStart);
// btnStop.addEventListener("click", handleClickStop);

// let timerId = null;

// function handleClickStart(event) {
//   console.log(event.currentTarget);
//   timerId = setInterval(() => {
//     let textColor = getRandomHexColor();
//     document.body.style.backgroundColor = textColor;
//     text.textContent = textColor;

//     btnStart.disabled = true;
//   }, 1000);
// }

// function handleClickStop() {
//   clearInterval(timerId);
//   btnStart.disabled = false;
// }

// ========================================================================================================

// // Зробити фіксований скрол на сторінці для менюшки,тобто , щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed-nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

// const haeder = document.querySelector(".header");
// const nav = document.querySelector(".nav");

// const heightHaeder = haeder.clientHeight;
// // console.log(haeder.clientHeight);
// // console.log(haeder.clientWidth);
// // console.log(scrollY);

// function scrollFixed() {
//   if (scrollY >= heightHaeder) {
//     nav.classList.add("fixed-nav");
//   } else {
//     nav.classList.remove("fixed-nav");
//   }
// }

// window.addEventListener("scroll", scrollFixed);

// ========================================================================================================

// ЗАДАЧА 1
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

const inputCheckbox = document.querySelector(".checkbox");

localStorage.setItem("ui-theme", "light");

document.addEventListener("DOMContentLoaded", () => {
  const uiTheme = localStorage.getItem("ui-theme");
  if (uiTheme) {
    document.body.classList.add(uiTheme);
  }

  inputCheckbox.addEventListener("change", function () {
    // const onCheckbox = this.checked;
    // console.log(onCheckbox);

    localStorage.setItem("ui-theme", this.checked ? "dark" : "light");
    document.body.classList.toggle("dark", this.checked);
    document.body.classList.toggle("light", !this.checked);
  });
});
