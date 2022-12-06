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
  <div :class="['wrapper', [`group${colorGroup}`], { shape, size, border }]">
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

  &.border {
    border: 1px solid var(--border-color-subtle);
  }

  &.round {
    border-radius: 50%;
  }

  &.square {
    border-radius: 10px;
  }

  &.xsmall {
    font-size: var(--fontsize-xxs);
    width: 16px;
    height: 16px;
  }

  &.small {
    font-size: var(--fontsize-m);
    width: 24px;
    height: 24px;
  }

  &.medium {
    font-size: var(--fontsize-ml);
    width: 32px;
    height: 32px;
  }

  &.large {
    font-size: var(--fontsize-xxl);
    width: 64px;
    height: 64px;
  }

  &.xlarge {
    font-size: var(--fontsize-xxl);
    width: 72px;
    height: 72px;
  }

  &.huge {
    font-size: var(--fontsize-xxxl);
    width: 112px;
    height: 112px;
  }

  .image {
    width: 100%;
    object-fit: cover;
  }

  .capitalize {
    text-transform: uppercase;
  }
}
</style>
