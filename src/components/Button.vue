<template>
  <button
    :type="type"
    :class="[{ loading: loading, secondary: secondary }]"
    :disabled="disabled || loading"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    loading: { default: false, type: Boolean },
    disabled: { default: false, type: Boolean },
    secondary: { default: false, type: Boolean },
    type: { default: "submit", type: String },
  },
};
</script>

<style scoped>
button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  padding: 0 20px;
  background-color: var(--swimm-blue);
  position: relative;
  color: white;
  border: none;
  border-radius: 4px;
  font-family: var(--fontfamily-main);
  font-size: var(--fontsize-xs);
  font-weight: 800;
  outline: none;
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

button:not([disabled]) {
  cursor: pointer;
}

button.secondary:not([disabled]) {
  background: transparent;
  border: 1px var(--deep-sea) solid;
  color: var(--deep-sea);
}

button:hover:not([disabled]):not(.secondary),
button.hover:not([disabled]):not(.secondary) {
  background-color: #0056df;
}

button.secondary:hover:not([disabled]),
button.secondary.hover:not([disabled]) {
  opacity: 0.7;
}

button:active:not([disabled]) {
  transform: scale(0.95);
}

button:disabled:not(.loading) {
  color: white;
  background-color: #bfbfbf;
}

button.secondary:disabled {
  background-color: transparent;
  color: #bfbfbf;
  border: 1px #bfbfbf solid;
}

button.loading {
  background-image: url(/img/loading.gif);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: transparent;
}
</style>
