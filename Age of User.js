let userBirthYear = prompt (`Введіть рік народження`);

let currentYear = new Date().getFullYear();

let userAge = currentYear - userBirthYear;

let response = alert (`Тобі зараз ${userAge}`);
