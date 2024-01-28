/* eslint-disable no-undef */
// Constantes
const ul = document.querySelector('#selectionList');
const menu = document.querySelector('#menu');
// const makeDate = document.querySelector('#makeDate');
const peluqueria = menu.children[0];
const cuerpo = menu.children[1];
const cara = menu.children[2];
const nails = menu.children[3];
const buttons = [cuerpo, peluqueria, cara, nails];

const makeDate = document.querySelector('#makeDate');


//Funcion que crea los  li
const maker = (nameId, dat) => {
  const li = document.createElement('li');
  li.classList.add('hidden');
  li.innerHTML = `
  <div id=${nameId} class="pt-2 h-full w-11/12">
      <div class=" h-full w-full rounded-lg flex flex-row items-center justify-between pl-7 pt-4 pb-4 break-words border-2 border-gray">
      <div class="flex flex-col items-start w-3/4">
      <p class="font-bold pb-0 pr-2 w-full">${dat.service.charAt(0).toUpperCase() + dat.service.substring(1)}</p>
      <p class="text-gray-800">${dat.description.charAt(0).toUpperCase() + dat.description.substring(1)}</p>
      <p class="pt-2">USD: ${dat.price}$</p>
      </div>
      </div>
      </div>`;
  ul.append(li);
};

// Encontrado los datos predeterminados
(async() => {
  try {
    const { data } = await axios.get('/api/services');
    const pelu = data.filter(a => a.option === '1');
    pelu.forEach(element => {
      const li = document.createElement('li');
      li.classList.add('flex', 'flex-row');
      li.innerHTML = `
      <div id='serPel' class="pt-2 h-full w-11/12">
      <div  class=" h-full w-full rounded-lg flex flex-row items-center justify-between pl-7 pt-4 pb-4 break-words border-2 border-gray">
      <div class="flex flex-col items-start w-3/4">
      <p class="font-bold pb-0 pr-2 w-full">${element.service.charAt(0).toUpperCase() + element.service.substring(1)}</p>
      <p class="text-gray-800">${element.description.charAt(0).toUpperCase() + element.description.substring(1)}</p>
      <p class="pt-2">USD: ${element.price}$</p>
      </div>
      </div>
      </div>`;
      ul.append(li);
    });
    const body = data.filter(a => a.option === '2');
    body.forEach(element => {
      maker('serBody', element);
    });
    const face = data.filter(a => a.option === '3');
    face.forEach(element => {
      maker('serFace', element);
    });
    const nail = data.filter(a => a.option === '4');
    nail.forEach(element => {
      maker('serNail', element);
    });


  } catch (error) {
    console.log(error);
  }
})();


//Funcion para esconder  y mostrar los servicios
const show = (choose, hiddenOne, hiddenTwo, hiddenTre) => {
  choose.forEach(element => {
    element.parentElement.classList.remove('hidden');
    element.parentElement.classList.add('flex', 'flex-row');
  });
  //Escondiendo los otros
  hiddenOne.forEach(element => {
    element.parentElement.classList.add('hidden');
  });
  hiddenTwo.forEach(element => {
    element.parentElement.classList.add('hidden');
  });
  hiddenTre.forEach(element => {
    element.parentElement.classList.add('hidden');
  });
};


// Menu

menu.addEventListener('click', e => {
  const pel = document.querySelectorAll('#serPel');
  const serPel = Array.prototype.slice.call(pel);
  const body = document.querySelectorAll('#serBody');
  const serBody = Array.prototype.slice.call(body);
  const face = document.querySelectorAll('#serFace');
  const serFace = Array.prototype.slice.call(face);
  const nail = document.querySelectorAll('#serNail');
  const serNail = Array.prototype.slice.call(nail);

  if (e.target === peluqueria) {
    show(serPel, serBody, serFace, serNail);
  } else if (e.target === cuerpo) {
    show(serBody, serPel, serFace, serNail);
  } else if (e.target === cara) {
    show(serFace, serNail, serBody, serPel);
  } else if (e.target === nails) {
    show(serNail, serFace, serPel, serBody);
  }


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

makeDate.addEventListener('click', async () => {
//Aqui crea el servicio
  try {
    const newDate = {
      price: ''
    };
    const a = await axios.post('/api/dates', newDate);
    window.location.pathname = `/userServices/${a.data.id}`;
  } catch (error) {
    console.log(error);
  }

});


