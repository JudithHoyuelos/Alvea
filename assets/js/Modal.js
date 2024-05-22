import bbdd from './Conexion';

const modal = document.getElementById("root");

function informacion(resultado) {
    console.log(resultado)
    modal.textContent = resultado;
    return modal;
}

document.addEventListener('DOMContentLoaded', function() {
    // Captura el formulario
    const formulario = document.getElementById('formulario');
  
    // Verifica si el formulario existe antes de agregar el controlador de eventos
    if (formulario) {
      formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        buscarPersonaje(nombre);
        // return nombre
      });
    }
});

async function GET() {
    const prueba = await fetch(`${bbdd}/character`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
    // console.log(prueba.data)
}

const buscarPersonaje = (nombre) => {
    // Construir la URL de búsqueda
    const url = `https://rickandmortyapi.com/api/character/?name=${nombre}`;
  
    // Realizar la solicitud HTTP
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no pudo ser completada.');
        }
        return response.json();
      })
      .then(data => {
        // Procesar los datos de la respuesta
        console.log('Resultados de la búsqueda:', data.results);
        // Aquí podrías mostrar los resultados en la interfaz de usuario
        const resultado = data.results
        const datos = resultado.map(personaje => personaje.name);
        informacion(datos)
      })
      .catch(error => {
        console.error('Error al realizar la búsqueda:', error);
        // Aquí podrías manejar el error en la interfaz de usuario
      });

};

GET();
// let nombre = 'Rick Sanchez';
// buscarPersonaje(nombre);

export default informacion();