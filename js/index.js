// Створіть дві змінні для зберігання значень двох текстових полів. Перевірте, чи обидві змінні не є порожніми. Якщо обидва поля заповнені, вивести повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

const textFirst = prompt("Напишіть будь-що");
const textSecond = prompt("Ще раз напишіть будь-що");
if (textFirst.length > 0 && textSecond.length > 0) {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}

// Створіть дві змінні для зберігання числових значень. Обчисліть їх суму. Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".

const numberOne = prompt("Введіть число");
const numberTwo = prompt("Введіть друге число");

if (parseInt(numberOne) + parseInt(numberTwo) > 10) {
  alert("Сума більше за 10");
} else {
  alert("Сума менша або дорівнює 10");
}

const text = "qwerty";
if (text.includes("JavaScript")) {
  console.log("містить слово JavaScript");
} else {
  console.log("не містить слово JavaScript");
}

const userNumber = Number(prompt("Введіть число"));
if (userNumber >= 10 && userNumber <= 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

const login = "123456";
const password = "qwerty";
const email = prompt("введіть емайл");
const userl = prompt("введіть логін");
const userp = prompt("введіть пароль");
if (userl.length >= 3 && userp.length >= 6 && email.includes("@")) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
