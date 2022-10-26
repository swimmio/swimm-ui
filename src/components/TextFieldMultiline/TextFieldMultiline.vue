<template>
  <textarea
    ref="textarea"
    class="field-input"
    :class="{ headline: headline, small }"
    :readonly="readonly"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:model-value', $event.target.value)"
    @keydown="$emit('keydown', $event)"
  ></textarea>
</template>

<script>
export default {
  props: {
    modelValue: { type: String, required: true },
    placeholder: { type: String, default: '' },
    readonly: { type: Boolean, default: false },
    headline: { type: Boolean, default: false },
    focusFirst: { type: Boolean, required: false },
    small: { type: Boolean, default: false },
  },
  emits: ['update:model-value', 'keydown'],
  mounted() {
    if (this.focusFirst) {
      this.$nextTick(() => this.$refs.textarea.focus());
    }
  },
};
</script>

<style scoped>
textarea {
  padding: 10px 12px;
  width: 100%;
  height: 10rem;
  font-size: var(--body-L);
  font-family: var(--fontfamily-main);
  border: 1px solid var(--border-color-input);
  border-radius: 4px;
  text-align: left;
  color: var(--text-color-primary);
  background-color: var(--color-bg);
  outline: none;
  resize: none;
  box-sizing: border-box;
}

textarea.small {
  height: 5rem;
}

textarea[readonly] {
  color: var(--text-color-disable);
}

textarea::placeholder {
  font-style: normal;
}

textarea:focus {
  border: 1px solid black;
}
</style>
