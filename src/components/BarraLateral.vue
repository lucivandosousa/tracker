<template>
  <header>
    <div class="is-flex is-align-items-center is-justify-content-center">
      <h1>Tracker</h1>
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ededed"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-stack-3 ml-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2l-8 4l8 4l8 -4l-8 -4" /><path d="M4 10l8 4l8 -4" /><path d="M4 18l8 4l8 -4" /><path d="M4 14l8 4l8 -4" /></svg>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
  header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
  }

  header h1 {
    color: #ededed;
    font-size: 32px;
  }

  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
</style>