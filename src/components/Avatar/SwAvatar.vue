<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import { SHAPE, SIZE } from './constants';

const props = defineProps({
  text: { type: String, required: true },
  src: { type: String, default: '' },
  size: {
    type: String as PropType<SIZE>,
    default: SIZE.LARGE,
    validator: (value: SIZE) => Object.values(SIZE).includes(value),
  },
  shape: {
    type: String as PropType<SHAPE>,
    default: SHAPE.ROUND,
    validator: (value: SHAPE) => Object.values(SHAPE).includes(value),
  },
  border: { type: Boolean, default: true },
});

const letter = computed(() => props.text.charAt(0));
const colorGroup = computed(() => (letter.value.charCodeAt(0) % 5) + 1);
</script>

<template>
  <div :class="['wrapper', `color-group-${colorGroup}`, shape, size, border]">
    <img class="image" v-if="src" :src="src" :alt="text" />
    <span v-else class="capitalize">{{ letter }}</span>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
}

.image {
  width: 100%;
  object-fit: cover;
}

.capitalize {
  text-transform: uppercase;
}

.wrapper.border {
  border: 1px solid var(--border-color-subtle);
}

.wrapper.round {
  border-radius: 50%;
}
.wrapper.square {
  border-radius: 10px;
}

.wrapper.xsmall {
  font-size: 12px;
  width: 16px;
  height: 16px;
}
.wrapper.small {
  font-size: 21px;
  width: 24px;
  height: 24px;
}
.wrapper.medium {
  font-size: 24px;
  width: 32px;
  height: 32px;
}
.wrapper.large {
  font-size: 48px;
  width: 64px;
  height: 64px;
}
.wrapper.xlarge {
  font-size: 48px;
  width: 72px;
  height: 72px;
}
.wrapper.huge {
  font-size: 64px;
  width: 112px;
  height: 112px;
}

.wrapper.color-group-1 {
  color: var(--text-color-on-light);
  background-color: var(--color-decorative-2);
}

.wrapper.color-group-2 {
  color: var(--text-color-on-primary);
  background-color: var(--color-decorative-1);
}

.wrapper.color-group-3 {
  color: var(--text-color-on-light);
  background-color: var(--color-decorative-3);
}

.wrapper.color-group-4 {
  color: var(--text-color-on-primary);
  background-color: var(--color-decorative-5);
}

.wrapper.color-group-5 {
  color: var(--text-color-on-primary);
  background-color: var(--color-decorative-4);
}
</style>
