/* eslint-disable no-undef */
const show = document.querySelector('#show');
const continuar = document.querySelector('#continuar');
const form = document.querySelector('#r');
const selectService = document.querySelector('#selectService');
const employedList = document.querySelector('#employedList');
const confirmBtn = document.querySelector('#confirmBtn');
const giveEmployed = document.querySelector('#giveEmployed');
const predeterminateOption = document.querySelector('#predeterminateOption');
const schedule = document.querySelector('#schedule');


// // // //Consiguiendo los id de los servicios
const actualPage = window.location.href;
const a = actualPage.split('/');
const cut = a[4];
const currentId = cut.split(',');

//Obteniendo los servicios escogidos
currentId.forEach(element => {
  (async () => {
    const { data } = await axios.get(`/api/getEmployers/${element}`);
    const option = document.createElement('option');
    option.id = data.id;
    option.classList.add('coconut');
    option.innerHTML = data.service.charAt(0).toUpperCase() + data.service.substring(1);
    selectService.append(option);
    const employeds = data.employed;
    employeds.forEach(element => {
      const li = document.createElement('li');
      li.id = 'a';
      li.classList.add('hidden');
      li.innerHTML = `
    <div id="${data.service}" class="relative flex-col group">
    <div id="${data.id}" class=" w-40 h-40 rounded-full outline outline-2 outline-black flex items-center justify-center hover:bg-slate-700 transition ease-in-out cursor-pointer">
       <p class="text-6xl">${element.name.slice(0,1)}</p>
       </div>
       <p id="${element._id}" class="text-center h-10 w-40 break-words pt-2 font-bold">${element.name}</p>
       </div>`;
      employedList.append(li);
    });
  })();
});


//Consiguiendo los empleados al ser seleccionado el servicio, dejando a la vista a los que se reuqieren
selectService.addEventListener('change', async e => {
  let option = e.currentTarget.selectedOptions[0].textContent;
  const list =  employedList.children;
  const arrayList = [...list];
  arrayList.forEach(element => {
    const a = element.children[0].id.charAt(0).toUpperCase() + element.children[0].id.substring(1);
    if (a === option) {
      element.classList.remove('hidden');
      element.classList.add('flex');
      confirmBtn.classList.remove('hidden');
      confirmBtn.classList.add('flex');
    } else {
      element.classList.add('hidden');
      element.classList.remove('flex');
      confirmBtn.disabled = true;
    }
  });
});

employedList.addEventListener('click', e => {
  const a = document.querySelectorAll('#a');
  const otherA = [...a];
  const b = e.target.closest('#a');
  if(!b.children[0].children[0].classList.contains('bg-slate-900', 'text-white')){
    otherA.forEach(element => {
      element.children[0].children[0].classList.remove('bg-slate-900', 'text-white');
      b.children[0].children[0].classList.add('bg-slate-900', 'text-white');
      confirmBtn.disabled = false;
    });
  }
});

giveEmployed.addEventListener('submit', e => {
  e.preventDefault();
  const a = document.querySelectorAll('#a');
  const otherA = [...a];
  const selectedEmployed = otherA.filter(element => element.children[0].children[0].classList.contains('bg-slate-900', 'text-white'));
  const employedId = selectedEmployed[0].children[0].children[1].id;
  const serviceId = selectedEmployed[0].children[0].children[0].id;
  const li = document.createElement('li');
  li.innerHTML = `
  <div id="${employedId}" class="b flex w-full h-14 outline-gray-600 border-b-2 border-l-2  rounded-md items-center p-3 font-bold justify-between hover:bg-red-700/50 cursor-pointer">${selectedEmployed[0].children[0].children[1].textContent}
  <p id="${serviceId}" class="text-xs text-slate-500">${selectedEmployed[0].children[0].id.charAt(0).toUpperCase() + selectedEmployed[0].children[0].id.substring(1)}</p>
  </div>
  `;
  show.append(li);
  const b = selectedEmployed[0].children[0].id.charAt(0).toUpperCase() + selectedEmployed[0].children[0].id.substring(1);
  const c = document.querySelectorAll('option');
  const d = document.querySelectorAll('#a');
  [...c].forEach(element => {
    if (element.textContent === b) {
      element.classList.add('hidden');
      const hiddenEmployed = [...d].filter(element => {
        element.children[0].id === selectedEmployed[0].children[0].id;
        return [element];
      });
      hiddenEmployed.forEach(element => {
        element.classList.add('hidden');
      });
    }
  });

  const list = document.querySelectorAll('.b');
  if ([...list].length === 0) {
    continuar.disabled = true;
  } else {
    continuar.disabled = false;
  }

  otherA.forEach(element => element.children[0].children[0].classList.remove('bg-slate-900', 'text-white'));
  predeterminateOption.selected = true;
  confirmBtn.disabled = true;
  confirmBtn.classList.remove('flex');
  confirmBtn.classList.add('hidden');
});

show.addEventListener('click', e => {
  const b = e.target.closest('.b');

  const c = document.querySelectorAll('option');
  [...c].forEach(element => {
    element.classList.remove('hidden');
    element.classList.add('flex');
  });
  b.remove();
  const list = document.querySelectorAll('.b');
  if ([...list].length === 0) {
    continuar.disabled = true;
  } else {
    continuar.disabled = false;
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const list = document.querySelectorAll('.b');
  const option = document.querySelectorAll('.coconut');

  let results = [...option].filter(element => !element.classList.contains('hidden'));


  let noEmplo = [];
  results.forEach(element => {
    const serviceId = element.id;
    const newId = serviceId + '!' + 'CE';
    noEmplo.push(newId);
  });


  let arra = [];
  [...list].forEach(element => {
    const serviceId = element.children[0].id;
    const employedId = element.id;
    const newId = serviceId + '!' + employedId;
    arra.push(newId);
  });

  window.location.pathname = `/schedule/${noEmplo}.${arra}`;

  if(noEmplo.length === 0){
    window.location.pathname = `/schedule/Nao.${arra}`;
  }
});

// eslint-disable-next-line no-unused-vars
schedule.addEventListener('click', e => {
  window.location.pathname = `/schedule/Nao.${cut}`;
});


