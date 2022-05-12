<script setup>
import { ref, computed, toRefs } from 'vue';

const props = defineProps({
  content: { type: String, default: '' },
});
const { content } = toRefs(props);

const showCode = ref(false);
const code = computed(() => decodeURIComponent(content.value));
</script>

<template>
  <section class="demo-wrapper">
    <div class="slot-wrapper">
      <slot />
      <button class="show-button" @click="showCode = !showCode">Code</button>
    </div>
    <div v-if="showCode" class="code language-vue ext-vue">
      <pre class="language-vue"><code v-html="code" /></pre>
    </div>
  </section>
</template>

<style scoped>
.demo-wrapper {
  margin-top: 10px;
  border: 1px solid var(--c-border);
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px;
  overflow: hidden;
  border-radius: 6px;
}

.slot-wrapper {
  position: relative;
  padding: 32px 24px;
}

pre.language-vue {
  margin: 0;
  border-radius: 0;
}

.code.language-vue {
  border-radius: 0;
}

.show-button {
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  border: 1px solid var(--c-border);
  background-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-left-radius: 6px;
  font-size: 12px;
  padding: 4px 6px;
  color: var(--c-text);
}

.show-button:hover {
  opacity: 0.5;
}
</style>
