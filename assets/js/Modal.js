import bbdd from './Conexion';

const modal = document.getElementById("root");

function informacion(resultado) {
  console.log(resultado)
  modal.textContent = resultado;
  return modal;
}

// Función para buscar un personaje por nombre
const buscarPersonaje = (nombre) => {
  console.log('Buscando personaje:', nombre); // Verifica que la función se llama con el nombre correcto
  const url = `${bbdd}/character/?name=${nombre}`;
  console.log('URL:', url); // Verifica que la URL se construye correctamente

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('La solicitud no pudo ser completada.');
          }
          return response.json();
      })
      .then(data => {
          console.log('Resultados de la búsqueda:', data.results);
          const resultado = data.results.map(personaje => personaje.name).join(', ');
          informacion(resultado);
      })
      .catch(error => {
          console.error('Error al realizar la búsqueda:', error);
          informacion('No se encontraron resultados.');
      });
};

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');

  const formulario = document.getElementById('formulario');
  console.log(formulario);

  if (formulario) {
      console.log('Formulario encontrado');
      formulario.addEventListener('submit', function(event) {
          event.preventDefault();
          var nombre = document.getElementById('name').value;
          console.log('Nombre:', nombre); // Verifica que el nombre se está recogiendo
          // Guardar el nombre en localStorage
          localStorage.setItem('nombrePersonaje', nombre);

          // Redirigir a alvea.html
          window.location.href = 'alvea.html';
          // buscarPersonaje(nombre);
      });
  } else {
      console.log('Formulario no encontrado');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const nombre = localStorage.getItem('nombrePersonaje');
  if (nombre) {
      buscarPersonaje(nombre);
  } else {
      informacion('No se proporcionó ningún nombre.');
  }
});

async function GET() {
    const prueba = await fetch(`${bbdd}/character`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
    // console.log(prueba.data)
}

GET();
// let nombre = 'Rick Sanchez';
// buscarPersonaje(nombre);

export default informacion;