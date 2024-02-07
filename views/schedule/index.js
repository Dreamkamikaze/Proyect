/* eslint-disable no-undef */
const actualMonth = document.querySelector('#month');
const ul = document.querySelector('#ul');
const timeList = document.querySelector('#timeList');
const time = document.querySelector('#time');
const dates = document.querySelector('#dates');
const continuar = document.querySelector('#continuar');
const form = document.querySelector('#form');
const x = document.querySelector('#x');
const noAllowed = document.querySelector('#noAllowed');

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

(async() => {
  usedHours.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class=" necessaryOne hidden w-full h-16 pb-1">
        <div class="flex items-center w-full h-full bg-slate-600 rounded-lg pl-4 font-semibold text-xl cursor-pointer hover:bg-slate-700">${element}:00</div>
        </div>`;
    timeList.append(li);
  });

  hours.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = `
          <div class="necessaryTwo hidden w-full h-16 pb-1">
          <div class="flex items-center w-full h-full bg-slate-600 rounded-lg pl-4 font-semibold text-xl cursor-pointer hover:bg-slate-700">${element}:00</div>
          </div>`;
    timeList.append(li);
  });

})();


ul.addEventListener('click', e => {
  timeList.classList.remove('hidden');
  timeList.classList.add('flex');
  const wow = e.target.closest('#wao');
  if (!wow.classList.contains('bg-slate-800')) {
    buttons.forEach(element =>  {
      element.classList.remove( 'bg-slate-800');
    });
  }
  const day = e.target.children[0].textContent;
  const weekend = e.target.parentElement.children[1].textContent;

  dates.innerHTML =  ` ${weekend}, ${day} de ${actualMonth.textContent}`;
  time.innerHTML = '-:--';

  continuar.disabled = true;

  if (e.target === ul) {
    return false;
  } else{
    wow.classList.add( 'bg-slate-800');
  }

  if (a.classList.contains('bg-slate-800')) {

    const d = document.getElementsByClassName('necessaryOne');
    const c = document.getElementsByClassName('necessaryTwo');
    const necesary = [...d];
    necesary.forEach(element => {
      element.classList.remove('hidden');
      element.classList.add('flex');
    });
    const notNecessary = Array.prototype.slice.call(c);
    notNecessary.forEach(element => {
      element.classList.remove('flex');
      element.classList.add('hidden');
    });

  } else {

    const d = document.getElementsByClassName('necessaryTwo');
    const c = document.getElementsByClassName('necessaryOne');
    const necesary = [...d];
    necesary.forEach(element => {
      element.classList.remove('hidden');
      element.classList.add('flex');
    });
    const notNecessary = Array.prototype.slice.call(c);
    notNecessary.forEach(element => {
      element.classList.remove('flex');
      element.classList.add('hidden');
    });
  }
});



timeList.addEventListener('click', e => {
  time.innerHTML = `${e.target.textContent}`;
  if (time.innerHTML !== '-:--') {
    continuar.disabled = false;
  }
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

// eslint-disable-next-line no-unused-vars
x.addEventListener('click', e => {
  noAllowed.classList.remove('flex');
  noAllowed.classList.add('hidden');
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  try{
    const { data }  = await axios.get('/api/isAdmin');
    const user = data[0]._id;
    const email = data[0].email;
    const actualPage = window.location.href;
    const a = actualPage.split('/');
    const cut = a[4];
    const searchPrice = [];
    const employedId = [];
    const b = cut.split('.');
    const currentId = b[1].split(',');

    //Para obtener los servicios sin empleados
    let serviEmpleo = [];
    let diablo = [];
    const serviNoEmplo = b[0].split(',');
    if (serviNoEmplo[0] !== 'Nao') {
      for (let index = 0; index < serviNoEmplo.length; index++) {
        const dobleCut = serviNoEmplo[index].split('!');
        diablo.push(dobleCut[0]);
        const { data } = await axios.get(`/api/getEmployers/${dobleCut[0]}`);
        searchPrice.push(dobleCut[0]);
        serviEmpleo.push(`${data.service}(Cualquier empleado)`);
      }
    }

    //Para obtener a los empleados y a los servicios requeridos por el cliente
    currentId.forEach(element => {
      const dobleCut = element.split('!');
      const servicesId = dobleCut[0];
      const searchEm = dobleCut[1];
      employedId.push(searchEm);
      searchPrice.push(servicesId);
    });

    let dsa = [];//Nombre de los empleados

    if (employedId.includes(undefined)) {
      for (let i = 0; i < searchPrice.length; i++) {
        const cualquier = 'Cualquier empleado';
        dsa.push(cualquier);
      }
    }else {
      for (let i = 0; i < employedId.length; i++) {
        const { data } = await axios.get(`/api/users/${employedId[i]}`);
        dsa.push(data.name);
      }
    }


    //Para obtener el precio de los servicios y el nombre de estos
    let sum  = 0;
    const arra = []; //Nombre de los servicios
    for (let i = 0; i < searchPrice.length; i++) {
      const { data } = await axios.get(`/api/getEmployers/${searchPrice[i]}`);
      arra.push(data.id);
      sum += data.price; //Precio total
    }


    let serviemplo = []; //Datos para el post, los servicios con el empleado
    let wao = [];
    for (let i = 0; i < currentId.length; i++) {
      const a = currentId[i].split('!');
      a.forEach(element => wao.push(element));
    }



    const serviWithEmplo = wao.filter(element => {
      for (let i = 0; i < arra.length; i++) {
        const  b = element === arra[i];
        if (b === true) {
          let doblewao = [];
          doblewao.push(element);
          return doblewao;
        }
      }
    });
    console.log(serviWithEmplo );


    for (let i = 0; i < serviWithEmplo.length; i++) {
      const { data } = await axios.get(`/api/getEmployers/${serviWithEmplo[i]}`);
      serviemplo.push(`${data.service} (${dsa[i]})` );
    }

    let finalServiemplo = serviemplo.concat(serviEmpleo);

    const completeDate = {
      price: sum,
      time: `${dates.textContent} a las ${time.textContent}`,
      user: user,
      email: email,
      serviemplo: finalServiemplo,
      payment: 'No definido'
    };

    (async() => {
      const { data } = await axios.post('/api/dates', completeDate );
      window.location.pathname = `/confirm/${data.id}`;
    })();

  } catch (error) {
    console.log(error);
    noAllowed.classList.remove('hidden');
    noAllowed.classList.add('flex');
  }
});
