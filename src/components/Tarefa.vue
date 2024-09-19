<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao || "Tarefa sem descrição"}}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Cronometro from './Cronometro.vue';
  import type ITarefa from '@/interfaces/ITarefa';

  defineProps<{
    tarefa: ITarefa
  }>()
</script>

<style scoped>
  .box {
    background-color: #faf0ca;
  }
</style>