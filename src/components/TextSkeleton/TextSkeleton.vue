<script setup lang="ts">
import type { PropType } from 'vue';
import {
  type SwTextVariant,
  SwTextVariantValues,
} from '../Typography/SwText.vue';
import SwText from '../Typography/SwText.vue';

defineProps({
  variant: {
    type: String as PropType<SwTextVariant>,
    required: true,
    validator: (value: SwTextVariant) =>
      Object.values(SwTextVariantValues).includes(value),
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
}

.skeleton:not(h1, h2, h3, h4, h5, h6):before {
  content: '\200b'; /* to apply height for empty div/span */
}

.skeleton.animate {
  animation: skeleton 0.7s linear infinite alternate;
}

@keyframes skeleton {
  from {
    background-color: var(--color-surface);
  }
  to {
    background-color: var(--color-hover);
  }
}
</style>
