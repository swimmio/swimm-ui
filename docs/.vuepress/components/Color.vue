<template>
  <div class="color-wrapper">
    <div class="color" :style="`background: var(--${name})`" />
    <div class="content">
      <div class="name">{{ name }}</div>
      <div class="hex">{{ hex }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type:String, required: true }
  },
  computed:{
    hex() {
      const style = getComputedStyle(document.body);
      return style.getPropertyValue(`--${this.name}`);
    }
  }
}
</script>

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
