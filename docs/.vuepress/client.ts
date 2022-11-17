import { defineClientConfig } from '@vuepress/client';
import 'fontaweswimm/src/fonts/fontaweswimm/style.css';
import '../../public/styles/index.css';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';

export default defineClientConfig({
  enhance({ app }) {
    app.use(FloatingVue, {
      boundary: 'window',
    });
  },
});
