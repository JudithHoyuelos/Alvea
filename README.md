# Alvea
Pruebas para la Alvea


### Iniciar el proyecto 
Para arrancar el programa hay que poner en la consola del editor el comando 'npx vite', hay que asegurarse que esta dentro de la carpeta correcta del proyecto, sino no funcionará. 

En la consola aparecerá un link con el localhost, el cuál habrá que pinchar.

Lo que se abrirá es el index que es la parte informativa, por lo que si se quiere pasar al login, en la ruta del navegador hay que cambiarla a 'login.html'.

### Documentos: donde se localiza cada cosa
Aqui explicare donde se puede encontrar cada parte del proyeto y las diferentes carpetas donde se encuentra. Esto en diferentes apartados, donde se iran detallando que parte del funcionamiento, estructura o estilo se encuentra cada cosa. Esto para que cualquiera pueda ubicarse.


#### HTML: estructura
Hay 5 HTML diferentes, en estos estan alojados la estrutura de diferentes partes. Empezamos por la parte informativa de la empresa, la estructura se encuentra en el 'index.html', dentro de este hay comentarios de que parte es cual.

Pasamos a la parte del login, esta se encuentra en el 'login.html'. El cual de momento esta conectado con la API de RICK Y MORTY, el unico campo que va es el del nombre. Ademas de que no tiene ningun CSS asociado.

Una vez que el login esta realizado con exito, para a la alvea donde se podra mover y sera personalizada con cada usuario. Esto se encuentra en 'alvea.html', aunque realmente ahi solamente esta enlazado el js y el CSS, aparte del div que contine la infromacion de prueba.

La parte para ponerse en contacto con la empresa esta alojada en 'contacto.html'. Hay se encuentra toda la logistica del formulario, actualmente no esta en funcionamiento, por lo que no se envia a ningun lado la informacion y tampoco se recoge.

Por ultimo tenemos la parte del blog, la cual esta alojada en 'blog.html'. En ella se encuentra toda la estructura, tanto de los puntos, como de las esntradas del blog. A parte tambien esta los dos menus de navegacion, aunque el lateral actualmente no funciona.

#### CSS: diseño
El diseño de la pagina web esta dividido en 3 hojas de estilos diferentes. Las cuales estan dentro de la carpeta 'assets', que a su vez estan dentro de la carpeta 'css'. La principal es 'modal.css', esta contiene todo el diseño de la paguina informativa y de la parte de despues del login. Dentro de esta hay comentatarios para diferenciar las distintas partes. 

Pasamos a la hoja de estilos de contacto, todo referente a esa parte se encuentra en 'contacto.css', aunque a su vez tambien se enlazara la principal para el uso de variables y demas.

Por ultimo tendremos la pagina del blog, cuenta con su propia hoja de estilos como el contacto, la cual es 'blog.css'. En esta todo el estilo del blog, aunque tambien esta enlazada la global para poder hacer uso de sus variables y que pese menos.

#### JavaScrip: funcionamiento
Para todo el funcionamiento y las escenas que son en 3D, lo hemso dividido en diferentes archivos js. Estos se encuentras ubicados en la carpeta assets', que a su vez estan dentro de la carpeta 'js'. Actualmente cuenta con 14 archivos diferentes, los cuales seguramente sean mas en un futuro. Ya que son muchos enumerare los menos importantes diciendo que contienen, mientras que los que tienen la mayor logica los explicare a detalle.

- three.js: este solo contiene el import de la libreria de THREE.JS y un export de la misma 
- Screen.js: este contiene la creacion de la escena 3D y un export de la misma 
- Render.js: este contiene el renderizador y un export del mismo 
- Plane.js: contiene una cuadricuala que nos sireve para guiarnos, la cual se quitara, y un export de la misma 
- Luzambiental.js: contiene todas las lices que estamos utilizando hasta el momento y un export de las mismas
- Conexion.js: contiene la constante para conectarnos a al bbdd y un export de la misma 
- Camera2.js: contiene la configuracion de la camara y la creacion de esta, la cual usamos en la parte infromativa, tambien las cordenadas de los puntos y hacia donde tiene que mirar la camara, y un export de la misma 
- Camera.js: contiene la configuracion de la camara y la creacion de esta, la cual usamos en la parte de la alvea  y un export de la misma
- Alvea.js: es un archivo que contine la manera de hacer la busqueda en la base de datos usando fecht
- Menus.js: contiene a parte la funcionalidad del menu lateral y del logo para el blog y el contacto
- Blog.js: contiene toda la funcionalidad del blog, la cual son todo bucles 

Hasta ahi estarian los mas faciles y los que predeciblemente no haya que tocar, ahora vamos con los 4 que mas logica contienen y por ende los que haya que tocar mas. 

Empezaremos por el que menos tiene y acabaremos por el que mas tiene. Asi que el primero es Modal.js. Contiene la logica de buscar y escribir en el modal los datos de la persona que se ha registrado. Este tiene 2 funciones y 2 eventos. El primer evento contiene la logica para recoger los datos del formulario y se ejecuta una vez que se cargue el DOM completamente, tambien te redericiona a la pagina de la alvea, todo esto una vez que se recoge el nombre y se guarda en el LocalStore. El segundo evento es el que recoge el nombre del LocalStore y si lo encuentra llama a la funcion 'bucarPersonaje' con el nombre. Esta funcion se encarga, mediante la libreria de 'axio' de hacer la busqueda del personaje y obtener la informacion que se necesite y una vez que la tiene llama con los datos a la funcion 'informacion'. Esta ultima funcion es la que se exporta y la que crea todos los elementos que se van a mostrar con los diferentes datos del personaje que le hemos pasado. 

