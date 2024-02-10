/* eslint-disable no-undef */
// Constantes
const menu = document.querySelector('#menu');
const peluqueria = menu.children[0];
const cuerpo = menu.children[1];
const cara = menu.children[2];
const nails = menu.children[3];
const buttons = [cuerpo, peluqueria, cara, nails];

const show = document.querySelector('#show');
const results = document.querySelector('#results');
const continuar = document.querySelector('#continuar');
const form = document.querySelector('#r');


// Datos traidos del backend y mostrados en el frontend

(async () => {
  try {

    const { data } = await axios.get('/api/services');
    data.forEach(service => {

      //Optiones para que puedan posicionarse

      let valorOption = service.option;
      let a =  null;
      if (valorOption === '1') {
        a = document.querySelector('#texDes');
      } else if (valorOption === '2') {
        a  = document.querySelector('#texPel');
      } else if (valorOption === '3') {
        a = document.querySelector('#texFac');
      } else if (valorOption === '4') {
        a = document.querySelector('#texUn');
      }

      const li = document.createElement('li');
      li.id = service.id;
      li.classList.add('flex', 'flex-row');
      li.innerHTML = `
        <div class="border-2 border-slate-300 h-full w-11/12 rounded-lg flex flex-row items-center justify-between p-4 break-words">
        <div class="flex flex-col items-start w-3/4">
              <p class="font-bold pb-0 pr-2 w-full">${service.service.charAt(0).toUpperCase() + service.service.substring(1)}</p>
          <p class="text-gray-800">${service.description.charAt(0).toUpperCase() + service.description.substring(1)}</p>
          <p class="pt-2">USD: ${service.price}$</p>
          </div>
          <div class="flex justify-stretch gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="add w-9 h-9 cursor-pointer rounded-full hover:bg-indigo-600 transition ease-in-out" >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="rmv w-9 h-9 cursor-pointer rounded-full hover:bg-red-700 hidden bg-black stroke-white transition ease-in-out">
         <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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


//Lo que pasa al presionar un boton
const vaya = (ul)  => {

  ul.addEventListener('click', async e => {
    const addbtn = e.target.closest('.add');
    const rmvbtn = e.target.closest('.rmv');

    //Lo que pasa si presiono el boton de agregar
    if (addbtn) {
      //Pido los datos que se encuentran en el servicio
      const codId = addbtn.parentElement.parentElement.parentElement;
      const selectSerId = codId.getAttribute('id');

      const principal = addbtn.parentElement.parentElement.children[0];
      const servi = principal.children[0].textContent;
      const time =  principal.children[1].textContent;
      const money = principal.children[2].textContent;

      //Agregando clases para que esteticamente se vea  seleccionado
      const add = addbtn.parentElement.parentElement;
      const remo = addbtn.parentElement.children[1];
      add.classList.add('border-slate-700');
      addbtn.classList.add('hidden');
      remo.classList.remove('hidden');

      //Creando una lista con los servicios seleccionados
      const a = document.createElement('li');
      a.id = selectSerId;
      a.innerHTML = `
      <div class="h-20 w-full  rounded-lg p-2 pl-4 pr-4 text-black flex flex-row justify-between items-center">
      <div class="flex flex-col">
      <p id="servi" class="text-xl font-semibold">${servi}</p>
      <p id="time" class="font-semibold">${time}</p>
       </div>
      <p id="money" class="text-lg text-gray-800">${money}</p>
     </div>   
     `;
      show.append(a);

      //Consiguiendo el valor de los servicios escogidos y metiendolos en un array
      const necessary = show.children;
      const sumSer = Array.prototype.slice.call(necessary);
      let arra = [];
      sumSer.forEach(element => {
        const a = element.children[0].children[1].textContent;
        const b = a.split(': ');
        const c = b[1].split('$');

        arra.push(c[0]);
      });

      //Sumando cuanta plata hay que pagar por servicio
      let sum = 0;
      for (let i = 0; i < arra.length; i++) {
        sum += Number(arra[i]);
        results.innerHTML = sum + '$';
      }

      if (show.children.length > 0) {
        continuar.disabled = false;
      }

      //Boton al quitar un servicio
    } else if (rmvbtn){
      //Remuevo las clases para dar a entender que no esta seleccionado el  servicio
      const principal = rmvbtn.parentElement.parentElement.children[0];
      const servi = principal.children[0].textContent;
      const rmv = rmvbtn.parentElement.parentElement;
      const adding = rmvbtn.parentElement.children[0];
      rmv.classList.remove('border-slate-700');
      rmvbtn.classList.add('hidden');
      adding.classList.remove('hidden');


      //Creo un array para guardar a los servicios borrados para luego borrarlos
      let arra = [];
      let minusArra = '';

      //Consiguiendo el servicio que se quiere remover
      const necessary = show.children;
      const dltSer = Array.prototype.slice.call(necessary);
      const a = dltSer.filter(element => {
        const b = element.children[0].children[0].children[0].textContent;
        const d = element.children[0].children[1].textContent;
        const e = d.split(': ');
        const c = e[1].split('$');

        if (b === servi) {
          minusArra = Number(c[0]);
          return element;
        }
      });
      let res = minusArra;

      //Consiguiendo los servicios que aun no  se han removido
      dltSer.forEach(element => {
        const a = element.children[0].children[1].textContent;
        const b = a.split(': ');
        const c = b[1].split('$');
        arra.push(c[0]);
      });

      //Restando el precio de los servicios eliminados de los que no han sido eleminidos
      let sum = 0;

      for (let i = 0; i < arra.length; i++) {
        sum += Number(arra[i]);
      }

      results.innerHTML = sum - res + '$';
      //Borrando el servicio de la lista
      a[0].remove();


      if (show.children.length === 0) {
        continuar.disabled = true;
      }
    }
  });
};

vaya(document.querySelector('#texDes'));
vaya(document.querySelector('#texPel'));
vaya(document.querySelector('#texFac'));
vaya(document.querySelector('#texUn'));


form.addEventListener('submit', async e => {
  e.preventDefault();
  const necessary = show.children;
  const dltSer = Array.prototype.slice.call(necessary);
  let array = [];
  dltSer.forEach(element => {
    array.push(element.getAttribute('id'));
  });
  console.log(array);

  window.location.pathname = `/userEmployed/${array}`;

});


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
