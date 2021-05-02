<template>
  <componet :is="type" :class="classes" :disabled="disabled || loading">
    <slot>Button text</slot>
  </componet>
</template>

<script>
export const SIZES = { BIG: "big", SMALL: "small" };
export const VARIANTS = { DANGER: "danger", SUCCESS: "success" };
export const TYPES = { BUTTON: "button", LINK: "a" };

/**
 * Button
 */
export default {
  props: {
    /**
     * The size of the button. Defaults to big.
     * @values big, small
     */
    size: {
      type: String,
      default: SIZES.BIG,
    },
    /**
     * Flag for secondary button style
     * @type {boolean}
     */
    secondary: { default: false, type: Boolean },
    /**
     * Flag for is button is loading
     * @type {boolean}
     */
    loading: { default: false, type: Boolean },
    /**
     * Flag for is button is disabled
     * @type {boolean}
     */
    disabled: { default: false, type: Boolean },
    /**
     * The html element used for the button.
     * @values button, link
     */
    type: {
      type: String,
      default: TYPES.BUTTON,
    },
    /**
     * When setting the button’s type to a link (), use this option to give a href.
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * Variant options
     * @values danger, success
     */
    variant: {
      type: String,
      default: null,
    },
  },
  computed: {
    classes() {
      return [
        "button",
        this.size,
        this.variant,
        {
          disabled: this.disabled,
          loading: this.loading,
          secondary: this.secondary,
          link: this.type === TYPES.LINK,
        },
      ];
    },
  },
};
</script>

<style scoped>
.button {
  position: relative;
  border: 1px solid transparent;
  border-radius: 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  background: var(--swimm-blue);
  color: var(--clear-white);
  font-family: var(--fontfamily-main);
  font-size: var(--subtitle-L);
  font-weight: 800;
  outline: none;
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.button:not([disabled]) {
  cursor: pointer;
}

.button:not([disabled]):hover {
  background: linear-gradient(
      0deg,
      rgba(0, 62, 159, 0.3),
      rgba(0, 62, 159, 0.3)
    ),
    var(--swimm-blue);
}

.button.secondary {
  color: var(--deep-sea);
  background: transparent;
  border-color: var(--deep-sea);
}

.button.secondary:not([disabled]):hover {
  color: var(--high-tide);
  background: var(--clear-white-100);
  border-color: var(--high-tide);
}

.button.link {
  display: unset;
  background: var(--clear-white);
  border-color: var(--clear-white);
  color: var(--high-tide);
}

.button.link:not([disabled]):hover {
  background: var(--fifty-shades);
}

.button:active:not([disabled]) {
  transform: scale(0.95);
}

.button.disabled,
.button:disabled {
  color: var(--fifty-shades);
  background: var(--wash-me);
}

.button.secondary:disabled {
  background: transparent;
}

.button.small {
  padding: 5px 16px;
  font-size: var(--subtitle-S);
}

.button.danger {
  background: var(--oh-no-red-100);
  border-color: transparent;
  color: var(--oh-no-red);
}

.button.danger:not([disabled]):hover {
  background: var(--oh-no-red-300);
  border-color: transparent;
  color: var(--oh-no-red);
}

.button.success {
  background: var(--success-green-100);
  border-color: transparent;
  color: var(--success-green);
}

.button.success:not([disabled]):hover {
  background: var(--success-green-300);
  border-color: transparent;
  color: var(--success-green);
}

.button.loading {
  background-image: url(/img/loading.gif);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: transparent;
}

.button.loading.small {
  padding: 0;
}
</style>
