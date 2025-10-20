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
  background: #1e293b;
  border-radius: 1rem;
  padding: 2rem;
  border: 0.125rem solid #334155;

  @media (prefers-reduced-motion: no-preference) {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeIn 0.5s ease;
  }

  @media (prefers-color-scheme: light) {
    background: #ffffff;
    border-color: #e2e8f0;
  }

  &:hover {
    border-color: #3b82f6;

    @media (prefers-reduced-motion: no-preference) {
      transform: translateY(-0.25rem);
      box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.4);
    }

    @media (prefers-color-scheme: light) {
      @media (prefers-reduced-motion: no-preference) {
        box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.1);
      }
    }
  }

  &__heading {
    margin-top: 0;
    margin-bottom: 1.25rem;
    font-size: 1.375rem;
    font-weight: 800;

    code {
      color: #60a5fa;
      font-family: 'Courier New', Courier, monospace;
      font-weight: 900;
      letter-spacing: -0.03125rem;

      @media (prefers-color-scheme: light) {
        color: #2563eb;
      }
    }
  }

  &__detected {
    margin: 1.25rem 0;
    padding: 1rem 1.25rem;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 0.75rem;
    border-left: 0.25rem solid #3b82f6;
    font-weight: 600;
    color: #94a3b8;

    @media (prefers-color-scheme: light) {
      background: rgba(37, 99, 235, 0.08);
      border-left-color: #2563eb;
      color: #475569;
    }

    code {
      font-family: 'Courier New', Courier, monospace;
      font-size: 1.625rem;
      font-weight: 800;
      color: #60a5fa;

      @media (prefers-color-scheme: light) {
        color: #2563eb;
      }
    }
  }

  &__values {
    display: flex;
    gap: 0.625rem;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    font-size: 0.95rem;
    margin: 1.5rem 0;

    > li {
      position: relative;
      padding: 0.5rem 1rem;
      background: #0f172a;
      border: 0.125rem solid #334155;
      border-radius: 0.5rem;

      @media (prefers-reduced-motion: no-preference) {
        transition: all 0.2s ease;
      }

      @media (prefers-color-scheme: light) {
        background: #f8fafc;
        border-color: #cbd5e1;
      }

      &:hover:not(.media-item__value--strikethrough) {
        background: #1e293b;
        border-color: #3b82f6;

        @media (prefers-reduced-motion: no-preference) {
          transform: translateY(-0.125rem);
        }

        @media (prefers-color-scheme: light) {
          background: #eff6ff;
          border-color: #3b82f6;
        }
      }

      code {
        color: #cbd5e1;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 700;

        @media (prefers-color-scheme: light) {
          color: #1e293b;
        }
      }
    }
  }

  &__value {
    &--strikethrough {
      text-decoration: line-through;
      opacity: 0.35;
      text-decoration-color: #ef4444;
      border-color: #7f1d1d !important;

      &:hover {
        border-color: #7f1d1d !important;

        @media (prefers-reduced-motion: no-preference) {
          transform: none !important;
        }

        @media (prefers-color-scheme: light) {
          border-color: #fca5a5 !important;
        }
      }

      code {
        color: #ef4444;

        @media (prefers-color-scheme: light) {
          color: #dc2626;
        }
      }

      @media (prefers-color-scheme: light) {
        border-color: #fca5a5 !important;
        background: #fef2f2 !important;
        opacity: 0.5;
      }
    }
  }

  a {
    display: inline-block;
    margin-top: 1.25rem;
    padding: 0.75rem 1.5rem;
    background: #3b82f6;
    color: white;
    border-radius: 0.5rem;
    font-size: 0.95rem;
    font-weight: 700;

    @media (prefers-reduced-motion: no-preference) {
      transition: all 0.3s ease;
    }

    @media (prefers-color-scheme: light) {
      background: #2563eb;
    }

    &:hover {
      background: #2563eb;
      text-decoration: none;
      color: white;

      @media (prefers-reduced-motion: no-preference) {
        transform: translateY(-0.125rem);
        box-shadow: 0 0.25rem 0.75rem rgba(59, 130, 246, 0.4);
      }

      @media (prefers-color-scheme: light) {
        background: #1d4ed8;
      }
    }
  }
}

@media (prefers-reduced-motion: no-preference) {
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(1.25rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>