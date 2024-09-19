<template>
  <section class="mr-3">
    <strong>{{ tempoDecorrido }}</strong>
  </section>
</template>

<script setup lang="ts">

  interface CronometroProps {
    tempoEmSegundos: number
  }

  import { computed } from 'vue';
  
  const props = defineProps<CronometroProps>()

  const tempoDecorrido = computed(() => {
    return new Date(props.tempoEmSegundos * 1000).toISOString().substr(11, 8)
  })
  
</script>

<style scoped>

</style>