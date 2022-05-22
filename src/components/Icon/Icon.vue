<template>
  <i
    v-tooltip="tooltip"
    class="icon"
    :class="[computedIconNameClass, computedNoPaddingClass]"
    @click="$emit('click', $event)"
  ></i>
</template>

<script>
export default {
  emit: ['click'],
  props: {
    name: { type: String, required: true },
    tooltip: { type: String, default: null },
    noPadding: { type: Boolean, required: false, default: false },
  },
  computed: {
    computedIconNameClass() {
      return `icon-${this.name}`;
    },
    computedNoPaddingClass() {
      return { 'no-padding': this.noPadding };
    },
  },
};
</script>
<style scoped>
.no-padding {
  padding: 0;
}
</style>
