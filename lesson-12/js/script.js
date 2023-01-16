let firstName = prompt('Введите ваше имя');
let lastName = prompt('Введите вашу фамилию');
let gender = prompt('Укажите ваш пол');
let age = prompt('Введите ваш возраст');
alert(`Имя: ${firstName} \nФамилия: ${lastName} \nПол: ${gender} \nВозраст: ${age}`);
document.getElementById('firstName').textContent = firstName;
document.getElementById('lastName').textContent = lastName;
document.getElementById('gender').textContent = gender;
document.getElementById('age').textContent = age;