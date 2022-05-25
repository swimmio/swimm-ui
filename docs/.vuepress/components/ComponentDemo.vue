<script>
export default {
  name: 'ComponentDemo',
  props: {
    content: { type: String, default: '' },
  },
  data() {
    return { showCode: false };
  },
  computed: {
    code() {
      return decodeURIComponent(this.content);
    },
  },
};
</script>

<template>
  <section class="demo-wrapper">
    <div class="slot-wrapper">
      <slot />
      <button class="show-button" @click="showCode = !showCode">Code</button>
    </div>
    <div v-if="showCode" class="code language-vue ext-vue" v-html="code"></div>
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

<style>
.code.language-vue.ext-vue pre.language-vue {
  margin: 0;
  border-radius: 0;
}
</style>
