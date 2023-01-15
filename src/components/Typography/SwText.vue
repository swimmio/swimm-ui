<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  component: { type: String, default: null },
  variant: {
    type: String as PropType<SwTextVariant>,
    default: 'body-L',
    validator: (value: SwTextVariant) =>
      Object.values(SwTextVariantValues).includes(value),
  },
  family: {
    type: String as PropType<SwTextFontFamily>,
    default: null,
    validator: (value: SwTextFontFamily) =>
      Object.values(SwTextFontFamilyValues).includes(value),
  },
  weight: {
    type: String as PropType<SwTextWeight>,
    default: null,
    validator: (value: SwTextWeight) =>
      Object.values(SwTextWeightValues).includes(value),
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
const fontWeight = computed<number>(() => {
  if (props.weight) {
    return textWeights[props.weight];
  }

  return textWeights[variantToWeightMap[props.variant]];
});
</script>

<script lang="ts">
export const SwTextVariantValues = [
  'system-headline',
  'system-subtitle',
  'system-body',
  'title',
  'headline1',
  'headline2',
  'headline3',
  'subtitle-XL',
  'subtitle-L',
  'subtitle-S',
  'body-L',
  'body-S',
  'body-XS',
] as const;
export type SwTextVariant = typeof SwTextVariantValues[number];

const SwTextFontFamilyValues = [
  'fontfamily-main',
  'fontfamily-secondary',
] as const;
export type SwTextFontFamily = typeof SwTextFontFamilyValues[number];

const SwTextWeightValues = ['light', 'regular', 'bold', 'bolder'] as const;
export type SwTextWeight = typeof SwTextWeightValues[number];

const textWeights: Record<SwTextWeight, number> = {
  light: 300,
  regular: 400,
  bold: 600,
  bolder: 800,
};

const variantToComponentMap: Record<SwTextVariant, string> = {
  'system-headline': 'div',
  'system-subtitle': 'div',
  'system-body': 'div',
  title: 'h1',
  headline1: 'h1',
  headline2: 'h2',
  headline3: 'h3',
  'subtitle-XL': 'h4',
  'subtitle-L': 'h5',
  'subtitle-S': 'h6',
  'body-L': 'div',
  'body-S': 'div',
  'body-XS': 'div',
};

const variantToFontFamilyMap: Record<SwTextVariant, SwTextFontFamily> = {
  'system-headline': 'fontfamily-secondary',
  'system-subtitle': 'fontfamily-secondary',
  'system-body': 'fontfamily-secondary',
  title: 'fontfamily-main',
  headline1: 'fontfamily-main',
  headline2: 'fontfamily-main',
  headline3: 'fontfamily-main',
  'subtitle-XL': 'fontfamily-main',
  'subtitle-L': 'fontfamily-main',
  'subtitle-S': 'fontfamily-main',
  'body-L': 'fontfamily-main',
  'body-S': 'fontfamily-main',
  'body-XS': 'fontfamily-main',
};

const variantToWeightMap: Record<SwTextVariant, SwTextWeight> = {
  'system-headline': 'bold',
  'system-subtitle': 'bold',
  'system-body': 'regular',
  title: 'bold',
  headline1: 'bold',
  headline2: 'bold',
  headline3: 'bold',
  'subtitle-XL': 'bolder',
  'subtitle-L': 'bolder',
  'subtitle-S': 'bolder',
  'body-L': 'regular',
  'body-S': 'regular',
  'body-XS': 'regular',
};
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
