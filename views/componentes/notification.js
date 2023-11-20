const div = document.querySelector('#notification');

 export const createNotification = (isError, message) => {
  if (isError) {
    div.innerHTML = `
        <div class=" max-w-7xl  flex justify-end mx-auto px-4">
        <div class="p-4 rounded-lg bg-red-600 lg:w-4/12 font-bold w-3/6">Notificacion: ${message}</div>
        </div>
      `;
  } else {
    div.innerHTML = `
    <div class=" max-w-7xl  flex justify-end mx-auto px-4">
    <div class="p-4 rounded-lg bg-green-700 lg:w-4/12 font-bold w-3/6">Notificacion: ${message}</div>
    </div>
  `;
  }

};