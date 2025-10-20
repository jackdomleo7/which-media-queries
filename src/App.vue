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
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  color: #60a5fa;
  margin-bottom: 1.5rem;
  letter-spacing: -0.0625rem;
  line-height: 1.2;

  @media (prefers-color-scheme: light) {
    color: #2563eb;
  }
}

footer {
  margin-top: 6rem;
  padding: 2rem 0;
  text-align: center;
  
  a {
    color: white;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    background: #3b82f6;
    border-radius: 0.75rem;
    display: inline-block;
    font-weight: 700;

    @media (prefers-reduced-motion: no-preference) {
      transition: all 0.3s ease;
    }

    &:hover {
      background: #2563eb;
      text-decoration: none;

      @media (prefers-reduced-motion: no-preference) {
        transform: translateY(-0.125rem);
        box-shadow: 0 0.25rem 0.75rem rgba(59, 130, 246, 0.5);
      }
    }

    @media (prefers-color-scheme: light) {
      background: #2563eb;

      &:hover {
        background: #1d4ed8;
      }
    }
  }
}
</style>
