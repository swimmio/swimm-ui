<template>
  <div>
    <div class="row">
      <div
        class="color-group"
        v-for="colorGroup in colorsGroups"
        :key="colorGroup.name"
      >
        <h1>{{ colorGroup.name }}</h1>
        <div class="color-row" v-for="color in colorGroup.colors" :key="color">
          <div class="color" :style="`background: var(--${color})`" />
          <div>{{ color }}</div>
        </div>
      </div>
    </div>
    <Action @click.native="toggleDark">
      {{ isDark ? "Light" : "Dark" }}
    </Action>
  </div>
</template>

<script>
import Action from "../components/Action/Action.vue";

export default {
  components: { Action },
  name: "Buttons",
  mounted() {
    if (document.body.dataset.theme === "dark") {
      this.isDark = true;
    }
  },
  data() {
    return {
      isDark: false,
      colorsGroups: [
        {
          name: "Common",
          colors: [
            "color-bg",
            "color-surface",
            "color-hover",
            "color-selected",
          ],
        },
        {
          name: "Variants",
          colors: [
            "color-primary-default",
            "color-primary-hover",
            "color-secondary-default",
            "color-secondary-hover",
            "color-disable",
            "color-error",
            "color-success",
            "color-warning",
            "color-autosync",
          ],
        },
        {
          name: "Text",
          colors: [
            "text-color-primary",
            "text-color-secondary",
            "text-color-link",
            "text-color-on-primary",
            "text-color-invert",
            "text-color-disable",
            "text-color-on-error",
            "text-color-on-success",
            "text-color-on-warning",
            "text-color-on-placeholder",
          ],
        },
        {
          name: "Border",
          colors: [
            "border-color-input",
            "border-color-focus",
            "border-color-error",
          ],
        },
      ],
    };
  },
  methods: {
    toggleDark() {
      if (this.isDark) {
        document.body.setAttribute("data-theme", "light");
        this.isDark = false;
      } else {
        document.body.setAttribute("data-theme", "dark");
        this.isDark = true;
      }
    },
  },
};
</script>

<style>
.row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.color-group {
  text-align: center;
}

.color-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
}

.color {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--fifty-shades);
}
</style>