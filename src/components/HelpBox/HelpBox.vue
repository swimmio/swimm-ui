<template>
  <div class="help-box" :class="{ transparent, wide }">
    <slot>
      <Icon v-if="iconName" class="icon" :name="iconName" />
      <h3 v-if="title">{{ title }}</h3>
      <span v-if="description">{{ description }}</span>
    </slot>
    <slot name="extras" />
  </div>
</template>

<script>
export default {
  props: {
    iconName: { type: String, default: null },
    title: { type: String, default: null },
    description: { type: String, default: null },
    transparent: { type: Boolean, default: false },
    wide: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.help-box {
  box-sizing: border-box;
  text-align: center;
  margin-top: 20px;
  background-color: var(--color-surface);
  padding: 75px 185px;
  box-shadow: 1px 1px 4px rgba(66, 66, 66, 0.2);
  border-radius: 6px;
}

.help-box.transparent {
  background-color: transparent;
  box-shadow: none;
}

.help-box.wide {
  padding: 75px 0;
}

h3 {
  margin-top: 20px;
}

.icon {
  font-size: var(--fontsize-xl);
  background: radial-gradient(
    81.39% 140.38% at 83.61% -16.79%,
    #b958f0 30.43%,
    #0c68ff 81.53%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
