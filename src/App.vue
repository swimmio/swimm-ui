<template>
  <div class="app">
    <div class="side-menu">
      <div class="logo"><img width="100" alt="logo" src="/img/logo.png" /></div>
      <div class="items">
        <div class="page-item" @click="page = ''">Main</div>
        <div class="page-item" @click="page = 'buttons'">Buttons</div>
      </div>
    </div>
    <div class="page">
      <buttons v-if="page === 'buttons'" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Buttons from "./pages/Buttons.vue";

type Pages = "buttons";

@Component({
  components: { Buttons },
})
export default class App extends Vue {
  public page: Pages = "buttons";
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
.side-menu .items .page-item:hover {
  background-color: var(--fifty-shades);
}

.page {
  flex: 1;
}
</style>
