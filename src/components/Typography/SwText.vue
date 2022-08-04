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

<script>
import {
  FONT_FAMILY,
  VARIANTS,
  WEIGHTS,
  variantToComponentMap,
  variantToFontFamilyMap,
  variantToWeightMap,
} from './constants';

export default {
  props: {
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
  },
  setup() {
    return { VARIANTS };
  },
  computed: {
    viewComponent() {
      if (this.component) {
        return this.component;
      }

      return variantToComponentMap[this.variant];
    },
    fontFamily() {
      if (this.family) {
        return this.family;
      }

      return variantToFontFamilyMap[this.variant];
    },
    fontWeight() {
      if (this.weight) {
        this.weight;
      }
      return String(variantToWeightMap[this.variant]);
    },
  },
};
</script>

<style scoped>
.some {
  color: red;
}
</style>
