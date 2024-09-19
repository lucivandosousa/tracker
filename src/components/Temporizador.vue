<template>
  <div class="is-flex is-align-items-center">
    <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
    <div>
      <button class="button ml-2" v-on:click="iniciar" :disabled="cronometroIniciado">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-track-next"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" /><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" /></svg>
        <span>play</span>
      </button>
      <button class="button ml-2" v-on:click="finalizar" :disabled="!cronometroIniciado">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-stop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" /></svg>
        <span>stop</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Cronometro from './Cronometro.vue';

  const tempoEmSegundos = ref(0)
  const cronometro = ref(0)
  const cronometroIniciado = ref(false)
  const emit = defineEmits(["tempozizadorFinalizado"])

  function iniciar() {
    cronometroIniciado.value = true
    cronometro.value = setInterval(() => {
      tempoEmSegundos.value++
    }, 1000)
  }

  function finalizar() {
    cronometroIniciado.value = false
    clearInterval(cronometro.value)
    emit("tempozizadorFinalizado", tempoEmSegundos.value)
    tempoEmSegundos.value = 0
  }
</script>

<style scoped>

</style>