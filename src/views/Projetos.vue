<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        >
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Projeto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
  import { key } from '@/store';
  import { ref, computed } from 'vue';
  import { useStore } from 'vuex';

  const nomeDoProjeto = ref("")
  const store = useStore(key)
  const projetos = computed(() => store.state.projetos)

  function salvar() {
    store.commit("ADICIONA_PROJETO", nomeDoProjeto.value)
    nomeDoProjeto.value = ""
  }
</script>

<style scoped>
  .projetos {
    padding: 1.25rem;
  }
</style>