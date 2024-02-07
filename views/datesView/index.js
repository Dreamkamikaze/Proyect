/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const tabla = document.querySelector('#tabla');

(async() => {
  const { data } = await axios.get('/api/datesView');
  data.forEach(element => {
    const tr = document.createElement('tr');
    tr.classList.add('text-lg', 'h-16', 'bg-slate-100');
    tr.id = element.id;
    tr.innerHTML = ` 
    <td>${element.user.name}</td>
    <td>${element.email}</td>
    <td class="p-7">${element.serviemplo}</td>
    <td>${element.time}</td>
    <td>${element.payment}</td>
    <td>${element.price}</td>
    <td class="bg-slate-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="b w-10 h-10 cursor-pointer stroke-green-800 hover:stroke-white hover:bg-green-800 rounded-full transition easy-in-out">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>                  
    </td>
    `;
    tabla.append(tr);
  });
  tabla.addEventListener('click', async e => {
    const b = e.target.closest('.b');
    if (b) {
      await axios.delete(`/api/dates/${b.parentElement.parentElement.id}`);
      b.parentElement.parentElement.remove();
    }
  });
})();

