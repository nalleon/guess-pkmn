<div align="justify">

# Adivina el pokémon 

> ✒️ __Autor__:  Nabil L.A. ([@nalleon](https://github.com/nalleon)) 

Repositorio dedicado a un pequeño proyecto del módulo de DAD acerca del juego de adividar un pokémon basado en su silueta.

<div align="center">
<img src="./img/cover.png">
</div>

## Índice
- [Reto 01](#reto-01)
  - [Configuración de Vue](#configuración-vue)
  - [Limpieza del proyecto](#limpieza-del-proyecto)
  - [Implementación de Tailwind CSS](#implementación-de-tailwind-css)
- [Reto 02](#reto-02)
  - [Creación de la estructura de carpetas](#creación-de-estructura-de-carpetas)
  - [Definición de la estructura básica del componente](#estructura-básica-del-componente)
- [Reto 03](#reto-03)
  - [Programando el componente PokemonPicture.vue (básico)](#programando-el-componente-pokemonpicturevue-básico)
  - [Programando el componente PokemonOptions.vue (básico)](#programando-el-componente-pokemonoptionsvue-básico)
- [Reto 04](#reto-04)
  - [Creación de nuevos componentes](#creacion-de-nuevos-componentes)
  - [Instalando axios](#instalando-axios)
  - [Tipando la petición a la api](#tipando-la-petición-a-la-api)
- [Reto 05](#reto-05)
  - [Modificando la petición a la API](#modificando-la-petición-a-la-api)
- [Reto 06](#reto-06)
  - [Implementación de propiedades reactivas](#implementación-de-propiedades-reactivas)
- [Extra](#extra)
  - [Reinicio del juego](#reinicio-del-juego)



<div align=center>
  <img src="./img/resources/larvitar.gif" width="100">
  <img src="./img/resources/pupitar.gif" width="100">
  <img src="./img/resources/tyranitar.gif" width="110">
</div>

### Reto 01

#### Configuración Vue

En primer lugar configuraremos nuestro proyecto de Vue. En la siguiente imagen tenemos la configuración seleccionada:



<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r1-01.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">


<br>

> ❓ ¿Para qué sirve Vue Router, Pinia, Vitest, ESLint y Prettier?

-  Vue Router: Una biblioteca oficial de Vue.js que nos permite tanto definir como manejar diferentes rutas, facilitando así la creacion de aplicaciones de aplicaciones de una sola página (SPA).

- Pinia: Una librería que se encarga de eliminar la complejidad.

- Vitest: Un framework de testing moderno para typescript.

- ESLint: Un plugin para comprobar los template y script de los archivos .vue.

- Prettier: Un formateador automático de código.

***

<br>

Tras esto realizaremos los comandos mencionados anteriormente para comprobar que nuestra aplicación haya sido creada correctamente.

```bash
  npm install
  npm run format
  npm run dev
```
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">
<div align="center" border="1px">
<img src="./img/r1-02-01.png" width="700">
<img src="./img/r1-02-02.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">



<br>

> ❓ ¿Qué es Composition API y en qué se diferencia de Option API en VueJS?

Composition API es la nueva forma de escribir componentes en Vue. Este se destaca por organizar la lógica del componente en por funcionalidad en lugar de por opciones especificas. A destacar:

- Usa la función setup para definir el estado reactivo, funciones, y
computados.

- Permite tanto importar y como reutilizar lógica fácilmente.

- Es ideal para aplicaciones grandes tanto como para componentes con cierto grado de complejidad.

- Enfoque a la utilización de hooks ofreciendo un mayor control al desarrollador.

Las mayores diferencias con Option API es que esta última se enfoca más a componentes pequeños.

> ❓ ¿Qué es screaming architecture y qué ventajas tiene?

Este es un patron de arquitectura que se enfoca en mantener el código organizado alrededor de los objetos del negocio en lugar de seguir la estructura convencional de carpetas como components / reducers / actions / api, etc

***

<br>


#### Limpieza del proyecto


Seguidamente borraremos todos los archivos que no vamos utilizar en el proyecto. En primer lugar dejeramos la estructura básica en App.vue.


> ❓ ¿Cómo le indicamos a Vue que vamos a usar TypeScript?

Se lo podemos indicar añadiendo lang="ts" en el script.

```ts
<script setup lang="ts">
```


***

Tras esto, añaderemos el mensaje de "Hello World" a App.vue y procederemos a elimiar de assets el estilo base.css junto con el logo.svg y renombraremos main.css a assets.css (además de actualizar o eliminar los imports que nos generen problemas con nuestros cambios).

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r1-03-02.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Para finalizar por este punto, se nos mostrará en el navegador de esta manera:

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r1-03-03.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

#### Implementación de Tailwind CSS


Continuando implemtaremos el framework de CSS [Tailwind](https://tailwindcss.com/). Para ello realizaremos las siguientes instalaciones:

- Para instalar el frameworj junto con sus dependencias y generar los archivos de configuracion.js:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```



Ahora nos dedicaremos a a configurar el archivo "tailwind.config.js" para poder utilizar el framework en nuestros componentes.

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r1-04-01.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Una vez establecida la configuración, añadiremos las etiquetas de tailwind en index.css (un nuevo archivo que crearemos en el directorio src):


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r1-04-02.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Finalmente añadiremos unos estilos de tailwind a al etiqueta h1 pa¶æ comprobar la funcionalidad.

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r1-04-03.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

<div align=center>
  <img src="./img/resources/growlithe.gif" width="100">
  <img src="./img/resources/arcanine.gif" width="100">
</div>


### Reto 02

#### Creación de estructura de carpetas

Para este reto lo primero que debemos hacere es eliminar la carpeta original de components para remplazarla con nuestro equivalente, ya que, esta no cumplía con la screaming architecture. 

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">


<div align="center" border="1px">
<img src="./img/r2-01-01.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Tras esto, crearemos una nueva carpeta llamada modules y dentro de este otra llamada pokemon. Observamos como la ruta final sería src/modules/pokemon. 

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r2-01-02.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

> ❓ ¿Qué es un composable en VueJS y cual es la nomenclatura común que se utiliza en los ficheros que contiene?

Composable es una carácteristica nacida con Vue 3, la cual permite a los desarrolladores escribir código tanto conciso como claro. 

Seguidamente crearemos la carpeta components y ahí a su vez crearemos carpeta views. En esta última, crearemos el componente PokemonGame.vue.


> ❓ ¿Cuál crees que será la lógica que irá dentro de este archivo?

Dado que se llama PokemonGame, podemos afirmar que se va a encargar de mostrar nuestro juego al cliente.

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r2-01-03.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

#### Estructura básica del componente

Tras generar la estructura básica del componente con la extension Vue3 Composition Snippets y el snippet vcc para definir que es un componente de composition. Seguidamente añadiremos la siguiente etiqueta HTML y con el siguiente contenido:


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r2-01-00.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***


> ❓ ¿Para qué sirven las clases que hemos añadido?

Hemos añadidos clases de Tailwind para darle unos estilos a nuestra seccción.


Para ver nuestros cambios en la aplicación debemos de actualizar el App.vue con nuestro componente:

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r2-01-00.5.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r2-01-04.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

> ❓ Utilizando una directiva de VueJS, ¿cómo ocultaríamos esta sección por completo?

La podemos ocultar de varias maneras, pero en este caso hemos optado por utilizar v-show.

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r2-01-045.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Tras esto, añadiremos una nueva seccion de con un titulo h1 y donde añadiremos nuestros nuevos componentes.

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r2-01-075.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

- Componentes:


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r2-01-095.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

En cuanto a la lógica de los componentes, podemos afirmar que PokemonPicture se encargara de mostrar la imagen oscurecidad y revelada del pokemon durante el juego, mientras que, PokemonOptions será para el manejo de las opciones de los nombres.

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r2-01-05.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/resources/totodile.gif" width="90">
  <img src="./img/resources/croconaw.gif" width="100">
  <img src="./img/resources/feraligatr.gif" width="100">
</div>

### Reto 03

### Programando el componente PokemonPicture.vue (básico)

Lo primero que haremos es importar la imagen de un pokemon desde la pokeapi. En este caso hemos escogido al pokemon 248, Tyranitar. Ya que aún no estamos trabajando con axios para las peticiones a la api, simplemente añadiremos la imagen.


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r3-01-00.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r3-01-01.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

Ya que, para la lógica del juego no tiene sentido ver el pokemon como tal, añadiremos unos estilos con TailwindCSS. Utilizaremos las clases: brightness-0 y h-[200px].

> ❓ ¿Para qué sirve?


brightness-0 es para bajarle el brillo al 0 y volver la imagen negra, mientras que, h-[200px] es para darle una altura a la imagen de 200px.

Tras esto, nuestro componente se verá de la siguiente forma:

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r3-01-02.png" width="700">
</div>
<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>


### Programando el componente PokemonOptions.vue (básico)

En cuanto al componente PokemonOptions crearemos una lista con 4 botones en cada elemento iniciales:

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r3-02-01.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>


Una vez realizado, añadiremos unos estilos a los botones de la lista:


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r3-02-015.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r3-02-02.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align="center">
  <img src="./img/resources/murkrow.gif" width="90">
  <img src="./img/resources/crobat.gif" width="100">
  <img src="./img/resources/skarmory.gif" width="100">
</div>

<br>

### Reto 04

#### Creacion de nuevos componentes

En primer lugar, crearemos el componente usePokemonGame.ts donde colocaremos la lógica de nuestra aplicación. Seguidamente, crearemos un enum para los estados del juego la cual guardaremos en la carpeta interfaz. 

Además, crearemos el index.ts

> ❓ ¿A qué nos referimos con este término en programación y cuáles son sus ventajas? 

Con este nos referimos, a que tenemos un archivo que importa varias módulos para mayor limpieza y compactación del proyecto.


Tras esto, añadiremos al archivo usePokemonGame.ts la referencia del estado del juego.

> ❓ ¿Qué es lo que estamos haciendo con el código hasta ahora?

Únicamente hemos creado una referencia del estado del juego la cual podemos acceder en cualquier parte.


#### Instalando axios

Seguidamente, conectaremos la aplicación a la PokeApi. Para ello vamos a utilizar axios.

> ❓ ¿Qué es Axios? ¿Lo has usado antes?

Axios es un cliente HTTP simple que se basa en promesas tanto navegador como para node. En este curso lo hemos utilizado antes también con la PokeApi en otros módulos.


Continuando, instalaremos axios así como crear el archivo pokemonApi.ts

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r4-01-00.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

Ahora, implementaremos una llamada a la api en usePokemonGame.ts y comprobaremos por medio de la consola el corrector funcionamiento:

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r4-01-01.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

#### Tipando la petición a la api

Una vez comprobado esto, crearemos un type para filtrar los datos que recibimos a los que nos son de interes. Para ello utilizaremos la extension Paste JSON as Code en VSCode. Creando así este type y actualizando el getPokemon();

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align="center" border="1px">
<img src="./img/r4-01-015.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<br>

<div align=center>
  <img src="./img/resources/togepi.gif" width="90">
  <img src="./img/resources/togetic.gif" width="90">
</div>

### Reto 05

#### Modificando la petición a la API

Lo primero que haremos para cumplir este reto es modificar el método getPokemon en usePokemonGame.ts. Para ellos crearemos una interfaz para los pokémon:


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r5-01-00.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">


La aplicación de esta a getPokemon se hará de la siguiente manera, además crearremos un type auxiliar para tipar el recorrido de cada elemento del array.


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r5-01-01.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">


> ❓ ¿Qué es lo que estamos haciendo? ¿Para qué sirve la línea de código: const id = url[url.length - 2] ?? 0;?

Simplemente estamos mappeando los elementos que hemos recogido con nuestra peticion a la api para asignarlos con el type que queremos. Respondiendo a la segunda pregunta, únicamente estamos obteniendo el id/numero de la pokedex del pokemon, ya que al final de la url lo podemos encontrar. Estamos cortando en la última posición del array dividido por '/' y cogiendo el número, en el caso de que no lo encontraramos le asignariamos el valor 0.


Seguidamente, vamos a modificar onMounted para recibir la lista de Pokémon:

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r5-01-02.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r5-01-03.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Finalmente por parte de este reto, vamos a implementar una función para poder obtener los pokemon en un orden aleatorio. 


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r5-01-04.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r5-01-05.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

<div align="center">
  <img src="./img/resources/abra.gif" width="90">
  <img src="./img/resources/kadabra.gif" width="100">
  <img src="./img/resources/alakazam.gif" width="100">
</div>

### Reto 06

#### Implementación de propiedades reactivas

Para llevar a cabo este último reto comenzaremos por determinar varias propiedades computadas que serán esenciales para el juego (como por ejemplo cuando la página aún está cargando).

> ❓ ¿Qué es una propiedad computada?

Una propiedad computada en Vue es una propiedad reactiva que se calcula automáticamente en función de otras variables reactivas. Se usa cuando necesitas derivar un valor basado en cambios de estado, sin tener que actualizarlo manualmente. 

Seguidamente, en usePokemonGame.ts crearemos una llama isLoading para manejar la carga de nuestra página.

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r6-01-01.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Tras esto lo podemos añadir a la condición v-if en el componente PokemonGame.vue. Además, añadiremos una promesa a onMounted() con un timeout para comprobar que efectivamente la propiedad conmutada esta haciendo su función correctamente.

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r6-01-03.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r6-01-02.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***


Ahora vamos a crear otra propiedad reactiva llamada pokemonOptions, la cual se encargará de mostrar las 4 posibles opciones de diferentes pokemon a elegir. Para ello crearemos una nueva función para manejarlas:


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r6-01-04.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

> ❓ ¿Cómo funciona este fragmento de código?

El código anterior se encarga de segmentar en un nuevo array las opciones de los pokemon que van a salir cómo posibles opciones. 


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r6-01-05.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***


Por otro lado ahora debemos de determinar cual es el pokémon correcto. Para ello crearemos un nuevo método que se encargue de seleccionarlo:

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r6-01-06.png" width="700">
</div>


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Tras esto comprobaremos en el navegador y su consola que los datos del pokemon se muestran y que, además, este no es el primero del array:

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r6-01-07.png" width="700">
</div>


<div align=center>
  <img src="./img/r6-01-08.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Una vez comprobado el punto anterios, ahora debemos de conseguir la correspondiente foto del pokémon, para ello haremos uso de las props para enviarle al componente hijo (PokemonPicture) el id del pokemon seleccionado.



<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r6-01-10.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>


<div align=center>
  <img src="./img/r6-01-09.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Tras esto, vamos a abordar el cmabiar la foto del pokemon si se ha acertado, para ello enviaremos por props otro atributo llamado showPokemon, el cual será un boolean que podrá o no aparecer.


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<div align=center>
  <img src="./img/r6-01-11.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-12.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-13.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Por otro lado nos queda actualizar los botones del componente PokemonOptions para añadirle los nombre de los pokémon. Para ello volveremos a utilizar las props para enviar el array de opciones el cuál simplemente recorreremos con un v-for.

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-15.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<br>

<div align=center>
  <img src="./img/r6-01-14.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

Seguidamente, implemntaremos un defineEmits para recoger la información de la acción del usuario por medio de un evento de click en cualquiera de los botones. Para ello debemos de modificar tanto el componente de PokemonOptions como el de PokemonGame.

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-16.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<br>

<div align=center>
  <img src="./img/r6-01-17.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-18.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>


Tras haber conseguido esto, ahora toca centrarnos en la lógica del juego, es decir en como determinamos si se ha ganado o no. Para ello simplemente comprobaremos que la id del pokemon sea igual a la de la opción seleccionada, cambiando el estado del juego a ganado y mostrando una animación de con canvas-confetti para resaltar la victoría. En caso contrario, se revelará el pokémon únicamente.

Cabe destacar que también debemos de desactivar los botones una vez se haya escogido una opción independientemente del resultado. Para esto es importante usar un propiedad reactiva.


***

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-19.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-20.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-21.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

#### Resaltar las opciones

Para llevarlo acabo jugaremos con los estilos de los botones y utilizaremos props para enviar el id de la respuesta correcta para comprobar que estilo cargará nuestro botón.


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-22.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-23.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-24.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/r6-01-25.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***


<div align=center>
  <img src="./img/resources/jolteon.gif" width="90">
  <img src="./img/resources/eevee.gif" width="90">  
  <img src="./img/resources/espeon.gif" width="90">
</div>

### Extra

#### Reinicio del juego

Para esta implementación crearemos un nuevo metodo que reinicie todos los valores clave del juego, el cual será llamado en un nuevo boton. Este botón será mostrado única y exclusivamente cuando la partida haya finalizado haciendo uso de la directiva v-if.


<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/rE-01-01.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/rE-01-02.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/rE-01-03.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

<div align=center>
  <img src="./img/rE-01-04.png" width="700">
</div>

<hr style="border: 1px solid #729eb2; width: 50%; margin: 20px auto;">

<br>

***

</div>
