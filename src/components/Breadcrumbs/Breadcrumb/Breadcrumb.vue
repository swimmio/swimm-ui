<template>
  <div class='breadcrumb'>
    <component :is='link ? "router-link" : "div"' :to='link' class='content' :class="{ 'has-link': !!link }">
      <Icon :name='icon' />
      <span>{{ name }}</span>
    </component>
  </div>
</template>

<script>
import Icon from '../../Icon/Icon';

export default {
  components: { Icon },
  props: {
    icon: { type: String, required: true },
    name: { type: String, required: true },
    link: {
      type: [ String, Object ]
    }
  }
};
</script>
<style scoped>
.breadcrumb {
  color: var(--text-color-primary);
  font-family: var(--fontfamily-main);
  font-size: var(--fontsize-xs);
  margin: 11px 0;
}

.content {
  display: inline-flex;
  align-items: center;
  color: var(--text-color-primary);
  padding: 4px;
  border-radius: 4px;
  transition: background-color 150ms linear;
}

.breadcrumb .content.has-link:hover {
  text-decoration: none;
  background-color: var(--color-hover);
}

.breadcrumb .content:not(.has-link) {
  cursor: default;
}

span {
  padding-inline-start: 6px;
}
</style>
