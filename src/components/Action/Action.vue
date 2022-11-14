<script setup lang="ts">
import { computed, type PropType } from 'vue';
import Icon from '../Icon/Icon.vue';
import { VARIANTS, SIZES, TYPES } from './constants';

defineEmits(['click']);
const props = defineProps({
  size: {
    type: String as PropType<SIZES>,
    default: SIZES.BIG,
  },
  secondary: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  noPadding: { type: Boolean, default: false },
  /* The html element used for the button. */
  type: {
    type: String as PropType<TYPES>,
    default: TYPES.BUTTON,
  },
  /* When setting the button’s type to a link (), use this option to give a href. */
  href: { type: String, default: null },
  variant: {
    type: String as PropType<VARIANTS>,
    default: null,
  },
  /* Any icon from Fontaweswimm library */
  trailingIcon: { type: String, default: null },
  buttonType: { type: String, default: 'submit' },
});

const classes = computed(() => {
  return [
    'button',
    props.size,
    props.variant,
    {
      'no-padding': props.noPadding,
      disabled: props.disabled,
      loading: props.loading,
      secondary: props.secondary,
      link: props.type === TYPES.LINK,
    },
  ];
});
</script>

<template>
  <component
    :is="type"
    :type="buttonType"
    :class="classes"
    :disabled="disabled || loading"
    :href="href"
    @click="$emit('click', $event)"
  >
    <slot>Button text</slot>
    <Icon
      v-if="trailingIcon"
      :name="trailingIcon"
      class="trailing-icon no-padding"
    />
  </component>
</template>

<style scoped>
.button {
  position: relative;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  background: var(--color-brand);
  color: var(--text-color-on-primary);
  font-family: var(--fontfamily-main);
  font-size: var(--subtitle-L);
  font-weight: 800;
  outline: none;
  transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.button:not([disabled]) {
  cursor: pointer;
}

.button:not([disabled]):focus-visible,
.button:not([disabled]):hover {
  background: var(--color-brand-hover);
}

.button.secondary {
  color: var(--text-color-primary);
  background: transparent;
  border-color: var(--border-color-primary);
}

.button.secondary:not([disabled]):focus-visible,
.button.secondary:not([disabled]):hover {
  color: var(--text-color-primary);
  background: var(--color-hover);
  border-color: var(--border-color-primary);
}

.button.link {
  display: unset;
  background: transparent;
  border-color: transparent;
  color: var(--high-tide);
}

.button.link:not([disabled]):focus-visible,
.button.link:not([disabled]):hover {
  background: var(--color-hover);
}

.button:active:not([disabled]) {
  transform: scale(0.95);
}

.button.disabled,
.button:disabled {
  color: var(--text-color-disable);
  background: var(--color-bg);
  cursor: not-allowed;
}

.button:not(.secondary):not(.link).disabled,
.button:not(.secondary):not(.link):disabled {
  background-color: var(--color-disable);
}

.button.secondary:not(.link).disabled,
.button.secondary:not(.link):disabled {
  border-color: var(--text-color-disable);
}

.button.small {
  padding: 5px 16px;
  font-size: var(--subtitle-S);
}

.button.danger {
  background: var(--color-error);
  border-color: transparent;
  color: var(--text-color-on-error);
}

.button.danger:not([disabled]):focus-visible,
.button.danger:not([disabled]):hover {
  background: var(--oh-no-red-300);
  border-color: transparent;
  color: var(--oh-no-red);
}

.button.success {
  background: var(--color-success);
  border-color: transparent;
  color: var(--text-color-on-success);
}

.button.success:not([disabled]):focus-visible,
.button.success:not([disabled]):hover {
  background: var(--success-green-300);
  border-color: transparent;
  color: var(--success-green);
}

.button.loading {
  background-image: url(/img/secondary-loading.gif);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: transparent;
}

.button.no-padding {
  padding: 0;
}

.trailing-icon {
  margin-left: 10px;
}
</style>
