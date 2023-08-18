
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// se añadio el punto para seleccionar la clase
const $n = document.querySelector('.name'); 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// faltaba el asyn antes de function
async function displayUser(username) {
  $n.textContent = 'cargando...';
  
    const response = await fetch(`${usersEndpoint}/${username}`);
    // se añade la variable data y se convierte la respuesta a JSON
    const data = await response.json(); 
    console.log(data);
    // se cambian las comillas simples
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  }

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);