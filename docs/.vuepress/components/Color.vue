<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
  name: { type: String, required: true },
});

const { name } = toRefs(props);
const hex = computed(() => {
  const style = window.getComputedStyle(document.body);
  return style.getPropertyValue(`--${name.value}`);
});
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
  margin: 16px 16px 0 0;
  width: 200px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--c-border);
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
