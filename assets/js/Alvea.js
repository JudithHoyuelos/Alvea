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