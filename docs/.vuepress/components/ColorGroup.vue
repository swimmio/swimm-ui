<template>
  <ClientOnly>
    <div class="color-group">
      <slot />
    </div>
  </ClientOnly>
</template>

<style scoped>
.color-group {
  display: flex;
  flex-wrap: wrap;
}
</style>
