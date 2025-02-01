<template>
  <section class="flex flex-col justify-center items-center">
    <button 
      type="button" 
      v-for="{ name, id } in options" 
      :key="id" 
      @click="$emit('selectedOption', id)"
      :disabled="blockSelection"
      :class="{
        'capitalize': true,
        'default-button': !blockSelection || !correctOptionId,
        'win-button': blockSelection && id == correctOptionId,
        'lose-button':  blockSelection && correctOptionId !== id 
      }"
    >
      {{ name }}
    </button>
  </section>
</template>
<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';
import type { Pokemon } from '../interfaces/pokemon.interface';

export default defineComponent({
  name: 'PokemonOptions',
  props:{
    options:{
      type: Array as PropType<Pokemon[]>,
      required: true
    },
    blockSelection: {
      type: Boolean,
      required: true
    },
    correctOptionId: {
      type: Number,
      default: -1
    }
  },

  setup(props) {
    const options = computed(() => props.options);
    const blockSelection = computed(() => props.blockSelection);
    const correctOptionId = computed(() => props.correctOptionId);

    return {
      options: options,
      blockSelection: blockSelection,
      correctOptionId: correctOptionId
    }
  },
})
</script>

<style scoped>
 .default-button {
  @apply rounded-full text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2;
}

.win-button {
  @apply rounded-full text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2;
}

.lose-button {
  @apply rounded-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2;
}

</style>
