<template>
    <section class="flex flex-col justify-center items-center">
      <ul>
        <li>
          <button type="button"> <p>Pokémon 1</p></button>
        </li>
        <li>
          <button type="button"> <p>Pokémon 2</p></button>
        </li>
        <li>
          <button type="button"> <p>Pokémon 3</p></button>
        </li>
        <li>
          <button type="button"> <p>Pokémon 4</p></button>
        </li>
      </ul>
    </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name:'PokemonOptions',

      setup() {


          return {
          }
        },
    }

  )
</script>

<style scoped>
li > button {
  @apply rounded-full text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 ;
}
</style>
