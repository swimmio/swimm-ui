<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  value: { type: Boolean, required: true },
  disabled: { type: Boolean, default: false },
  size: {
    type: String as PropType<ToggleSize>,
    default: 'medium',
    validator: (value: ToggleSize) =>
      Object.values(ToggleSizeValues).includes(value),
  },
});

const emit = defineEmits(['change']);

function onChange(event: Event) {
  !props.disabled && emit('change', (event.target as HTMLInputElement).checked);
}
</script>

<script lang="ts">
const ToggleSizeValues = ['xsmall', 'small', 'medium', 'large'] as const;
export type ToggleSize = typeof ToggleSizeValues[number];
</script>

<template>
  <label :class="['wrapper', [size], { disabled }]">
    <input
      class="input"
      :checked="value"
      :disabled="disabled"
      type="checkbox"
      @change="onChange"
    />
    <span class="toggle" />
  </label>
</template>

<style scoped>
.wrapper {
  display: flex;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s;
}

.wrapper.xsmall {
  --toggle-padding: 2px;
  --toggle-width: 16px;
  --toggle-height: calc(var(--toggle-width) / 2);
}

.wrapper.small {
  --toggle-padding: 4px;
  --toggle-width: 24px;
  --toggle-height: calc(var(--toggle-width) / 2);
}

.wrapper.medium {
  --toggle-padding: 4px;
  --toggle-width: 32px;
  --toggle-height: calc(var(--toggle-width) / 2);
}

.wrapper.large {
  --toggle-padding: 4px;
  --toggle-width: 48px;
  --toggle-height: calc(var(--toggle-width) / 2);
}

.wrapper.disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.input {
  opacity: 0;
  width: 0;
  margin: 0;
}

.toggle {
  display: inline-block;
  padding: var(--toggle-padding);
  position: relative;
  width: var(--toggle-width);
  height: var(--toggle-height);
  border-radius: calc(var(--toggle-height) + var(--toggle-padding));
  background: var(--text-color-secondary);
  transition: background 0.2s;
}

.input:checked ~ .toggle {
  background: var(--text-color-link);
}

.input:focus ~ .toggle {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
}

.toggle::after {
  content: '';
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: var(--toggle-height);
  height: var(--toggle-height);
  border-radius: 50%;
  background: var(--text-color-on-primary);
  transition: transform 0.2s;
}

.input:checked ~ .toggle::after {
  transform: translateX(var(--toggle-height));
}
</style>
