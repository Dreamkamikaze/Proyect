/* eslint-disable no-undef */
// Constantes
const menu = document.querySelector('#menu');
const peluqueria = menu.children[0];
const cuerpo = menu.children[1];
const cara = menu.children[2];
const nails = menu.children[3];
const buttons = [cuerpo, peluqueria, cara, nails];

const choose = document.querySelector('#choose');
const r = document.querySelector('#r');
const servicio = document.querySelector('#servicio');
const descripcion = document.querySelector('#descripcion');
const precio = document.querySelector('#precio');
const continuar = document.querySelector('#continuar');


//Para desbloquear el boton
let sVali = false;
let dVali = false;
let pVali = false;
const vali = () => {
  continuar.disabled = sVali && dVali && pVali ? false : true;
};

//Inputs con sus validaciones
servicio.addEventListener('input', e => {
  sVali = e.target.value.length <= 30 && e.target.value.length !== 0;
  if (!sVali) {
    servicio.classList.add('outline', 'outline-red-700');
  } else {
    servicio.classList.remove('outline', 'outline-red-700');
  }
  vali();
});
descripcion.addEventListener('input', e => {
  dVali = e.target.value.length <= 30 && e.target.value.length !== 0;
  if (!dVali) {
    descripcion.classList.add('outline', 'outline-red-700');
  } else {
    descripcion.classList.remove('outline', 'outline-red-700');
  }
  vali();
});
precio.addEventListener('input', e => {
  pVali = e.target.value.length <= 7 && e.target.value.length !== 0;
  if (!pVali) {
    precio.classList.add('outline', 'outline-red-700');
  } else {
    precio.classList.remove('outline', 'outline-red-700');
  }
  vali();
});

// Datos traidos del backend y mostrados en el frontend

(async () => {
  try {
    const { data } = await axios.get('/api/services');
    data.forEach(service => {

      //Optiones para que puedan posicionarse

      let valorOption = service.option;
      let a =  null;
      if (valorOption === '0') {
        choose.classList.add('outline', 'outline-red-700');
      } else if (valorOption === '1') {
        a = document.querySelector('#texDes');
        choose.classList.remove('outline', 'outline-red-700');
      } else if (valorOption === '2') {
        a  = document.querySelector('#texPel');
        choose.classList.remove('outline', 'outline-red-700');
      } else if (valorOption === '3') {
        a = document.querySelector('#texFac');
        choose.classList.remove('outline', 'outline-red-700');
      } else if (valorOption === '4') {
        a = document.querySelector('#texUn');
        choose.classList.remove('outline', 'outline-red-700');
      }

      const li = document.createElement('li');
      li.id = service.id;
      li.classList.add('flex', 'flex-row');
      li.innerHTML = `
      <div class="bg-slate-400 h-full w-11/12 rounded-lg flex flex-row items-center justify-between p-4 break-words">
      <div class="flex flex-col items-start w-3/4">
            <p class="font-bold pb-0 pr-2 w-full">${service.service.charAt(0).toUpperCase() + service.service.substring(1)}</p>
        <p class="text-gray-800">${service.description.charAt(0).toUpperCase() + service.description.substring(1)}</p>
        <p class="pt-2">USD: ${service.price}$</p>
        </div>
         <div class="flex justify-stretch gap-2">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="new w-9 h-9 cursor-pointer rounded-full hover:bg-blue-500" >
         <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="dlt w-9 h-9 cursor-pointer rounded-full hover:bg-rose-700">
         <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </div>
        </div>
        </div>`;
      a.append(li);

    });

  } catch (error) {
    console.log(error);
  }

})();



// Frontend
r.addEventListener('submit', async e => {
  e.preventDefault();

  //Opciones escogidas y sus acciones

  let valorOption = choose.value;
  let a =  null;
  if (valorOption === '0') {
    choose.classList.add('outline', 'outline-red-700');
    throw error;
  } else if (valorOption === '1') {
    a = document.querySelector('#texDes');
    choose.classList.remove('outline', 'outline-red-700');
  } else if (valorOption === '2') {
    a  = document.querySelector('#texPel');
    choose.classList.remove('outline', 'outline-red-700');
  } else if (valorOption === '3') {
    a = document.querySelector('#texFac');
    choose.classList.remove('outline', 'outline-red-700');
  } else if (valorOption === '4') {
    a = document.querySelector('#texUn');
    choose.classList.remove('outline', 'outline-red-700');
  }

  //Backend data//
  try {
    const newService = {
      service: servicio.value,
      description: descripcion.value,
      price: precio.value,
      option: valorOption
    };
    const { data } =  await axios.post('/api/services', newService );
    console.log(data);


    //Creando el servicio como tal
    const li = document.createElement('li');
    li.id = data.id;
    li.innerHTML = `
  <div class="bg-slate-400 h-full w-11/12 rounded-lg flex flex-row items-center justify-between p-4 break-words">
  <div class="flex flex-col items-start w-3/4">
        <p class="font-bold pb-0 pr-2 w-full">${data.service.charAt(0).toUpperCase() + servicio.value.substring(1)}</p>
    <p class="text-gray-800">${data.description.charAt(0).toUpperCase() + servicio.value.substring(1)}</p>
    <p class="pt-2">USD: ${data.price}$</p>
    </div>
     <div class="flex justify-stretch gap-2">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="new w-9 h-9 cursor-pointer rounded-full hover:bg-blue-500">
     <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
     </svg>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="dlt w-9 h-9 cursor-pointer rounded-full hover:bg-rose-700">
     <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    </div>
    </div>
    </div>`;
    a.append(li);

    //Para borrar y llevar al link


    descripcion.value = '';
    servicio.value = '';
    precio.value = '';
    choose.value ='0';
    sVali = false;
    dVali = false;
    pVali = false;
    continuar.disabled = true;

  } catch (error) {
    console.log(error, 'nao nao');
  }

});

const vaya = (ul) => {
  ul.addEventListener('click', async e => {
    const dltbtn = e.target.closest('.dlt');
    const newEmployed =  e.target.closest('.new');
    if (dltbtn) {
      const dlt = dltbtn.parentElement.parentElement.parentElement;
      await axios.delete(`/api/services/${dlt.id}`);
      dlt.remove();
    } else if (newEmployed){
      window.location.pathname = '/employed';
    }
  });
};

vaya(document.querySelector('#texDes'));
vaya(document.querySelector('#texPel'));
vaya(document.querySelector('#texFac'));
vaya(document.querySelector('#texUn'));



// Menu

menu.addEventListener('click', e => {
  if (!e.target.classList.contains('bg-black', 'text-white',  'p-2', 'rounded-lg', 'w-28', 'flex', 'justify-center')) {
    buttons.forEach(element =>  {
      element.classList.remove( 'bg-black', 'text-white', 'p-2', 'rounded-lg', 'w-28', 'flex', 'justify-center');
    });
  }
  if (e.target === menu) {
    return false;
  } else{
    e.target.classList.add( 'bg-black', 'text-white', 'p-2', 'rounded-lg', 'w-28', 'flex', 'justify-center');
  }
});
