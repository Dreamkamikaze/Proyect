import { createNotification } from "/componentes/notification.js";
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const usuario = document.querySelector('#usuario');
const email = document.querySelector('#email');
const serviemplo = document.querySelector('#serviemplo');
const dateTime = document.querySelector('#dateTime');
const totalPrice = document.querySelector('#totalPrice');
const notification = document.querySelector('#notification');

const restart = document.querySelector('#restart');
const metodoPago = document.querySelector('#metodoPago');
const info = document.querySelector('#info');
const confirme = document.querySelector('#confirm');

const actualPage = window.location.href;
const cut = actualPage.split('/');
const dateId = cut[4]; //Id de la cita

(async() => {
  await axios.get('/api/isAdmin');
  const { data } = await axios.get(`/api/dates/${dateId}`);
  usuario.innerHTML = data.user.name;
  email.innerHTML = data.email;
  data.serviemplo.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = `<div class="flex flex-row justify-between items-center pr-7 pl-3">
    <p class="wao text-xl">${element.charAt(0).toUpperCase() + element.substring(1)}</p>
    </div>`;
    serviemplo.append(li);
  });
  dateTime.innerHTML = data.time;
  totalPrice.innerHTML  = `${data.price}$`;


})();

restart.addEventListener('click', async e => {
  await axios.delete(`/api/dates/${dateId}`);
  window.location.pathname = '/userServices/';
});

let a = false;
let b = false;
const confirmacion = () => {
  confirme.disabled = a && b ? false : true;
};

metodoPago.addEventListener('change', e => {
  const option = e.target.value;
  if (option !== '0') {
    a = true;
    console.log(a);
  }
  confirmacion();
});


info.addEventListener('click', e => {
  if(e.target.checked === true){
    b = true;
  } else {
    b = false;
  }
  console.log(b);
  confirmacion();
});

confirme.addEventListener('click', async e => {
  const {data} = await axios.patch(`/api/dates/${dateId}`, { payment: metodoPago.value });
  a = false
  b = false
  confirmacion()
  createNotification(false, data)
  setTimeout(() => {
    notification.innerHTML = '';
    window.location.pathname = '/'
  }, 2000);

});
