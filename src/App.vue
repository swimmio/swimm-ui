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

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Buttons from "./pages/Buttons.vue";

type Pages = "buttons";

@Component({
  components: { Buttons },
  filters: {
    capitalize: function (value: string) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
})
export default class App extends Vue {
  public pages = ["buttons"];
  public currentPage: Pages = this.pages[0] as Pages;
}
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
