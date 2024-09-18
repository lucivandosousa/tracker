<template>
  <div class="box">
    <div class="columns container-custom">
      <div class="column is-8" role="form" aria-label="Formulário para criação de tarefas">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar">
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center">
          <section class="mr-3">
            <strong>{{ tempoDecorrido }}</strong>
          </section>
          <div>
            <button class="button" v-on:click="iniciar">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-track-next"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" /><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" /></svg>
              <span>play</span>
            </button>
            <button class="button" v-on:click="finalizar">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-stop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" /></svg>
              <span>stop</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

  const tempoEmSegundos = ref(0)
  const cronometro = ref(0)
  const tempoDecorrido = computed(() => {
    return new Date(tempoEmSegundos.value * 1000).toISOString().substr(11, 8)
  })

  function iniciar() {
    cronometro.value = setInterval(() => {
      tempoEmSegundos.value++
    }, 1000)
  }

  function finalizar() {
    clearInterval(cronometro.value)
  }
</script>

<style scoped>
  @media only screen and (max-width: 1024px) {
    .container-custom {
      display: flex;
      flex-direction: column;
    }
  }
</style>