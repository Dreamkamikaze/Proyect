import { createNotification } from "../componentes/notification.js";
/* eslint-disable no-undef */
const form = document.querySelector('#form');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const formbtn = document.querySelector('#btn');
const notification = document.querySelector('#notification')


//Regex
const NAME_REGEX = /^([A-ZÁ-Ú\u00d1])([a-zá-ú\u00f1])+(?:\s([A-ZÁ-Ú\u00d1])([a-zá-ú\u00f1])+)$/;
const EMAIL_REGEX = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/;


//funcion para la validacion de los inputs

let nameVali = false;
let emailVali = false;

const validation = (input, verification) => {
  formbtn.disabled = emailVali  && nameVali ? false : true;
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

//Creando un password aleatorio al empleado

let randomstring = Math.random().toString(36).slice(-8);

//Guardando los datos con el formulario

form.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      password: randomstring, 
      rol: 'trabajador',
      verified: true
    };
    const { data } = await axios.post('/api/employers', newUser);
    createNotification(false, data );
    setTimeout(() => {
      notification.innerHTML = '';
    }, 4000);
    nameInput.value = '';
    emailInput.value = '';
    validation(nameInput, false);
    validation(emailInput, false);

  } catch (error) {
    createNotification(true, error.response.data.error );
    setTimeout(() => {
      notification.innerHTML = '';
    }, 4000);
  }
});


