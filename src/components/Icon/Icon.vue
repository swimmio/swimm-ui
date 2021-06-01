<template>
  <i
    v-tooltip="tooltip"
    class="icon"
    :class="[computedIconNameClass, computedNoPaddingClass]"
  ></i>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop({ type: String, required: true }) readonly name: string;
  @Prop({ type: String, default: null }) readonly tooltip: string;
  @Prop({ type: Boolean, required: false, default: false })
  readonly noPadding: string;

  get computedIconNameClass() {
    return `icon-${this.name}`;
  }
  get computedNoPaddingClass() {
    return { "no-padding": this.noPadding };
  }
}
</script>
<style scoped>
.no-padding {
  padding: 0;
}
</style>
