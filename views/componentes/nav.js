/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const nav = document.querySelector('#nav');

const navHome = () => {
  nav.innerHTML = ` 
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="text-white text-3xl font-extralight cursor-default">New Contrast</p>

<!-- Movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-9 h-9 md:hidden active:bg-rose-950 rounded-lg p-1 text-white">
     <path stroke-linecap="round"
      stroke-linejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

<!-- Computador -->
<div class="hidden md:flex row text-white font-extralight gap-3">
<a href="/login/" class=" py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Iniciar sesión</a>
<a href="/signup/" class=" bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Registrarse</a>
</div> 

<div class="bg-rose-950/80 fixed top-16 left-0 right-0 bottom-96 hidden items-center justify-center flex-col gap-3">
<a href="/login/" class="py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out  text-white">Iniciar sesión</a>
<a href="/signup/" class=" bg-rose-700 py-2 px-2 text-white hover:bg-rose-950 transition ease-in-out rounded-lg">Registrarse</a>
</div>
</div>
    `;
};

const adminHome = () => {
  nav.innerHTML = ` 
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="text-white text-3xl font-extralight cursor-default">New Contrast</p>

<!-- Movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-9 h-9 md:hidden active:bg-rose-950 rounded-lg p-1 text-white">
     <path stroke-linecap="round"
      stroke-linejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

<!-- Computador -->
<div class="hidden md:flex row text-white font-extralight gap-3">
<a href="/servicess/" class=" py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Agregar servicios</a>
<a href="/datesView/" class=" py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Ver citas</a>
<button id="closeBtn" class="bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Cerrar sesión</button>
</div> 

<div class="bg-rose-950/80 fixed top-16 left-0 right-0 bottom-96 hidden items-center justify-center flex-col gap-3">
<a href="/servicess/" class="py-2 px-2  text-white hover:bg-rose-950 rounded-lg transition ease-in-out">Agregar servicios</a>
<a href="/datesView/" class=" py-2 px-2 text-white hover:bg-rose-950 transition ease-in-out rounded-lg">Ver citas</a>
<button id="closeBtn" class="bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Cerrar sesión</button>
</div>
</div>
    `;
};

const adminDatesView = () => {
  nav.innerHTML = ` 
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="text-white text-3xl font-extralight cursor-default">New Contrast</p>

<!-- Movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-9 h-9 md:hidden active:bg-rose-950 rounded-lg p-1 text-white">
     <path stroke-linecap="round"
      stroke-linejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

<!-- Computador -->
<div class="hidden md:flex row text-white font-extralight gap-3">
<a href="/servicess/" class=" py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Agregar servicios</a>
<a href="/" class="bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Menú principal</a>
</div> 

<div class="bg-rose-950/80 fixed top-16 left-0 right-0 bottom-96 hidden items-center justify-center flex-col gap-3">
<a href="/servicess/" class=" text-white py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Agregar servicios</a>
<a href="/" class="bg-rose-700 py-2 px-2 text-white hover:bg-rose-950 transition ease-in-out rounded-lg">Menú principal</a>
</div>
</div>
    `;
};

const adminServicess = () => {
  nav.innerHTML = ` 
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="text-white text-3xl font-extralight cursor-default">New Contrast</p>

<!-- Movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-9 h-9 md:hidden active:bg-rose-950 rounded-lg p-1 text-white">
     <path stroke-linecap="round"
      stroke-linejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

<!-- Computador -->
<div class="hidden md:flex row text-white font-extralight gap-3">
<a href="/datesView/" class=" py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Ver citas</a>
<a href="/" class="bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Menú principal</a>
</div> 

<div class="bg-rose-950/80 fixed top-16 left-0 right-0 bottom-96 hidden items-center justify-center flex-col gap-3">
<a href="/datesView/" class="py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out text-white">Ver citas</a>
<a href="/" class="bg-rose-700 py-2 px-2 text-white hover:bg-rose-950 transition ease-in-out rounded-lg">Menú principal</a>
</div>
</div>
    `;
};

const adminPrede = () => {
  nav.innerHTML = ` 
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="text-white text-3xl font-extralight cursor-default">New Contrast</p>

<!-- Movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-9 h-9 md:hidden active:bg-rose-950 rounded-lg p-1 text-white">
     <path stroke-linecap="round"
      stroke-linejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

<!-- Computador -->
<div class="hidden md:flex row text-white font-extralight gap-3">
<a href="/servicess/" class=" py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Agregar servicios</a>
<a href="/datesView/" class=" py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Ver citas</a>
<a href="/" class="bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Menú principal</a>
</div> 

<div class="bg-rose-950/80 fixed top-16 left-0 right-0 bottom-96 hidden items-center justify-center flex-col gap-3">
<a href="/servicess/" class="py-2 px-2  text-white hover:bg-rose-950 rounded-lg transition ease-in-out">Agregar servicios</a>
<a href="/datesView/" class=" py-2 px-2 text-white hover:bg-rose-950 transition ease-in-out rounded-lg">Ver citas</a>
<a href="/" class="bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Menú principal</a>
</div>
</div>
    `;
};

