<template>
  <!--<section v-show="isVisible" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl"> Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemón</h3>
  </section>-->
  <section class="flex flex-col justify-center items-center w-screen h-screen bg-">
    <h1 class="text-3xl">¿Cúal es este pokémon?</h1>
    <PokemonPicture />
    <PokemonOptions />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PokemonPicture from '../modules/pokemon/components/PokemonPicture.vue'
import PokemonOptions from '../modules/pokemon/components/PokemonOptions.vue'
import { usePokemonGame } from '../modules/pokemon/composables/usePokemonGame'
export default defineComponent({
  name: 'PokemonGame',

  setup() {
    const isVisible = ref(false)
    const { gameStatus } = usePokemonGame()
    return { isVisible }
  },

  components: {
    PokemonPicture,
    PokemonOptions,
  },
})
</script>

<style scoped></style>
