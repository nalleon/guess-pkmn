<template>
  <section v-show="isVisible" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl"> Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemón</h3>
  </section>
  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">¿Cúal es este pokémon?</h1>
      <PokemonPicture/>
      <PokemonOptions/>
  </section>

</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import PokemonPicture from '../components/pokemon/PokemonPicture.vue';
  import PokemonOptions from '../components/pokemon/PokemonOptions.vue';

  export default defineComponent({
    name:'PokemonGame',

    setup() {
      const isVisible = ref(false);
      return isVisible;
    }

    }
  )
</script>

<style scoped>

</style>
