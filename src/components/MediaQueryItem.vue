<template>
  <section class="media-item">
    <h2 class="media-item__heading"><code>{{ data.query }}</code></h2>
    <p class="media-item__detected">Detected: <code>{{ detected }}</code></p>
    <ul class="media-item__values">
      <li v-for="value in data.values" :key="value" :class="{ 'media-item__value--strikethrough': detected !== value }">
        <code>{{ value }}</code>
      </li>
    </ul>
    <a :href="data.docs" target="_blank">MDN Docs</a>
  </section>
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

<style lang="scss" scoped>
.media-item {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  &__heading {
    margin-top: 0;
  }

  &__detected {
    code {
      font-size: 1.5rem;
    }
  }

  &__values {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    font-size: 1.125rem;

    > li {
      position: relative;

      &:not(:last-child)::after {
        position: absolute;
        content: '|';
        right: -0.5rem;
        opacity: 0.5;
      }
    }
  }

  &__value {
    &--strikethrough {
      text-decoration: line-through;
      opacity: 0.5;
      text-decoration-color: rgba(255, 0, 0, 0.8);
    }
  }
}
</style>