<script setup lang="ts">
import { onMounted, ref } from 'vue';

const hide = ref(false);
const props = defineProps({
  noFlickering: { type: Boolean, default: false },
  secondary: { type: Boolean, default: false },
});

onMounted(() => {
  if (props.noFlickering) {
    hide.value = true;
    setTimeout(() => (hide.value = false), 50);
  }
});
</script>

<template>
  <div class="loader" :class="{ hide: hide, secondary }"></div>
</template>

<style scoped>
.loader {
  --loader-size: 150px;
  background-image: url('@/assets/loading.gif');
  background-size: var(--loader-size);
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  min-height: var(--loader-size);
  min-width: var(--loader-size);
}
.loader.secondary {
  --loader-size: 70px;
  background-image: url('@/assets/secondary-loading.gif');
}
.loader.hide {
  visibility: hidden;
}
</style>
