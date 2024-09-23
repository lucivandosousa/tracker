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
  </section>
</template>

<script setup lang="ts">
  import { key } from '@/store';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';

  const nomeDoProjeto = ref("")
  const store = useStore(key)
  const router = useRouter()

  function salvar() {
    store.commit("ADICIONA_PROJETO", nomeDoProjeto.value)
    nomeDoProjeto.value = ""
    router.push("/projetos")
  }
</script>

<style scoped>
  .projetos {
    padding: 1.25rem;
  }
</style>