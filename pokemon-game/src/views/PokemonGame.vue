<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl"> Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemón</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen bg-">
    <h1 class="text-3xl">¿Cúal es este pokémon?</h1>
    <PokemonPicture :pokemonId="getRndPokemon.id" :showPokemon="gameStatus != GameStatus.Playing" />
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
    const { gameStatus, getRndPokemon, isLoading, pokemonOptions } = usePokemonGame();
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

    return { gameStatus, getRndPokemon, isLoading, GameStatus, pokemonOptions,
       checkAnswer, correctOptionId  }
  },

  components: {
    PokemonPicture,
    PokemonOptions,
  },
})
</script>

<style scoped></style>
