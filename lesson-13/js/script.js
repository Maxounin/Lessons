let firstName = prompt('Please, enter your first name');
let lastName = prompt('Please, enter your last name');
let age = +prompt('Please, enter your age');
let genderState = confirm('Are you a male?');
let pensionState;
let pension;
let gender;
if ((genderState == true && age >= 65) || (genderState == false && age >=60)) {
  pensionState = true;
} else {
  pensionState = false;
}
if (pensionState == true) {
  pension = 'Yes';
} else {
  pension = 'No';
}
if (genderState == true) {
  gender = 'Male';
} else {
  gender = 'Female';
}
alert(`First name: ${firstName} \nLast name: ${lastName} \nAge: ${age} \nGender: ${gender} \nPension: ${pension}`);
