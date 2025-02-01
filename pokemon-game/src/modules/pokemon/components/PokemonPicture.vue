<template>
  <section class="flex flex-col justify-center items-center">
    <img v-if="!showPokemon" class="brightness-0 h-[200px]" :src="url" alt="pokemon image"/>
    <img v-else class="h-[200px]" :src="url" alt="pokemon image"/>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

interface Props {
  pokemonId: number;
  showPokemon?: boolean;
}

export default defineComponent({
  name: 'PokemonPicture',
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon:{
      type: Boolean,
      required:false,
    }
  },

  setup(props) {
    const url = computed(
      () => 
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png`
    )
    return {
      url,
    }
  },
})
</script>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
