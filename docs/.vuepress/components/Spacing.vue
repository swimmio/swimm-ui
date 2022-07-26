<script setup>
import { computed } from 'vue';
import { getCssVariable, getSizeInPx } from './utils.js';

const props = defineProps({
  name: { type: String, required: true },
});

const spacingValue = computed(() => getCssVariable(props.name));
const spacingValueInPx = computed(() => getSizeInPx(spacingValue.value));
</script>

<template>
  <tr>
    <td>
      <div
        class="cube"
        :style="`width: var(--${name}); height: var(--${name})`"
      />
    </td>
    <td>
      <Token>{{ name }}</Token>
    </td>
    <td>
      <Detail>{{ spacingValueInPx }}</Detail>
    </td>
    <td>
      {{ spacingValue }}
    </td>
    <td><slot /></td>
  </tr>
</template>

<style scoped>
.cube {
  background: var(--spec-color);
}
</style>
