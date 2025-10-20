<template>
  <main>
    <MediaQueryItem v-for="item in items" :key="item.query" :data="item"  />
  </main>
</template>

<script lang="ts" setup>
import MediaQueryItem from '@/components/MediaQueryItem.vue';
import { items } from '@/data/list';

items.sort((a,b) => (a.query > b.query) ? 1 : ((b.query > a.query) ? -1 : 0)) // Sort in alphabetical order by query
</script>

<style lang="scss" scoped>
main {
  margin-top: 3rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 400px) {
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  }
}
</style>
