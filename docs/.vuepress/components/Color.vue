<script setup>
import { computed, toRefs } from 'vue';
import { getCssVariable } from './utils.js';

const props = defineProps({
  name: { type: String, required: true },
});
const { name } = toRefs(props);
const hex = computed(() => getCssVariable(name.value));
</script>

<template>
  <div class="color-wrapper">
    <div class="color" :style="`background: var(--${name})`" />
    <div class="content">
      <div class="name">{{ name }}</div>
      <div class="hex">{{ hex }}</div>
    </div>
  </div>
</template>

<style scoped>
.color-wrapper {
  margin: 10px;
  width: 200px;
  box-shadow: var(--box-shadow-small);
  border-radius: 4px;
  overflow: hidden;
}

.content {
  padding: 10px;
}

.color {
  width: 100%;
  height: 100px;
  margin-right: 10px;
}

.name {
  margin-bottom: 10px;
  font-weight: 500;
}
</style>
