// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
/*
const name = "ГАЛИНА";
const age = 35;
const hobby = "JAVASCRIPT";
const total = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`;
console.log(total);*/

/*ЗАДАЧА 2
ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"*/
const name = prompt("введіть ім'я");
const email = prompt("ваша пошта");
const phone = prompt("ваш телефон");
const message = `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ  ${email} ПОЧТУ І ${phone} ТЕЛЕФОН`
alert(message);