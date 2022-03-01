<template>
  <div class="empty-state" :class="{ transparent, wide }">
    <Icon v-if="iconName" class="icon" :name="iconName" />
    <h3 v-if="title" class="title">{{ title }}</h3>
    <p v-if="description" class="description">{{ description }}</p>
    <div v-if="isSlot" class="action">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    iconName: { type: String, default: null },
    title: { type: String },
    description: { type: String, default: null },
    transparent: { type: Boolean, default: false },
    wide: { type: Boolean, default: false },
  },
  computed: {
    isSlot(){
      return !!this.$slots.default;
    }
  }
};
</script>

<style scoped>

.title{
  margin: 0 0 8px 0;
  font-weight: 700;
}
.description{
  margin: 0 0 8px 0;
  font-weight: 400;

  color: var(--text-color-secondary);
}

.icon {
  margin-bottom: 8px;
  font-size: var(--fontsize-xl);
}

.empty-state {
  font-family: var(--fontfamily-main);
  background-color: var(--color-surface);
  box-shadow: 1px 1px 4px rgba(66, 66, 66, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-evenly;
  padding: 24px 0;
}
.action{
  margin-top: 8px;
}

.empty-state.transparent {
  background-color: transparent;
  box-shadow: none;
}
</style>
