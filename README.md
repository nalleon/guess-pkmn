<div align="justify">

# Adivina el pokémon

> ✒️ __Autor__:  Nabil L.A. ([@nalleon](https://github.com/nalleon)) 

Repositorio dedicado a un pequeño proyecto del módulo de DAD acerca de adividar un pokémon.

<div align="center">
<img src="./img/cover.png">
</div>

## Índice
- [Reto 01](#reto-01)
  - [Configuración de Vue](#configuración-vue)
  - [Limpieza del proyecto](#limpieza-del-proyecto)
  - [Implementación de Tailwind CSS](#implementación-de-tailwind-css)
- [Extra](#extra)

<div align="center">

[![Tyranitar](https://img.pokemondb.net/sprites/sword-shield/normal/tyranitar.png)](https://pokemondb.net/pokedex/tyranitar)
[![Hydreigon](https://img.pokemondb.net/sprites/sword-shield/normal/hydreigon.png)](https://pokemondb.net/pokedex/hydreigon)
[![Arcanine](https://img.pokemondb.net/sprites/sword-shield/normal/arcanine.png)](https://pokemondb.net/pokedex/arcanine)
</div>


## Retos

### Reto 01

#### Configuración Vue

En primer lugar configuraremos nuestro proyecto de Vue. En la siguiente imagen tenemos la configuración seleccionada:

***

<br>

<div align="center" border="1px">
<img src="./img/r1-01.png" width="700">
</div>

***

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

<div align="center" border="1px">
<img src="./img/r1-02-01.png" width="700">
<img src="./img/r1-02-02.png" width="700">
</div>


***

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

<div align="center" border="1px">
<img src="./img/r1-03-01.png" width="700">
</div>
<br>

***

Tras esto, añaderemos el mensaje de "Hello World" a App.vue y procederemos a elimiar de assets el estilo base.css junto con el logo.svg y renombraremos main.css a assets.css (además de actualizar o eliminar los imports que nos generen problemas con nuestros cambios).


<div align="center" border="1px">
<img src="./img/r1-03-02.png" width="700">
</div>
<br>

***

Para finalizar por este punto, se nos mostrará en el nacegador de esta manera:

<div align="center" border="1px">
<img src="./img/r1-03-03.png" width="700">
</div>
<br>

***

#### Implementación de Tailwind CSS


Continuando implemtaremos el framework de CSS [Tailwind](https://tailwindcss.com/). Para ello realizaremos las siguientes instalaciones:

- Para instalar el frameworj junto con sus dependencias y generar los archivos de configuracion.js:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
<div align="center" border="1px">
<img src="./img/r1-03-03.png" width="700">
</div>
<br>

***

Ahora nos dedicaremos a a configurar el archivo "tailwind.config.js" para poder utilizar el framework en nuestros componentes.

<div align="center" border="1px">
<img src="./img/r1-04-01.png" width="700">
</div>
<br>

***

Una vez establecida la configuración, añadiremos las etiquetas de tailwind en index.css (un nuevo archivo que crearemos en el directorio src):



<div align="center" border="1px">
<img src="./img/r1-04-02.png" width="700">
</div>
<br>

***

Finalmente añadiremos unos estilos de tailwind a al etiqueta h1 pa¶æ comprobar la funcionalidad.

<div align="center" border="1px">
<img src="./img/r1-04-03.png" width="700">
</div>
<br>

***


## Extra


</div>