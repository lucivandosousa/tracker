<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarters">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
  import BarraLateral from './components/BarraLateral.vue';
</script>

<style scoped>
</style>
