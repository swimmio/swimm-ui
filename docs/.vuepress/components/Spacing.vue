<script setup>
import { computed } from 'vue';
import { getCssVariable, getSpacingSizeInEm, getSizeInPx } from './utils';

const props = defineProps({
  name: { type: String, required: true },
});

const spacingValue = computed(() => getCssVariable(props.name));
const spacingValueInPx = computed(() => getSizeInPx(spacingValue.value));
const spacingValueInEm = computed(() => getSpacingSizeInEm(spacingValue.value));
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
      {{ spacingValueInEm }}
    </td>
    <td><slot /></td>
  </tr>
</template>

<style scoped>
.cube {
  background: var(--spec-color);
}
</style>
