[Read it in English](/README.md)

# Portafolio

Hola a todos👋🏼👋🏼👋🏼  
Este es el proyecto para mi portafolio, en donde quiero presentar todos mis proyectos, ejercicios, hobbies y más. Básicamente es mi blog personal pero más formal.

Desarrollado de forma que no necesito actualizar el código para agregar más contenido, esto debido a que el contenido se obtiene madiante una consulta a un Gist de GitHub. El portafolio lee esa información y la muestra. Obviamente, si quiero añadir mas secciones o funciones tendré que mejorar el proyecto, pero para añadir posts, no será necesario.

### Tecnologías usadas:

**-React:** La librería de JavaScript que acelera el desarrollo Frontend unificando HTML y JavaScript a través de su formato de componentes.

**-TypeScript:** Un lenguaje de programación extendido a partir de JavaScript, permitiendo un mayor control sobre las variables y tipos de datos.

**-TailwindCSS:** Un framework CSS que proporciona una combinación de clases (como Bootstrap) y propiedades CSS personalizadas, con la particularidad de que podemos compilarlo para crear una hoja de estilos personalizada con solo los estilos necesarios, disminuyendo considerablemente el peso de nuestro proyecto para su despliegue/producción.

## ¿Quieres probarlo?

### Obtén el repositorio para ti mism@

Primero que nada necesitas clonar el repositorio:
```bash
$ git clone https://github.com/fgamester/portfolio.git
```
Luego ejecuta el comando para instalar los paquetes:
```bash
$ npm install
```
Adicionalmente tendrás que establecer una variable de entorno:
```
VITE_DATA_URL=https://gist.githubusercontent.com/fgamester/d7819ab8dcd914121e12f757d5af7a43/raw/data_example.json
```
Este es un gist de ejemplo que tiene esencialmente el modelo de datos que el proyecto puede manejar. Trataré de desarrollar un proyecto que pueda actualizar ese archivo o quizás subirlo a una base de datos como MongoDB, lo tendré en cuenta.

Y por último ejecuta el servidor localmente con el siguiente comando:
```bash
$ npm run dev
```
El proyecto estará corriendo en el puerto 5173 por defecto, así que tendrás que escribir [`localhost:5173`](http://localhost:5173) en tu navegador o hacer click en el enlace marcado. Si el puerto 5173 ya está en uso, el comando usará el siguiente puerto disponible, como 5174, y así sucesivamente.

### Ve y pruébalo desplegado en Netlify

Solo presiona el siguiente enlace 👉🏻[Presioname](https://fgamester.netlify.app)👈🏻

### Prúebalo con Docker

Si eres un usuario habitual de Docker o simplemente quieres probarlo con esta increíble herramienta, aquí tienes cómo hacerlo.

Primero que nada, descarga la imagen con uno de estos comandos de Docker:
```bash
$ docker pull fgamester/portfolio:dev1.0.0
```
```bash
$ docker pull fgamester/portfolio
```
>*El primero es una versión de desarrollo, el cual te permite definir una variable de entorno que indica a que URL queremos realizar la consulta de los datos. El segundo es la versión construida, el cual es más fácil de ejecutar porque ya está incluida la variable de entorno.*

Ejecuta un contenedor con la misma imagen:
```bash
$ docker run --name <nombre-contenedor> -p <5173:5173> -e VITE_DATA_URL=<https://gist.githubusercontent.com/fgamester/d7819ab8dcd914121e12f757d5af7a43/raw/data_example.json> -d fgamester/portfolio:dev1.0.0
```
```bash
$ docker run --name <nombre-contenedor> -p <3000:3000> -d fgamester/portfolio
```
>*Igual que antes, hay dos opciones: en desarrollo y construido, recuerda usar el mismo que elegiste antes.*

#### Sobre este comando:

`--name`: Nos permite elegir un nombre para nuestro contenedor, lo cual es muy recomandado para un fácil manejo.

`container-name`: Si utilizas `--name` como opción tendrás que escribir un nombre junto a este, usa uno que puedas recordar fácilmente.

`-p`: Requerido, lo necesitamos para poder especificar un puerto al que podremos conectarnos a nuestro contenedor.

`3000:3000 | 5173:5173`: (desarrollo y construido respectivamente) Requerido igual que `-p`. El primer puerto es por el cual nos podremos conectar por localhost, el número a usar es opcional, solo asegúrate de que esté disponible (no está en uso por otra aplicación). El segundo es el puerto interno del contenedor, siempre será el mismo, no lo cambies.

`-e`: Este es esencialmente opcional. Nos permite establecer variables de entorno, el proyecto está configurado para usar opcionalmente una, en caso de no establecer un valor usará la información por defecto del example.json contenido en el proyecto.

`VITE_DATA_URL=...`: Si eliges definir una variable de entorno, puedes hacerlo después del símbolo `=` (sin espacios en blanco). El valor mostrado arriba es un Gist público de GitHub con un ejemplo de la estructura de datos. No establecer esta variable hará que el proyecto use los datos por defecto del archivo example.json contenido en el proyecto.

`-d`: Opcional, ejecuta el contenedor en modo `detach` (en segundo plano). En este modo la única forma de detener el contenedor es mediante el comando del terminal o en la interfaz de Docker. No usarlo hará que el contenedor se detenga cuando se cierre el terminal.

`fgamester/portfolio:dev1.0.0 | fgamester/portfolio`: Este es el nombre de la imagen que descargamos antes, no lo cambies.

Después de esto la terminal nos responderá con un ID del container creado. Ahora puede visitar [`localhost:3000`](http://localhost:3000) o el puerto que hayas especificado para exponer el contenedor.

Cuando termines de usar el contenedor puedes detenerlo con el siguiente comando:
```bash
$ docker stop <container-name|container-id>
```
>*Aquí puedes detener el contenedor usando el ID o el nombre, es recomendado este último si especificaste uno.*