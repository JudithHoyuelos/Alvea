import axios from 'axios';
import bbdd from './Conexion';

const modal = document.getElementById("root");

function informacion(nombre, estado, localizacion) {
  console.log(nombre);
  console.log(estado);
  console.log(localizacion);
  // Crea nuevos elementos para cada pieza de información
  const nombreElement = document.createElement('h1');
  nombreElement.textContent = `Nombre: ${nombre}`;

  const estadoElement = document.createElement('p');
  estadoElement.textContent = `Estado: ${estado}`;

  const localizacionElement = document.createElement('p');
  localizacionElement.textContent = `Localización: ${localizacion}`;

  const moneda = document.createElement('img');
  moneda.src = "assets/img/monedas-oro-1-oz-maple-leaf-1.png"
  moneda.alt = "moneda"

  const espada = document.createElement('img');
  espada.src = "assets/img/espadita.png"
  espada.alt = "espada"

  const cubo = document.createElement('img');
  cubo.src = "assets/img/cubo.png"
  cubo.alt = "cubo"

  if (nombre == "Rick Sanchez") {
    modal.appendChild(moneda);
  } else if (nombre == "Morty Smith") {
    modal.appendChild(espada);
  } else if (nombre == "Summer Smith") {
    modal.appendChild(cubo);
  }

  // Añade los elementos al modal
  modal.appendChild(nombreElement);
  modal.appendChild(estadoElement);
  modal.appendChild(localizacionElement);
  return modal;
}

// Función para buscar un personaje por nombre
const buscarPersonaje = (nombre) => {
  console.log('Buscando personaje:', nombre); // Verifica que la función se llama con el nombre correcto
  const url = `${bbdd}/character/?name=${nombre}`;
  console.log('URL:', url); // Verifica que la URL se construye correctamente

  axios.get(url)
    .then(response => {
      const data = response.data;
      if (data.results.length > 0) {
        // const nombre = data.results.map(personaje => personaje.name).join(', ');
        // const estado = data.results.map(personaje => personaje.status).join(', ');
        // const localizacion = data.results.map(personaje => personaje.location.name).join(', ');
        // informacion(nombre, estado, localizacion);
        const primerPersonaje = data.results[0];
        const nombre = primerPersonaje.name;
        const estado = primerPersonaje.status;
        const localizacion = primerPersonaje.location.name;
        informacion(nombre, estado, localizacion);
      } else {
        informacion('No se encontraron resultados.');
      }
    })
    .catch(error => {
      console.error('Error al realizar la búsqueda:', error);
      informacion('Error al realizar la búsqueda.');
    });
};

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');

  const formulario = document.getElementById('formulario');
  console.log(formulario);

  if (formulario) {
    console.log('Formulario encontrado');
    formulario.addEventListener('submit', function (event) {
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

document.addEventListener('DOMContentLoaded', function () {
  const nombre = localStorage.getItem('nombrePersonaje');
  if (nombre) {
    buscarPersonaje(nombre);
  } else {
    informacion('No se proporcionó ningún nombre.');
  }
});

export default informacion;