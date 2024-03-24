// Використовуй публічний https://thecatapi.com/. Для початку роботи необхідно зареєструватися й отримати унікальний ключ доступу, щоб прикріплювати його до кожного запиту. Заходимо на головну сторінку та натискаємо нижче кнопку Signup for free, дотримуємося інструкції, ключ буде надіслано на вказану пошту.

// Колекція порід
// Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід. Для цього необхідно виконати GET-запит на ресурс https://api.thecatapi.com/v1/breeds, що повертає масив об'єктів. У разі успішного запиту, необхідно наповнити select.breed-select опціями так, щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.
// Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом запиту.
// Інформація про кота
// Коли користувач обирає якусь опцію в селекті, необхідно виконувати запит за повною інформацією про кота на ресурс https://api.thecatapi.com/v1/images/search. Не забудь вказати в цьому запиті параметр рядка запиту breed_ids з ідентифікатором породи.
// Ось як буде виглядати URL-запит для отримання повної інформації про собаку за ідентифікатором породи:
// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
// Напиши функцію fetchCatByBreed(breedId), яка очікує ідентифікатор породи, робить HTTP-запит і повертає проміс із даними про кота - результатом запиту.

// const breedSelect = document.querySelector(".breed-select");
// const catInfo = document.querySelector(".cat-info");

// const API_KEY =
//   "live_y5a4tkdGBJQpeay6ebguCY0DjbxDWxkHUH8lNyNftVHs40xXTrJEHqM1N34t3PmP ";

// const API_URL = "https://api.thecatapi.com/v1";

// function fetchBreeds() {
//   return fetch(`${API_URL}/breeds?api_key=${API_KEY}`).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// console.log(fetchBreeds());

// function fetchCatByBreed(breedId) {
//   return fetch(
//     `${API_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// fetchBreeds()
//   .then((date) => (breedSelect.innerHTML = mur(date)))
//   .catch((error) => console.error(error));

// function mur(array) {
//   const resolt = array.map(
//     ({ name, id }) =>
//       `<option value="${id}" data-placeholder="true">${name}</option>`
//   );
//   return resolt.join("");
// }

// function imgGalery(ivent) {
//   const breedId = ivent.target.value;
//   console.log(breedId);
//   fetchCatByBreed(breedId)
//     .then((catOk) => {
//       catInfo.innerHTML = createMarckup(catOk);
//     })
//     .catch((catError) => console.error(catError));
// }

// breedSelect.addEventListener("change", imgGalery);

// function createMarckup(cat) {
//   const { url } = cat[0];
//   return `<img src="${url}" width="500" alt="Cat">`;
// }
// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

//www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
const forData = document.querySelector("#form");
const inputData = document.querySelector("#input");
const containerData = document.querySelector(".container");
forData.addEventListener("click", formData);

function formData(event) {
  event.preventDefault();
  const result = inputData.value;
  console.log(result);
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${result}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((date) => createMarckup(date.drinks))
    .catch((eror) => console.log(eror));
}

function mapArr({ strDrinkThumb, strGlass }) {
  const textData = `<h2>${strGlass}</h2>
  <img src="${strDrinkThumb}"/>`;
  containerData.insertAdjacentHTML("beforeend", textData);
}

function createMarckup(arr) {
  arr.forEach((elent) => mapArr(elent));
}
// function arrMap(arr) {
//   return arr.forEach((element) => mapArr(element));
// }

//strDrinkThumb

//strGlass
