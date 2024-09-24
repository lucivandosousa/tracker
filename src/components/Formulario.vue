<template>
  <div class="box">
    <div class="columns container-custom">
      <div class="column is-5" role="form" aria-label="Formulário para criação de tarefas">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar" v-model="descricao">
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @tempozizador-finalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import Temporizador from './Temporizador.vue';
  //@ts-ignore
  import { useStore } from 'vuex';
  import { key } from '@/store';

  const descricao = ref("")

  const emit = defineEmits(["aoSalvarTarefa"])

  const idProjeto = ref("")

  const store = useStore(key)

  const projetos = computed(() => store.state.projetos)

  function finalizarTarefa(tempoDecorrigo: number): void {
    emit('aoSalvarTarefa', {
      duracaoEmSegundos: tempoDecorrigo,
      descricao: descricao.value,
      projeto: projetos.value.find((proj: any) => proj.id == idProjeto.value)
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