El siguente es index.js, este contiene la escena 3D de la alvea completa. Por lo que esta el como cargar el modelo de la alvea y tambien los controles tanto para hacer zomm como para moverse con el teclado y el raton dentro de ella. Las partes comentadas son de un intento fallido de cargar un objeto 3D diferente. Tambien esta importada la funcion de 'informacion', esto se debe a que realmente se llama cuanso se carga el modelo para poder actualizar la informacion del usuario.

Seguimos con FuncionCss.js, el cual contine toda la logica de los diferentes carruseles que hay en la pagina informativa. Esta dividido en 1 funcion y dos eventos. Tenemos la funcion 'updateLabels', la cual controla toda al parte de los textos que tienen que ir cambiando, por lo cual es la que tiene un bucle para cada una. Despues tenemos una funcion para todos los carruseles normales, aqui se controla los indicadores de la paguina y la funcionalidad de las flechas, esto gracias a un bucle que recorre todo lo que esta dentro de una clase en concreto. Al tener dos tipos de carruseles diferentes, tambien tenemos otro evento que es el que controla exclusivamente el funcionamiento del comportamiento del slider y sus flechas, que a pesar de que son las mismas que las demas tienen que tener otro funcionamiento diferente por el tipo de carrusel. Cuenta con comentarios dentro para identificar que parte se esta tratando en cada una de ellas. 

Por ultimo tenemos el idexAlvearium.js, este contiene todo la funcionalidad y la escena de la parte infromativa de la empresa. Dentro hay comentarios de para que sireve cada funcion, tambien estan todos los import que se necesitan para que funcionen. Se puede decir que para los dos menus, el logo, los hotpoints, la funcionalidad de cada hotpoint y el movimiento de la camara hya una funcion diferente. A parte de que hay funciones como la que tenemos en el 'index.js' que desapareceran, ya que solo la usamos para poder mover las cosas que necesitamos. En todas las funciones hay un comentario para identificar para que sirve cada funcion en especifico. Lo primero que podemos encontrar es todo el funcionamiento del menu lateral y el exit para cerrarlo, aunque tambien hay un evento para poder cerrarlo si haces click en cualquier parte de la pantalla. Seguidamente encontramos la funcionalidad de mover los puntos cada vez que aparece el modal donde esta la informacion de cada punto. El siguiente es el caso concreto del funcionamiento de un punto en especifico que es el de caso de usos. La siguiente funcion es la de cargar el modelo 3D, seguidamente tenemos la funcion que concontrola la aparicion del modal cuando se hace click en el hotpoint correspondiente, la cual tambien almacena las posiciones originales de los tres puntos que se muestran. Pasamos a la funcion del logo, ya que este cuando se hace click se vuelven a mostrar los 4 primero puntos del principio y la camara vuelve a la posicion inical, por lo que controla todo eso incluyendo el caso de uso. Nos acercamso al final solo nos quedan dos funciones mas, puesto que hay codigo que no se utilizara mas adelante. Asi que pasamos a la funcion que contola que pasa cuando se hace click en los 4 primeros puntos, esta controla el movimiento de la camara hacia el punto donde tiene que ir, el que se oculte los anteriores puntos y se muestra el los nuevos, incluyendo en lo que pasa con los cados de uso, que se muestre el logo y por ultimo que pasa si se le hace click en el logo. Por lo que es una funcion muy importante que controla la mayor parte del funcionamiento. Por ultimo tenemos la funcion que crea los puntos, dentro de esta hay otra funcion que es para controlar la posiscion de los puntos. Esta se encarga de crear los puntos, agruparlos y pasarle la infromacion a als demas funciones, aparte de tambien el que se muestre los modales con la informacion pertinente y por ultimo tambien el como es la navegfacion con el menu lateral. Ahora si que si por ultimo tenemso un evento que llama a esta funcion cuando se ha cargado por completo el DOM.

### Empaquetar el proyecto
Para poder servir la paguina web y que funcione en un servidor hya que empaquetarlo. Todo esto lo hacemos mediante el Webpack, esto se puede hacer manualmente o automaticamente en el repositorio de git. Para la manera manual necesitamos el archivo 'webpack.config.js', en el cual vamosa a especificar que archivo uqeremos empaquetar, como se llamara el archivo de salida y en que carpeta estara, aparte tambien que vamos a especificar las reglas que va a seguir. Como que se ignorara la carpeta de 'node_modules', se buscara todos los archivos js y la configuracion de Babel para poder traspilar los mudulos ES6. Por otro lado necesitamos tener un script en el archivo 'package.json', en el cual le vamos a asignar lo que va a ser el comando 'build', que basicamente usara el empaquetador para lanzar el archivo de configuracion que hemos creado antes. Una vez hecho todo esto se creara el archivo y solo tendremos que cambiar las rutas en nuestros archivos para poderlo usarlos sin problemas. 


### Aclaraciones 
Esta paguina esta en constante cambio, por lo se intenta mantener la documentacion al dia. Pero hay veces uqe se crean documentes o se hacen cambios que a lo mejor no se refleja en la documentacion. 