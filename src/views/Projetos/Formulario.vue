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
  import type IProjetos from '@/interfaces/IProjetos';
  import { key } from '@/store';
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  //@ts-ignore
  import { useStore } from 'vuex';

  const nomeDoProjeto = ref("")
  const idDoProjeto = ref<string | string[]>("")
  const store = useStore(key)
  const router = useRouter()
  const route = useRoute()
  idDoProjeto.value = route.params.id

  onMounted(() => {
    if (idDoProjeto.value) {
      const projeto = store.state.projetos.find((proj: IProjetos) => proj.id == idDoProjeto.value)
      nomeDoProjeto.value = projeto?.nome || ""
    }
  })

  function salvar() {
    if (idDoProjeto.value) {
      store.commit("ALTERA_PROJETO", {
        id: idDoProjeto.value,
        nome: nomeDoProjeto.value
      })
    } else {
      store.commit("ADICIONA_PROJETO", nomeDoProjeto.value)
    }
    nomeDoProjeto.value = ""
    router.push("/projetos")
  }
</script>

<style scoped>
  .projetos {
    padding: 1.25rem;
  }
</style>