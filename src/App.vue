<template>
  <header>
    which-media-queries
  </header>

  <RouterView />

  <footer>
    <a href="https://github.com/jackdomleo7/which-media-queries">GitHub</a>
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
header {
  font-size: 2rem;
}

footer {
  margin-top: 4rem;
  text-align: center;
}
</style>
