<script setup>
import SwText from '../Typography/SwText.vue';

defineProps({
  variant: { type: String, required: true },
  width: { type: Number, default: 100 },
  animate: { type: Boolean, default: true },
});
</script>

<template>
  <SwText :variant="variant" :class="['skeleton', { animate }]" />
</template>

<style scoped>
.skeleton {
  background: var(--color-surface);
  margin-top: var(--space-xs);
  border-radius: 4px;
  width: calc(v-bind(width) * 1px);
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
