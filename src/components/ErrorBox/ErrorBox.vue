<template>
  <div class="error">
    <slot></slot>
  </div>
</template>

<style scoped>
.error {
  font-size: var(--body-XS);
  color: var(--text-color-on-error);
}
</style>
