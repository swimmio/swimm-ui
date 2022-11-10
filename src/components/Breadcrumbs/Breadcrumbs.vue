<template>
  <div class="breadcrumbs">
    <Breadcrumb
      v-for="(item, index) in items"
      :key="index"
      class="item"
      :name="item.name"
      :icon="item.icon"
      :link="item.link"
    />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './Breadcrumb/Breadcrumb.vue';
import type { BreadcrumbType } from './Breadcrumb/types';

defineProps({
  items: {
    type: Array as () => Array<BreadcrumbType>,
    required: true,
    validator: (items: BreadcrumbType[]) => {
      return items.every(({ icon, name }) => {
        return icon && name;
      });
    },
  },
});
</script>
<style scoped>
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
}

.item:not(:last-child):after {
  content: '/';
  padding: 10px;
}
</style>
