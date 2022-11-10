<script setup lang="ts">
import { computed } from 'vue';
import {
  FONT_FAMILY,
  VARIANTS,
  WEIGHTS,
  variantToComponentMap,
  variantToFontFamilyMap,
  variantToWeightMap,
} from './constants';

const props = defineProps({
  component: { type: String, default: null },
  variant: {
    type: String,
    default: VARIANTS.BODY_L,
    validator: (value: string) => Object.values(VARIANTS).includes(value),
  },
  family: {
    type: String,
    default: null,
    validator: (value: string) => Object.values(FONT_FAMILY).includes(value),
  },
  weight: {
    type: String,
    default: null,
    validator: (value: string) => Object.values(WEIGHTS).includes(value),
  },
});

const viewComponent = computed<string>(() => {
  if (props.component) {
    return props.component;
  }

  return variantToComponentMap[props.variant];
});
const fontFamily = computed<string>(() => {
  if (props.family) {
    return props.family;
  }

  return variantToFontFamilyMap[props.variant];
});
const fontWeight = computed<string>(() => {
  if (props.weight) {
    return props.weight;
  }
  return variantToWeightMap[props.variant];
});
</script>

<template>
  <component
    :is="viewComponent"
    :class="[variant]"
    :style="{
      'font-weight': fontWeight,
      'font-family': `var(--${fontFamily})`,
    }"
  >
    <slot />
  </component>
</template>
