<template>
  <h2><code>{{ data.query }}</code></h2>
  <p>Possible values</p>
  <ul>
    <li v-for="value in data.values" :key="value">
      <code>{{ value }}</code>
    </li>
  </ul>
  <p>Detected: <code>{{ detected }}</code></p>
  <a :href="data.docs" target="_blank">{{ data.docs }}</a>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

export interface MediaQueryItemModel {
  query: string;
  values: string[];
  docs: string;
}

const props = defineProps<{
  data: MediaQueryItemModel
}>()

const detected = computed(() => {
  for (const value of props.data.values) {
    if (window.matchMedia(`(${props.data.query}: ${value})`).matches) {
      return value;
    }
  }
  return 'unsupported';
});
</script>