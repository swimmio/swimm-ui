<template>
  <componet
    :is="type"
    :type="buttonType"
    :class="classes"
    :disabled="disabled || loading"
    :href="href"
  >
    <slot>Button text</slot>
    <Icon
      v-if="trailingIcon"
      :name="trailingIcon"
      class="trailing-icon no-padding"
    />
  </componet>
</template>

<script>
import Icon from "../Icon/Icon.vue";

export const SIZES = { BIG: "big", SMALL: "small" };
export const VARIANTS = { DANGER: "danger", SUCCESS: "success" };
export const TYPES = { BUTTON: "button", LINK: "a" };

/**
 * Button
 */
export default {
  components: { Icon },
  props: {
    /**
     * The size of the button. Defaults to big.
     * @values big, small
     */
    size: { type: String, default: SIZES.BIG },
    /**
     * Flag for secondary button style
     * @type {boolean}
     */
    secondary: { type: Boolean, default: false },
    /**
     * Flag for is button is loading
     * @type {boolean}
     */
    loading: { type: Boolean, default: false },
    /**
     * Flag for is button is disabled
     * @type {boolean}
     */
    disabled: { type: Boolean, default: false },
    /**
     * The html element used for the button.
     * @values button, link
     */
    type: { type: String, default: TYPES.BUTTON },
    /**
     * When setting the button’s type to a link (), use this option to give a href.
     */
    href: { type: String, default: null },
    /**
     * Variant options
     * @values danger, success
     */
    variant: { type: String, default: null },
    /**
     * Appended icon
     * @values Any icon from Fontaweswimm library
     */
    trailingIcon: { type: String, default: null },
    /**
     * Button type
     * @values type attr of the button tag
     */
    buttonType: { type: String, default: "submit" },
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
  text-decoration: none;
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

.button:not([disabled]):focus,
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

.button.secondary:not([disabled]):focus,
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

.button.link:not([disabled]):focus,
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

.button.small {
  padding: 5px 16px;
  font-size: var(--subtitle-S);
}

.button.danger {
  background: var(--oh-no-red-100);
  border-color: transparent;
  color: var(--oh-no-red);
}

.button.danger:not([disabled]):focus,
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

.button.success:not([disabled]):focus,
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

.trailing-icon {
  margin-left: 10px;
}
</style>
