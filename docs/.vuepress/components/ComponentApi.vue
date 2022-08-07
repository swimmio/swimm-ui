<script setup>
import { apiData } from '@temp/componentsApi';
import ComponentProps from './ComponentProps.vue';
import ComponentEvents from './ComponentEvents.vue';
import ComponentSlots from './ComponentSlots.vue';

const props = defineProps({
  name: { type: String, required: true },
});

const data = apiData.filter(
  (component) => component.displayName === props.name
)[0];
</script>

<template>
  <ComponentProps v-if="data.props" :component-props="data.props" />
  <ComponentEvents v-if="data.events" :component-events="data.events" />
  <ComponentSlots v-if="data.slots" :component-slots="data.slots" />
</template>
