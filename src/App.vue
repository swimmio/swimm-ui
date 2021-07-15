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
          :class="{ current: currentPage === 'buttons' }"
          class="page-item"
          @click="currentPage = page"
        >
          {{ page | capitalize }}
        </div>
      </div>
    </div>
    <div class="page">
      <buttons v-if="currentPage === 'buttons'" />
    </div>
  </div>
</template>

<script>
import Buttons from "./pages/Buttons.vue";

export default {
  name: "App",
  components: { Buttons },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  data() {
    return {
      pages: ["buttons"],
      currentPage: "buttons",
    };
  },
};
</script>

<style>
.app {
  display: flex;
  justify-content: space-between;
}
.side-menu {
  background-color: var(--wash-me);
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
  background-color: var(--fifty-shades);
}

.page {
  flex: 1;
}
</style>