const userPrede = () => {
  nav.innerHTML = ` 
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="text-white text-3xl font-extralight cursor-default">New Contrast</p>

<!-- Movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-9 h-9 md:hidden active:bg-rose-950 rounded-lg p-1 text-white">
     <path stroke-linecap="round"
      stroke-linejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

<!-- Computador -->
<div class="hidden md:flex row text-white font-extralight gap-3">

<a href="/" class="bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Menú principal</a>
</div> 

<div class="bg-rose-950/80 fixed top-16 left-0 right-0 bottom-96 hidden items-center justify-center flex-col gap-3">

<a href="/" class="bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition  text-white ease-in-out">Menú principal</a>
</div>
</div>
    `;
};

const userHome = () => {
  nav.innerHTML = ` 
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="text-white text-3xl font-extralight cursor-default">New Contrast</p>
    
    <!-- Movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-9 h-9 md:hidden active:bg-rose-950 rounded-lg p-1 text-white">
     <path stroke-linecap="round"
      stroke-linejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

<!-- Computador -->
<div class="hidden md:flex row text-white font-extralight gap-3">

<button id="closeBtn" class="bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Cerrar sesión</button>
</div> 

<div class="bg-rose-950/80 fixed top-16 left-0 right-0 bottom-96 hidden items-center justify-center flex-col gap-3">

<button id="closeBtn" class=" bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Cerrar sesión</button>
</div>
</div>`;
};


const navSignup = () => {
  nav.innerHTML = ` 
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="text-white text-3xl font-extralight cursor-default">New Contrast</p>

<!-- Movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-9 h-9 md:hidden active:bg-rose-950 rounded-lg p-1 text-white">
     <path stroke-linecap="round"
      stroke-linejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

<!-- Computador -->
<div class="hidden md:flex row text-white font-extralight gap-3">
<a href="/login/" class=" py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Iniciar sesión</a>
<a href="/" class="  py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Menú principal</a>
</div> 

<div class="bg-rose-950/80 fixed top-16 left-0 right-0 bottom-96 hidden items-center justify-center flex-col gap-3">
<a href="/login/" class="py-2 px-2 text-white hover:bg-rose-950 rounded-lg transition ease-in-out">Iniciar sesión</a>
<a href="/" class="  py-2 px-2 text-white hover:bg-rose-950 transition ease-in-out rounded-lg">Menú principal</a>
</div>
</div>
    `;
};

const navLogin = () => {
  nav.innerHTML = ` 
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="text-white text-3xl font-extralight cursor-default">New Contrast</p>

<!-- Movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-9 h-9 md:hidden active:bg-rose-950 rounded-lg p-1 text-white">
     <path stroke-linecap="round"
      stroke-linejoin="round" 
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg> 

<!-- Computador -->
<div class="hidden md:flex row text-white font-extralight gap-3">
<a href="/" class="  py-2 px-2 text-white hover:bg-rose-950 transition ease-in-out rounded-lg">Menú principal</a>
<a href="/signup/" class=" bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Registrarse</a>
</div> 

<div class="bg-rose-950/80 fixed top-16 left-0 right-0 bottom-96 hidden items-center justify-center flex-col gap-3">
<a href="/" class="  py-2 px-2 text-white hover:bg-rose-950 transition ease-in-out rounded-lg">Menú principal</a>
<a href="/signup/" class=" bg-rose-950 py-2 px-2 text-white hover:bg-rose-950 transition ease-in-out rounded-lg">Registarse</a>
</div>
</div>
    `;
};

const makingBtn = () => {
  const navBtn =  nav.children[0].children[1];
  // eslint-disable-next-line no-unused-vars
  navBtn.addEventListener('click', e => {
    const menuTlf = nav.children[0].children[3];
    console.log(menuTlf);
    if (!navBtn.classList.contains('active')) {
      navBtn.classList.add('active');
      navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />';
      menuTlf.classList.remove('hidden');
      menuTlf.classList.add('flex');
    } else {
      navBtn.classList.remove('active');
      menuTlf.classList.remove('flex');
      menuTlf.classList.add('hidden');
      navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
    }
  });
};

