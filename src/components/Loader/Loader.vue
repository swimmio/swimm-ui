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
  <div v-if="secondary" class="loader-secondary" :class="{ hide }"></div>
  <div v-else class="spinner-container" :class="{ hide }">
    <div class="loader-ripple">
      <div class="animation-div"></div>
      <div class="animation-div"></div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.loader-secondary {
  --loader-size: 70px;
  background-image: url('/img/secondary-loading.gif');
  background-size: var(--loader-size);
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  min-height: var(--loader-size);
  min-width: var(--loader-size);
}

.hide {
  visibility: hidden;
}

.spinner-container {
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
}

.loader-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loader-ripple .animation-div {
  position: absolute;
  border: 4px solid var(--color-brand);
  opacity: 1;
  border-radius: 50%;
  animation: loader-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loader-ripple .animation-div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes loader-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
