<template>
  <span class="token">$<slot /></span>
</template>

<style scoped>
.token {
  background: var(--color-hover);
  padding: 2px var(--space-xs);
  border-radius: 4px;
}
</style>
