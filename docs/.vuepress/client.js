import { defineClientConfig } from '@vuepress/client';
import 'fontaweswimm/src/fonts/fontaweswimm/style.css';
import '../../public/styles/index.css';
import FloatingVue from 'floating-vue';

export default defineClientConfig(({ app }) => {
  app.use(FloatingVue);
});
