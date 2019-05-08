let userRandomName = prompt (`Введіть ім'я`);

let firstLeter = userRandomName.slice(0, 1).toUpperCase();

let lowerCaseLetters = userRandomName.slice(1).toLowerCase();

let righName = firstLeter + lowerCaseLetters;

let response = alert (`Вас звати: ${righName}`);
