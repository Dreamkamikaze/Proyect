import { createNotification } from "/componentes/notification.js";

/* eslint-disable no-undef */

console.log('hola');

const list = document.querySelector('#list');
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const prueba = document.querySelector('#prueba');
const profile = document.querySelector('#profile');
const notification = document.querySelector('#notification')

let activeOp = false;
let activeLen = false;
const vali = () => {
  btn.disabled = activeOp && activeLen ? false : true;
};

const b = Array.from(profile.getElementsByClassName('a'));
activeLen = b.length < 8;
console.log(activeLen);
vali();



(async () => {
  try {
    const { data } = await axios.get('/api/employers');
    data.forEach(employer => {
      const li = document.createElement('li');
      li.innerHTML = `
      <li class="flex w-full h-14 bg-gray-300 outline outline-gray-600 outline-1 items-center p-3 font-bold hover:bg-gray-500 cursor-pointer">${employer.name}</li>
      `;
      list.append(li);

      //Para seleccionar el empleado que se quiere
      const listItems = Array.from(list.getElementsByTagName('li'));
      // Un evento que funciona para el array de li
      listItems.forEach(li => {
        li.addEventListener('click', e => {
          const thisLi= e.target;
          const allOtherLis = listItems.filter(li => {
            return (li !== thisLi);
          });
          // Todos los li que no hayan sido escogidos se les quita la propiedad de escogidos
          allOtherLis.forEach(li => {
            li.classList.remove('text-white', 'bg-slate-800');
          });
          // Si un li es seleccionado, se le agrega las clases
          thisLi.classList.add('text-white', 'bg-slate-800');
          listItems.filter(li => {
            const selected = li.classList.contains('text-white', 'bg-slate-800');
            if (selected === true) {
              activeOp = true;
              vali();
            }
            return (listItems);
          });
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
})();


form.addEventListener('submit', async e => {
  
  e.preventDefault();
  try {
    const listItems = Array.from(list.getElementsByTagName('li'));
    const name = listItems.filter(li => {
      const selected = !li.classList.contains('text-white', 'bg-slate-800');
      return (selected === false);
    });
    name[0].classList.remove('text-white', 'bg-slate-800');
    activeOp =  name[0].classList.contains('text-white', 'bg-slate-800');
    vali();

    //Para obtener el nombre del trabajador
    const logo = name[0].textContent;

    //Para encontrar el id de la pagina
    const curret = window.location.href;
    const theId = curret.split('/');
    const key = theId[4];

    const { data } = await axios.get('/api/employers');
    const newEmp = data.find(({ name }) => name === logo);


    const b = Array.from(profile.getElementsByClassName('a'));
    const div = document.createElement('div');


    await axios.put(`/api/employers/${key}`, { employed: newEmp._id });



    div.innerHTML = `
    <div class="relative flex-col group">
  <div class="a w-40 h-40 rounded-full outline outline-2 outline-black flex items-center justify-center cursor-pointer">
  <div class=" c absolute w-40 h-40 bg-red-700/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>                      
  </div>
     <p class="text-6xl">${logo.slice(0,1)}</p>                     
     </div>
     <p class="text-center h-10 w-40 break-words pt-2 font-bold">${logo}</p>
     </div>`;
    prueba.append(div);


    activeLen = b.length < 8;
    console.log(activeLen);
    vali();
  } catch (error) {
    console.log(error);
    createNotification(true, error.response.data.error )
    setTimeout(() => {
      notification.innerHTML = '';
    }, 7000);
  }
});


const borrar = (ul) => {
  ul.addEventListener('click', async e => {
    const curret = window.location.href;
    const theId = curret.split('/');
    const key = theId[4];
    const dltbtn = e.target.closest('.c');
    if (dltbtn) {
      const dlt = dltbtn.parentElement.parentElement.parentElement;
      const ds = dltbtn.parentElement.parentElement.children[1].textContent
      const { data } = await axios.get('/api/employers');
      const dltEmp = data.find(({ name }) => name === ds )
      dlt.remove();
      
      await axios.patch(`/api/employers/${key}`, { employed: dltEmp._id });
    }
    activeLen = b.length < 8;
    console.log(activeLen);
    vali();
  });
};

borrar(prueba);

(async () => {
  const curret = window.location.href;
  const theId = curret.split('/');
  const key = theId[4];
  const { data } = await axios.get(`/api/getEmployers/${key}`);
  const important = data.employed
  important.forEach(worker => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="relative flex-col group">
  <div class="a w-40 h-40 rounded-full outline outline-2 outline-black flex items-center justify-center cursor-pointer">
  <div class=" c absolute w-40 h-40 bg-red-700/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>                      
  </div>
     <p class="text-6xl">${worker.name[0]}</p>                     
     </div>
     <p class="text-center h-10 w-40 break-words pt-2 font-bold">${worker.name}</p>
     </div>`;
    prueba.append(div);
  })
})();




