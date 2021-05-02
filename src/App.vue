<template>
  <div id="app">
    <div class="row">
      <Button class="dummy-button">Primary Default</Button>
      <Button class="dummy-button"></Button>
      <Button class="dummy-button" :disabled="true">Primary Disabled</Button>
    </div>
    <div class="row">
      <Button class="dummy-button" secondary>Secondary Default</Button>
      <Button class="dummy-button" secondary :disabled="true"
        >Secondary Disabled</Button
      >
    </div>
    <div class="row">
      <Button class="dummy-button" :type="TYPES.LINK">Link Default</Button>
      <Button class="dummy-button" :type="TYPES.LINK" :disabled="true"
        >Link Disabled</Button
      >
    </div>
    <div class="row">
      <Button class="dummy-button" loading>Loading</Button>
      <Button class="dummy-button" secondary loading>Loading</Button>
      <Button class="dummy-button" :type="TYPES.LINK" loading>Loading</Button>
      <Button class="dummy-button" loading :size="SIZES.SMALL">Loading</Button>
      <Button class="dummy-button" loading :variant="VARIANTS.DANGER"
        >Loading</Button
      >
      <Button class="dummy-button" loading :variant="VARIANTS.SUCCESS"
        >Loading</Button
      >
    </div>
    <div class="row">
      <Button class="dummy-button" :variant="VARIANTS.DANGER" secondary
        >Primary Danger</Button
      >
      <Button class="dummy-button" :variant="VARIANTS.SUCCESS"
        >Primary Success</Button
      >
    </div>
    <div class="row">
      <Button class="dummy-button" :size="SIZES.SMALL">Small Default</Button>
      <Button class="dummy-button" :size="SIZES.SMALL" :disabled="true"
        >Small Disabled</Button
      >
    </div>
    <div class="row">
      <Button class="dummy-button" :size="SIZES.SMALL" secondary
        >Secondary Default</Button
      >
      <Button
        class="dummy-button"
        :size="SIZES.SMALL"
        secondary
        :disabled="true"
        >Secondary Disabled</Button
      >
    </div>
    <div class="row">
      <Button class="dummy-button" :size="SIZES.SMALL" :type="TYPES.LINK"
        >Link Default</Button
      >
      <Button
        class="dummy-button"
        :size="SIZES.SMALL"
        :type="TYPES.LINK"
        :disabled="true"
        >Link Disabled</Button
      >
    </div>
  </div>
</template>

<script>
import Button, { TYPES, SIZES, VARIANTS } from "./components/Button/Button.vue";

export default {
  name: "App",
  components: {
    Button,
  },
  computed: {
    TYPES() {
      return TYPES;
    },
    SIZES() {
      return SIZES;
    },
    VARIANTS() {
      return VARIANTS;
    },
  },
};
</script>

<style>
.row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.dummy-button {
  margin: 40px;
}
</style>
