/* eslint-disable no-undef */
const actualMonth = document.querySelector('#month');
const ul = document.querySelector('#ul');
const timeList = document.querySelector('#timeList');

const date =  new Date();

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1,0).getDate();

const hour = date.getHours();


const hours = [
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17
];

const vailableHours = [hours.filter(element => element >  hour)];

const usedHours = (vailableHours[0]);


const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

const day = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado'
];

actualMonth.innerHTML = months[date.getMonth()];


let contador = '';

for (let i = 0; i < 8; i++) {
  contador = i;
  let a = date.getDate()+contador;
  if (a > lastDay) {
    a = a - lastDay ;
  }
  let b =  date.getDay() + contador;
  if (b > 6) {
    b = b - 7;
  }

  const li = document.createElement('li');
  if (day[b] === 'Domingo') {
    li.innerHTML = `
  <div class="flex justify-center items-center flex-col pr-2 pl-2">
  <div class="bg-slate-400 rounded-full h-20 w-20 flex items-center justify-center cursor-not-allowed ">
      <p class="font-bold text-2xl text-slate-700">${a}</p>
  </div>
  <p class="text-slate-700">${day[b]}</p>
   </div>`;
    ul.append(li);
  } else {
    li.innerHTML = `
  <div class="flex justify-center items-center flex-col pr-2 pl-2">
  <div id="wao" class="bg-slate-400 rounded-full h-20 w-20 flex items-center justify-center cursor-pointer hover:bg-slate-700 transition ease-in-out">
      <p class="font-bold text-2xl">${a}</p>
  </div>
  <p>${day[b]}</p>
   </div>`;
    ul.append(li);
  }

}

const a = ul.children[0].children[0].children[0];
const b = ul.children[1].children[0].children[0];
const c = ul.children[2].children[0].children[0];
const d = ul.children[3].children[0].children[0];
const e = ul.children[4].children[0].children[0];
const f = ul.children[5].children[0].children[0];
const g = ul.children[6].children[0].children[0];
const h = ul.children[7].children[0].children[0];

const buttons = [a, b, c, d, e, f, g, h];


ul.addEventListener('click', e => {
  const wow = e.target.closest('#wao');
  if (!wow.classList.contains('bg-slate-800')) {
    buttons.forEach(element =>  {
      element.classList.remove( 'bg-slate-800');
    });
  }
  if (e.target === ul) {
    return false;
  } else{
    wow.classList.add( 'bg-slate-800');
  }

  if (a.classList.contains('bg-slate-800')) {


    usedHours.forEach(element => {
      const li = document.createElement('li');
      li.innerHTML = `
          <div class=" necessaryOne flex w-full h-16 pb-1">
          <div class="flex items-center w-full h-full bg-slate-600 rounded-lg pl-4 font-semibold text-xl cursor-pointer hover:bg-slate-700">${element}:00</div>
          </div>`;
      timeList.append(li);
    });

    const c = document.getElementsByClassName('necessaryTwo');
    const notNecessary = Array.prototype.slice.call(c);
    notNecessary.forEach(element => {
      element.classList.remove('flex');
      element.classList.add('hidden');
    });

  } else {

    hours.forEach(element => {
      const li = document.createElement('li');
      li.innerHTML = `
            <div class="necessaryTwo flex w-full h-16 pb-1">
            <div class="flex items-center w-full h-full bg-slate-600 rounded-lg pl-4 font-semibold text-xl cursor-pointer hover:bg-slate-700">${element}:00</div>
            </div>`;
      timeList.append(li);


    });

    const c = document.getElementsByClassName('necessaryOne');
    const notNecessary = Array.prototype.slice.call(c);
    notNecessary.forEach(element => {
      element.classList.remove('flex');
      element.classList.add('hidden');
    });
  }
});



timeList.addEventListener('click', e => {
  const a = timeList.children;
  const buttons = Array.prototype.slice.call(a);
  if (!e.target.classList.contains('bg-slate-800')) {
    buttons.forEach(element =>  {
      element.children[0].children[0].classList.remove( 'bg-slate-800');
      element.children[0].children[0].classList.add( 'bg-slate-600');
    });
  }
  if (e.target === timeList) {
    return false;
  } else{
    e.target.classList.add( 'bg-slate-800');
    e.target.classList.remove( 'bg-slate-600');
  }
});
