<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarters">
      <Formulario @ao-salvar-tarefa="salvarTarefa"/>
      <div class="box has-text-weight-bold has-text-centered" v-if="tarefas.length === 0">
        Não tem tarefas para executar.
      </div>
      <div class="lista" v-else>
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
    </div>
    <div>

    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import BarraLateral from './components/BarraLateral.vue';
  import Formulario from './components/Formulario.vue'
  import Tarefa from './components/Tarefa.vue';
  import type ITarefa from './interfaces/ITarefa';

  const tarefas = ref<ITarefa[]>([])

  function salvarTarefa(tarefa: ITarefa) {
    tarefas.value.push(tarefa)
  }
</script>

<style scoped>
  .lista {
    padding: 1.25rem;
  }
</style>
