const menu = document.querySelector("#icono-menu-lateral");
const exit = document.querySelector("#exit");
const div = document.querySelector("#desplegable");
const logo = document.querySelector('#inicio');

// Añadir evento al botón del menú
menu.addEventListener('click', onClickMenu);

// Añadir evento al botón de salida
exit.addEventListener('click', onClickExit);

// Evento para cerrar el menú al hacer clic en cualquier parte de la página
document.addEventListener('click', (e) => {
    if (div.style.display === '' && !div.contains(e.target) && e.target !== menu) {
        div.style.display = 'none';
        menu.style.display = '';
    }
});

// Función para abrir el menú
function onClickMenu(e) {
    // e.stopPropagation(); // Evitar que el evento se propague y cierre el menú inmediatamente
    div.style.display = '';
    menu.style.display = 'none';
}

// Función para cerrar el menú
function onClickExit(e) {
    // e.stopPropagation(); // Evitar que el evento se propague y vuelva a abrir el menú
    div.style.display = 'none';
    menu.style.display = '';
}