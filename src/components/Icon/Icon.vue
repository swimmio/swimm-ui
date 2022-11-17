<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  name: { type: String, required: true },
  tooltip: { type: String, default: null },
  noPadding: { type: Boolean, required: false, default: false },
});
defineEmits(['click']);

const computedIconNameClass = computed(() => `icon-${props.name}`);
const computedNoPaddingClass = computed(() => ({
  'no-padding': props.noPadding,
}));
</script>

<template>
  <i
    v-tooltip="tooltip"
    class="icon"
    :class="[computedIconNameClass, computedNoPaddingClass]"
    @click="$emit('click', $event)"
  ></i>
</template>

<style scoped>
.no-padding {
  padding: 0;
}
</style>
