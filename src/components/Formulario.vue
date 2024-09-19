<template>
  <div class="box">
    <div class="columns container-custom">
      <div class="column is-8" role="form" aria-label="Formulário para criação de tarefas">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar" v-model="descricao">
      </div>
      <div class="column">
        <Temporizador @tempozizador-finalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Temporizador from './Temporizador.vue';

  const descricao = ref("")

  const emit = defineEmits(["aoSalvarTarefa"])

  function finalizarTarefa(tempoDecorrigo: number): void {
    emit('aoSalvarTarefa', {
      duracaoEmSegundos: tempoDecorrigo,
      descricao: descricao.value
    })
    descricao.value = ""
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