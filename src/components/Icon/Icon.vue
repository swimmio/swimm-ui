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
  props: {
    name: { type: String, required: true },
    tooltip: { type: String, default: null },
    noPadding: { type: Boolean, required: false, default: false },
  },
  emits: ['click'],
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
