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
<div class="hidden md:flex row text-white font-extralight">
<a href="/signup/" class=" bg-rose-700 py-2 px-2 hover:bg-rose-950 rounded-lg transition ease-in-out">Registrarse</a>
</div> 

<div class="bg-rose-950/80 fixed top-16 left-0 right-0 h-10 hidden items-center justify-center flex-col">
<a href="/signup/" class=" text-white h-9 hover:bg-rose-950 flex justify-center align-middle fixed left-0 right-0 transition ease-in-out">Registrarse</a>
</div>
</div>
    `;
};

// eslint-disable-next-line no-undef
if (window.location.pathname === '/') {
  navHome();
}

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

