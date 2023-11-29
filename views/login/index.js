/* eslint-disable no-undef */
const emailInput = document.querySelector('#emailInput');
const passInput = document.querySelector('#passInput');
const form = document.querySelector('#form');
const textError = document.querySelector('#text-error');

// eslint-disable-next-line no-unused-vars
form.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const user = {
      email: emailInput.value,
      password: passInput.value,
    };
    await axios.post('/api/login', user);
    window.location.pathname = '/';
  } catch (error) {
    console.log(error);
    textError.innerHTML = error.response.data.error;
    setTimeout(() => {
      textError.innerHTML = '';
    }, 7000);
  }
});