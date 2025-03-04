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
