<template>
  <div class='breadcrumbs'>
    <Breadcrumb v-for='(item, index) in items'
                :key='index'
                class='item'
                :name='item.name'
                :icon='item.icon'
                :link='item.link'
    />
  </div>
</template>

<script>
import Breadcrumb from './Breadcrumb/Breadcrumb.vue';

export default {
  components: { Breadcrumb },
  props: {
    items: {
      type: Array,
      required: true,
      validator: (items) => {
        return items.every(({ icon, name }) => {
          return icon && name;
        });
      }
    }
  }
};
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
