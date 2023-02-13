<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  text: { type: String, required: true },
  src: { type: String, default: '' },
  size: {
    type: String as PropType<SwAvatarSize>,
    default: 'small',
    validator: (value: SwAvatarSize) =>
      Object.values(SwAvatarSizeValues).includes(value),
  },
  tooltip: { type: String, default: '' },
  hideTooltip: { type: Boolean, default: false },
  square: { type: Boolean, default: false },
  border: { type: Boolean, default: false },
});
const letter = computed(() => (props.text || ' ').charAt(0).toUpperCase());
const colorGroup = computed(() => (letter.value.charCodeAt(0) % 5) + 1);
const tooltipText = computed(() =>
  props.hideTooltip ? '' : props.tooltip || props.text
);
</script>

<template>
  <div
    :class="[
      'avatar',
      size,
      { [`color-group-${colorGroup}`]: !src, square, border },
    ]"
    v-tooltip="tooltipText"
  >
    <img v-if="src" :src="src" :alt="text" class="image" />
    <span v-else :data-name="text">{{ letter }}</span>
  </div>
</template>

<script lang="ts">
export const SwAvatarSizeValues = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'huge',
] as const;
export type SwAvatarSize = typeof SwAvatarSizeValues[number];
</script>

<style scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: default;
}

.image {
  max-height: 100%;
  object-fit: contain;
}

.avatar.border {
  border: 1px solid var(--border-color-subtle);
}

.avatar.square {
  border-radius: 15%;
}

.avatar.xsmall {
  font-size: 12px;
  width: 16px;
  height: 16px;
}
.avatar.small {
  font-size: 14px;
  width: 24px;
  height: 24px;
}
.avatar.medium {
  font-size: 24px;
  width: 32px;
  height: 32px;
}
.avatar.large {
  font-size: 48px;
  width: 64px;
  height: 64px;
}
.avatar.xlarge {
  font-size: 48px;
  width: 72px;
  height: 72px;
}
.avatar.huge {
  font-size: 64px;
  width: 112px;
  height: 112px;
}

.avatar.color-group-1 {
  color: var(--text-color-on-light);
  background-color: var(--color-decorative-2);
}

.avatar.color-group-2 {
  color: var(--text-color-on-primary);
  background-color: var(--color-decorative-1);
}

.avatar.color-group-3 {
  color: var(--text-color-on-light);
  background-color: var(--color-decorative-3);
}

.avatar.color-group-4 {
  color: var(--text-color-on-primary);
  background-color: var(--color-decorative-5);
}

.avatar.color-group-5 {
  color: var(--text-color-on-primary);
  background-color: var(--color-decorative-4);
}
</style>
