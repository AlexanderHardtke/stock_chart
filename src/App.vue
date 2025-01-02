<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>Main Comp works</h1>

    <div class="wrapper">
      <HelloWorld />

    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
