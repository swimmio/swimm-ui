<script setup lang="ts">
import type { PropType } from 'vue';
import type { VARIANTS } from '../Typography/constants';
import SwText from '../Typography/SwText.vue';

defineProps({
  variant: {
    type: String as PropType<VARIANTS>,
    required: true,
  },
  animate: { type: Boolean, default: true },
});
</script>

<template>
  <SwText
    :variant="variant"
    v-bind="$attrs"
    :class="['skeleton', { animate }]"
  />
</template>

<style scoped>
.skeleton {
  background: var(--color-surface);
  border-radius: 4px;
  margin: 0;
}

.skeleton:not(h1, h2, h3, h4, h5, h6):before {
  content: '\200b'; /* to apply height for empty div/span */
}

.skeleton.animate {
  animation: loading 1s linear infinite alternate;
}

@keyframes loading {
  0% {
    background-color: var(--color-surface);
  }
  100% {
    background-color: var(--color-hover);
  }
}
</style>
