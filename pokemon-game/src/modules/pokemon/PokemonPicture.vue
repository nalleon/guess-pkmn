<template>
    <section class="flex flex-col justify-center items-center">
      <img class="brightness-0 h-[200px]" :src=url>
    </section>
</template>


<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name:'PokemonPicture',
    setup() {
        const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png'

        return {
          url
        }
      },
    }
  )
</script>


<style scoped>
img{
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
