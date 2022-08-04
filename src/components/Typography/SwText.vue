<script setup>
import { computed, defineProps } from 'vue';
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
    validator: (value) => Object.values(VARIANTS).includes(value),
  },
  family: {
    type: String,
    default: null,
    validator: (value) => Object.values(FONT_FAMILY).includes(value),
  },
  weight: {
    type: String,
    default: null,
    validator: (value) => Object.values(WEIGHTS).includes(value),
  },
});

const viewComponent = computed(() => {
  if (props.component) {
    return props.component;
  }

  return variantToComponentMap[props.variant];
});
const fontFamily = computed(() => {
  if (props.family) {
    return props.family;
  }

  return variantToFontFamilyMap[props.variant];
});
const fontWeight = computed(() => {
  if (props.weight) {
    props.weight;
  }
  return String(variantToWeightMap[props.variant]);
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
    <slot></slot>
  </component>
</template>

<style scoped>
.some {
  color: red;
}
</style>
