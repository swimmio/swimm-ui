<template>
  <div id="app">
    <div class="row">
      <Action class="dummy-button">Primary Default</Action>
      <Action class="dummy-button"></Action>
      <Action class="dummy-button" trailingIcon="arrow-right">Primary with</Action>
      <Action class="dummy-button" :disabled="true">Primary Disabled</Action>
    </div>
    <div class="row">
      <Action class="dummy-button" secondary>Secondary Default</Action>
      <Action class="dummy-button" secondary :disabled="true"
        >Secondary Disabled</Action
      >
    </div>
    <div class="row">
      <Action class="dummy-button" :type="TYPES.LINK">Link Default</Action>
      <Action class="dummy-button" :type="TYPES.LINK" :disabled="true"
        >Link Disabled</Action
      >
    </div>
    <div class="row">
      <Action class="dummy-button" loading>Loading</Action>
      <Action class="dummy-button" secondary loading>Loading</Action>
      <Action class="dummy-button" :type="TYPES.LINK" loading>Loading</Action>
      <Action class="dummy-button" loading :size="SIZES.SMALL">Loading</Action>
      <Action class="dummy-button" loading :variant="VARIANTS.DANGER"
        >Loading</Action
      >
      <Action class="dummy-button" loading :variant="VARIANTS.SUCCESS"
        >Loading</Action
      >
    </div>
    <div class="row">
      <Action class="dummy-button" :variant="VARIANTS.DANGER" secondary
        >Primary Danger</Action
      >
      <Action class="dummy-button" :variant="VARIANTS.SUCCESS"
        >Primary Success</Action
      >
    </div>
    <div class="row">
      <Action class="dummy-button" :size="SIZES.SMALL">Small Default</Action>
      <Action class="dummy-button" :size="SIZES.SMALL" :disabled="true"
        >Small Disabled</Action
      >
    </div>
    <div class="row">
      <Action class="dummy-button" :size="SIZES.SMALL" secondary
        >Secondary Default</Action
      >
      <Action
        class="dummy-button"
        :size="SIZES.SMALL"
        secondary
        :disabled="true"
        >Secondary Disabled</Action
      >
    </div>
    <div class="row">
      <Action class="dummy-button" :size="SIZES.SMALL" :type="TYPES.LINK"
        >Link Default</Action
      >
      <Action
        class="dummy-button"
        :size="SIZES.SMALL"
        :type="TYPES.LINK"
        :disabled="true"
        >Link Disabled</Action
      >
    </div>
  </div>
</template>

<script>
import Action, { TYPES, SIZES, VARIANTS } from "./components/Action/Action.vue";

export default {
  name: "App",
  components: {
    Action,
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
