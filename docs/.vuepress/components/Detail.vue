<template>
  <span class="detail"><slot /></span>
</template>

<style scoped>
.detail {
  background: var(--spec-color);
  border-radius: 50%;
  color: var(--text-color-on-primary);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
}
</style>
