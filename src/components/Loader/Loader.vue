<template>
  <div class="loader" :class="{ hide: hide, secondary }"></div>
</template>

<script>
export default {
  props: {
    noFlickering: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false }
  },
  data() {
    return {
      hide: false
    };
  },
  created() {
    if (this.noFlickering) {
      this.hide = true;
      setTimeout(() => (this.hide = false), 50);
    }
  }
};
</script>

<style scoped>
.loader {
  --loader-size: 150px;
  background-image: url('/img/secondary-loading.gif');
  background-size: var(--loader-size);
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  min-height: var(--loader-size);
  min-width: var(--loader-size);
}

.loader.secondary {
  --loader-size: 70px;
  background-image: url('/img/secondary-loading.gif');
}

.loader.hide {
  visibility: hidden;
}
</style>
