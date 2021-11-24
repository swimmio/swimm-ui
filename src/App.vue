<template>
  <div class="app">
    <div class="side-menu">
      <div class="logo"><img width="100" alt="logo" src="/img/logo.png" /></div>
      <div class="items">
        <div
          class="page-item"
          :class="{ current: currentPage === '' }"
          @click="currentPage = ''"
        >
          Main
        </div>
        <div
          v-for="page in pages"
          :key="page"
          :class="{ current: currentPage === page }"
          class="page-item"
          @click="currentPage = page"
        >
          {{ page | capitalize }}
        </div>
      </div>
      <Action secondary @click.native="toggleDark">
        {{ isDark ? "Light" : "Dark" }}
      </Action>
    </div>
    <div class="page">
      <Buttons v-if="currentPage === 'buttons'" />
      <Colors v-if="currentPage === 'colors'" />
      <SemanticColors v-if="currentPage === 'semantic'" />
    </div>
  </div>
</template>

<script>
import Action from "./components/Action/Action.vue";
import Buttons from "./pages/Buttons.vue";
import Colors from "./pages/Colors.vue";
import SemanticColors from "./pages/SemanticColors.vue";

export default {
  name: "App",
  components: { Action, Buttons, Colors, SemanticColors },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  mounted() {
    if (document.body.dataset.theme === "dark") {
      this.isDark = true;
    }
  },
  data() {
    return {
      isDark: false,
      pages: ["buttons", "colors", "semantic"],
      currentPage: "semantic",
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
.app {
  display: flex;
  justify-content: space-between;
}
.side-menu {
  background-color: var(--color-surface);
  color: var(--text-color-primary);
  min-width: 250px;
  height: 100vh;
  text-align: center;
}
.side-menu .logo {
  margin-top: 10px;
}
.side-menu .items {
  padding-top: 50px;
  margin: 20px;
}
.side-menu .items .page-item {
  cursor: pointer;
  border-radius: 4px;
  padding: 4px;
  margin: 10px;
}
.side-menu .items .page-item.current,
.side-menu .items .page-item:hover {
  background-color: var(--text-color-invert);
}

.page {
  flex: 1;
  background-color: var(--color-bg);
  color: var(--text-color-primary);
  border-color: var(--border-color-input);
}
</style>