// eslint-disable-next-line no-undef
if (window.location.pathname === '/') {
  (async() => {
    try {
      const { data } = await axios.get('/api/isAdmin');

      if (data[0].rol === 'admin') {
        adminHome();
        makingBtn();
        const compuCloseBtn = nav.children[0].children[2].children[2];
        const mobilCloseBtn = nav.children[0].children[3].children[2];

        mobilCloseBtn.addEventListener('click', async e => {
          try {
            await axios.get('/api/logout');
            window.location.pathname = '/login';
          } catch (error) {
            console.log(error);
          }
        });

        compuCloseBtn.addEventListener('click', async e => {
          try {
            await axios.get('/api/logout');
            window.location.pathname = '/login';
          } catch (error) {
            console.log(error);
          }
        });

      } else {
        userHome();
        makingBtn();
        const userCompuCloseBtn = nav.children[0].children[2].children[0];
        const userMobilCloseBtn = nav.children[0].children[3].children[0];

        userMobilCloseBtn.addEventListener('click', async e => {
          try {
            await axios.get('/api/logout');
            window.location.pathname = '/login';
          } catch (error) {
            console.log(error);
          }
        });

        userCompuCloseBtn.addEventListener('click', async e => {
          try {
            await axios.get('/api/logout');
            window.location.pathname = '/login';
          } catch (error) {
            console.log(error);
          }
        });
      }
    } catch (error) {
      navHome();
      makingBtn();
    }
  })();
// eslint-disable-next-line no-undef
}else if (window.location.pathname === '/signup/') {
  navSignup();
// eslint-disable-next-line no-undef
} else if(window.location.pathname === '/login/') {
  navLogin();
} else if (window.location.pathname === '/userServices/') {
  (async() => {
    try {
      const { data } = await axios.get('/api/isAdmin');
      if (data[0].rol === 'admin') {
        adminPrede();
        makingBtn();
      } else {
        userPrede();
        makingBtn();
      }
    } catch (error) {
      navHome();
      makingBtn();
    }
  })();
// eslint-disable-next-line no-undef
} else if (window.location.toString().includes('/userEmployed/')) {
  (async() => {
    try {
      const { data } = await axios.get('/api/isAdmin');
      if (data[0].rol === 'admin') {
        adminPrede();
        makingBtn();
      } else {
        userPrede();
        makingBtn();
      }
    } catch (error) {
      navHome();
      makingBtn();
    }
  })();
// eslint-disable-next-line no-undef
}else if (window.location.toString().includes('/schedule/')) {
  (async() => {
    try {
      const { data } = await axios.get('/api/isAdmin');
      if (data[0].rol === 'admin') {
        adminPrede();
        makingBtn();
      } else {
        userPrede();
        makingBtn();
      }
    } catch (error) {
      navHome();
      makingBtn();
    }
  })();
// eslint-disable-next-line no-undef
}else if (window.location.toString().includes('/confirm/')) {
  (async() => {
    try {
      const { data } = await axios.get('/api/isAdmin');
      if (data[0].rol === 'admin') {
        adminPrede();
        makingBtn();
      } else {
        userPrede();
        makingBtn();
      }
    } catch (error) {
      console.log(error);
    }
  })();
// eslint-disable-next-line no-undef
}else if (window.location.pathname === '/signem/') {
  (async() => {
    try {
      const { data } = await axios.get('/api/isAdmin');
      if (data[0].rol === 'admin') {
        adminPrede();
        makingBtn();
      }
    } catch (error) {
      console.log(error);
    }
  })();
// eslint-disable-next-line no-undef
}else if (window.location.pathname === '/servicess/') {
  (async() => {
    try {
      const { data } = await axios.get('/api/isAdmin');
      if (data[0].rol === 'admin') {
        adminServicess();
        makingBtn();
      }
    } catch (error) {
      console.log(error);
    }
  })();
// eslint-disable-next-line no-undef
}else if (window.location.pathname === '/datesView/') {
  (async() => {
    try {
      const { data } = await axios.get('/api/isAdmin');
      if (data[0].rol === 'admin') {
        adminDatesView();
        makingBtn();
      }
    } catch (error) {
      console.log(error);
    }
  })();
// eslint-disable-next-line no-undef
} else if (window.location.toString().includes('/employed/')) {
  (async() => {
    try {
      const { data } = await axios.get('/api/isAdmin');
      if (data[0].rol === 'admin') {
        adminPrede();
        makingBtn();
      }
    } catch (error) {
      console.log(error);
    }
  })();
// eslint-disable-next-line no-undef
}


makingBtn();