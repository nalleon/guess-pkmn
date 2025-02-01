<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl"> Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemón</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen bg-">
    <h1 class="text-3xl">¿Cúal es este pokémon?</h1>
    <PokemonPicture :pokemonId="getRndPokemon.id" :showPokemon="gameStatus != GameStatus.Playing" />
    <button 
      v-if="gameStatus !== GameStatus.Playing" 
      @click="restartGame" 
      class="restart-button"
    >
      Reiniciar Juego
    </button>
    <hr class="my-4 w-3/4 border-t-2 border-gray-300" />
    <PokemonOptions :options="pokemonOptions" 
                    @selected-option="checkAnswer"
                    :blockSelection="gameStatus!= GameStatus.Playing" 
                    :correctOptionId="correctOptionId"
                    />

  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PokemonPicture from '../modules/pokemon/components/PokemonPicture.vue'
import PokemonOptions from '../modules/pokemon/components/PokemonOptions.vue'
import { usePokemonGame } from '../modules/pokemon/composables/usePokemonGame'
import { GameStatus } from '@/modules/pokemon/interfaces';
import confetti from 'canvas-confetti';

export default defineComponent({
  name: 'PokemonGame',

  setup() {
    const { gameStatus, getRndPokemon, isLoading, pokemonOptions, getNextOptions } = usePokemonGame();
    const correctOptionId = ref<number>(-1);

    const checkAnswer = (id: number) => {
      const hasWon = getRndPokemon.value.id == id;
      correctOptionId.value = getRndPokemon.value.id;

      if(hasWon){
         gameStatus.value = GameStatus.Won;
         confetti({
              particleCount: 300,
              spread:150,
              origin: {y:0.6},
         });
         return;
      }

      gameStatus.value = GameStatus.Lost;
    }

    const restartGame = () => {
      gameStatus.value = GameStatus.Playing;
      correctOptionId.value = -1;
      getNextOptions();
    };

    return { gameStatus, getRndPokemon, isLoading, GameStatus, pokemonOptions,
       checkAnswer, correctOptionId, restartGame  }
  },

  components: {
    PokemonPicture,
    PokemonOptions,
  },
})
</script>

<style scoped>
.restart-button {
  @apply rounded-full text-white bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2;
}

</style>
