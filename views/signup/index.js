

/* eslint-disable no-undef */
const form = document.querySelector('#form');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const passInput = document.querySelector('#passInput');
const passConfirmInput = document.querySelector('#passConfirmInput');
const formbtn = document.querySelector('#btn');
console.log(axios);

const NAME_REGEX = /^([A-ZÁ-Ú\u00d1])([a-zá-ú\u00f1])+(?:\s([A-ZÁ-Ú\u00d1])([a-zá-ú\u00f1])+)$/;
const EMAIL_REGEX = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSW_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

let nameVali = false;
let emailVali = false;
let passwordVali = false;
let passwordConfirmVali = false;



const validation = (input, verification) => {
  formbtn.disabled = nameVali && passwordVali && emailVali && passwordConfirmVali ? false : true;
  if (verification) {
    input.classList.remove('focus:outline-orange-500');
    input.classList.add('focus:outline-green-700');
    verification = true;
  } else if (!verification) {
    input.classList.add('focus:outline-orange-500');
    input.classList.remove('focus:outline-green-700');
  }
};

nameInput.addEventListener('input', e => {
  nameVali = NAME_REGEX.test(e.target.value);
  validation(nameInput, nameVali);

});

emailInput.addEventListener('input', e => {
  emailVali = EMAIL_REGEX.test(e.target.value);
  validation(emailInput, emailVali);

});

passInput.addEventListener('input', e => {
  passwordVali = PASSW_REGEX.test(e.target.value);
  validation(passInput, passwordVali);

});

passConfirmInput.addEventListener('input', e => {
  passwordConfirmVali = e.target.value === passInput.value;
  validation(passConfirmInput, passwordConfirmVali);

});

form.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: passInput.value
    };
    const response = await axios.post('/api/users', newUser);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});