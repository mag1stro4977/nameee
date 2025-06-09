function startPrompt() {
  // Запрашиваем у пользователя имя
  let name = prompt("Введите имя:");
  // Если имя пустое или отменено, показываем предупреждение и прерываем выполнение функции
  if (!name) return alert("Имя не может быть пустым.");

  // Запрашиваем фамилию
  let surname = prompt("Введите фамилию:");
  // Проверяем, что фамилия не пустая
  if (!surname) return alert("Фамилия не может быть пустой.");

  // Запрашиваем возраст
  let age = prompt("Введите возраст:");
  // Проверяем, что возраст введён и это число
  if (!age || isNaN(age)) return alert("Возраст должен быть числом.");

  // Объявляем переменную для выбора формата отображения
  let choice;
  // Запускаем бесконечный цикл, чтобы получить корректный ввод от пользователя
  while (true) {
    // Запрашиваем у пользователя формат: 1 - с заглавной буквы, 2 - все строчные
    choice = prompt("Выберите формат:\n1) С заглавной буквы\n2) Всё строчными");
    // Если пользователь ввёл "1" или "2", выходим из цикла
    if (choice === "1" || choice === "2") break;
    // Если ввёл что-то другое — показываем ошибку и повторяем запрос
    alert("Ошибка! Пожалуйста, введите 1 или 2.");
  }

  // Если выбран формат "1", делаем первую букву заглавной, остальное — строчными
  if (choice === "1") {
    name = capitalize(name);
    surname = capitalize(surname);
  } else {
    // Иначе переводим всё имя и фамилию в нижний регистр
    name = name.toLowerCase();
    surname = surname.toLowerCase();
  }

  // Выводим результаты в HTML-элементы с id: resultName, resultSurname, resultAge
  document.getElementById("resultName").innerText = `1. Ism: ${name}`;
  document.getElementById("resultSurname").innerText = `2. Familiya: ${surname}`;
  document.getElementById("resultAge").innerText = `3. Yosh: ${age}`;
  // Показываем блок с результатами (он был скрыт)
  document.getElementById("resultBox").style.display = "block";
}

// Функция, которая делает первую букву строки заглавной, а остальные — строчными
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
