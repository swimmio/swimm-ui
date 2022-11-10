<script setup lang="ts">
import { computed } from 'vue';
import { SHAPE, SIZE } from './constants';

const props = defineProps({
  text: { type: String, required: true },
  src: { type: String, default: '' },
  size: {
    type: String,
    default: SIZE.LARGE,
    validator: (value: string) => Object.values(SIZE).includes(value),
  },
  shape: {
    type: String,
    default: SHAPE.ROUND,
    validator: (value: string) => Object.values(SHAPE).includes(value),
  },
});

const letter = computed(() => props.text.charAt(0));
</script>

<template>
  <div :class="['wrapper', [shape], [size]]">
    <img class="image" v-if="src" :src="src" :alt="text" />
    <span v-else class="capitalize">{{ letter }}</span>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-brand);
  color: var(--text-color-on-primary);

  overflow: hidden;
  border: 1px solid var(--border-color-subtle);
}

.image {
  width: 100%;
  object-fit: cover;
}

.capitalize {
  text-transform: uppercase;
}

.wrapper.round {
  border-radius: 50%;
}
.wrapper.square {
  border-radius: 15%;
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
</style>
